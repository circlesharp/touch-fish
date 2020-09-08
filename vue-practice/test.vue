<template>
  <view class="bottom">
    <view class="tab-bar flex">
      <!-- part 1 首页 -->
      <view
        class="tab"
        @click="navChange"
        data-currenttab="home"
        :class="currentTab === 'home' ? 'text-yellow' : 'text-gray'"
      >
        <image
          :src="currentTab === 'home' ? '/static/home-on.png' : '/static/home-off.png'"
          class="tab-icon"
          mode="aspectFill"
        />
        <view class="tab-title">首页</view>
      </view>

      <!-- part 2 开门 -->
      <view class="over-tab-for-scan-bg flex" v-if="mobile">
        <button class="over-tab-for-scan flex" @tap="handleOpenDoor">
          <image
            src="/static/img_open_door_100x100.png"
            style="width: 100rpx; height: 100rpx; margin-bottom: 20rpx;"
          ></image>
          <text class="over-tab-for-text">开门</text>
        </button>
      </view>
      <view class="over-tab-for-scan-bg flex" v-else>
        <button
          open-type="getPhoneNumber"
          @getphonenumber="handelPhoneNumber"
          class="over-tab-for-scan flex"
        >
          <image
            src="/static/img_open_door_100x100.png"
            style="width: 100rpx; height: 100rpx; margin-bottom: 20rpx;"
          ></image>
          <text class="over-tab-for-text">开门</text>
        </button>
      </view>

      <!-- part 3 我的 -->
      <view
        class="tab"
        @click="navChange"
        data-currenttab="mine"
        :class="currentTab === 'mine' ? 'text-yellow' : 'text-gray'"
      >
        <!-- 手机号码判断 -->
        <view v-if="mobile">
          <button
            data-type="my"
            class="get-userinfo-btn"
            :class="currentTab === 'mine' ? 'text-yellow' : 'text-gray'"
          >
            <image
              :src="currentTab === 'mine' ? '/static/mine-on.png' : '/static/mine-off.png'"
              class="tab-icon"
              mode="aspectFill"
            />
            <view class="tab-title" style="line-height: 32rpx">我的</view>
          </button>
        </view>
        <view v-else>
          <button
            open-type="getPhoneNumber"
            @getphonenumber="handelPhoneNumber"
            data-type="my"
            class="get-userinfo-btn"
            :class="currentTab === 'mine' ? 'text-yellow' : 'text-gray'"
          >
            <image
              :src="currentTab === 'mine' ? '/static/mine-on.png' : '/static/mine-off.png'"
              class="tab-icon"
              mode="aspectFill"
            />
            <view class="tab-title" style="line-height: 32rpx">我的</view>
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
      currentTab: 'home', // 当前展示组件(默认首页)
      hasUserInfo: false, // 是否存在用户信息
    };
  },
  computed: {
    ...mapState(['currentCID', 'mobile', 'payscoreAuth']),
  },
  methods: {
    ...mapMutations(['setPayscoreAuth']),
    ...mapActions(['vertifyPayscore']),

    navChange({
      currentTarget: {
        dataset: { currenttab },
      },
    }) {
      this.currentTab = currenttab;
      // 未授权不能进入我的组件
      if (currenttab === 'mine' && !this.mobile) {
        return;
      }
      this.$emit('onNavChange', currenttab);
    },

    /**
     * START 开门相关
     * 1. created/showShow -> 检查支付分 -> (请求支付分) -> 开门
     * 2. 辅助的属性：payscoreAuth
     */
    // 开门，检查是否支付分已经授权（创建订单 / 请求支付分）
    async handleOpenDoor() {
      this.currentTab = 'home';
      this.$emit('onNavChange', 'home');
      // 判断状态
      await this.vertifyPayscore();
      if (this.payscoreAuth) {
        this.createOrder(); // 创建订单
      } else {
        this.requestPayscore(); // 签约请求
      }
    },
    // 支付分签约请求（1. 预授权；2. 支付分授权）
    async requestPayscore() {
      const { data } = await this.$request(
        'consumer.wx.payscore.permissions',
        {
          CID: this.currentCID,
        },
        false,
      ).catch(e => console.error(e));
      console.log('预授权成功', data);
      // 微信支付分开启服务
      if (wx.navigateToMiniProgram) {
        wx.navigateToMiniProgram({
          appId: 'wxd8f3793ea3b935b8',
          path: 'pages/use/enable',
          extraData: data,
          // 解决方案 3
          complete: res => {
            console.log('授权操作已处理', res);
            this.$emit('after-request-payscore');
          },
        });
      } else {
        console.log('请升级微信版本');
      }
    },
    // (签约后)创建订单
    async createOrder() {
      this.$emit('onShowLoading', true); // 显示开门状态-已开门
      const data = await this.$request(
        'consumer.cabinet.order.create',
        { CID: this.currentCID },
        false,
      ).catch(e => console.error(e));
      this.$emit('onShowLoading', false);
      if (data) {
        // 重置页面 展示开门状态
        this.$emit('onNavChange', '');
        this.$store.commit('setCurrentPage', '');
        this.$emit('onOpenToast', true);
        const {
          data: {
            CabinetOrderVO: { id },
          },
        } = data;
        console.log('创建订单成功', id);
        // 查询订单状态
        const orderDetailInfo = await this.$store
          .dispatch('getOrderDetail', { id })
          .catch(e => console.error(e));
        const { DoorStatus, ServiceStatus } = orderDetailInfo;
        if (DoorStatus === 0) {
          this.$emit('onOpenToast', false); // 显示开门状态-已关门
        }
        if (ServiceStatus === 2) {
          // 跳转结算
          uni.redirectTo({
            url: `/pages/order/orderStatus?orderDetailInfo=${JSON.stringify(orderDetailInfo)}`,
          });
          return;
        }
        this.setGetOrderStatusInterval({ id, isCloseDoor: DoorStatus });
      }
    },
    setGetOrderStatusInterval({ id, isCloseDoor }) {
      const interval = setInterval(async () => {
        const orderDetailInfo = await this.$store
          .dispatch('getOrderDetail', { id })
          .catch(e => console.error(e));
        const { DoorStatus, ServiceStatus } = orderDetailInfo;
        // 若已关门 则不再重复展示状态
        if (isCloseDoor !== 0 && DoorStatus === 0) {
          this.$emit('onOpenToast', false);
        }
        if (ServiceStatus === 2) {
          clearInterval(interval); // 清除获取订单状态Interval
          uni.redirectTo({
            url: `/pages/order/orderStatus?orderDetailInfo=${JSON.stringify(orderDetailInfo)}`,
          });
        }
      }, 3000);
    },
    // 提示必须同意开通支付分
    showMustPayscoreModal() {
      uni.showModal({
        content: '开门需授权',
        confirmText: '去授权',
        success: ({ confirm, cancel }) => {
          if (confirm) this.requestPayscore();
          if (cancel) {
            uni.showToast({
              title: '已取消支付分授权',
              icon: 'none',
            });
          }
        },
      });
    },
    /**
     * END 开门相关
     */

    /**
     * START 我的相关
     */
    async handelPhoneNumber(e) {
      const { detail } = e;
      const { type } = e.target.dataset;
      if (e.detail.errMsg === 'getPhoneNumber:ok') {
        const { encryptedData, iv } = detail;
        const mobile = await this.$request('cabinet.wx.wxa.get.mobile', { encryptedData, iv });
        if (mobile.error_code === 0) {
          this.$request('cabinet.wx.wxa.bind.member.mobile', {
            Mobile: mobile.data.phoneNumber,
          }).then(res => {
            if (res.error_code === 0) {
              this.$store.commit('setUserMobile', res.data.MemberVO.Mobile);
              if (this.currentTab === 'mine' && type === 'my') {
                this.$emit('onNavChange', 'mine');
                return;
              }
              this.$emit('onNavChange', 'home');
              this.vertifyPayscore();
            }
          });
        }
      } else {
        this.currentTab = 'home';
        const text = type === 'my' ? '授权手机号才能查看哦～' : '授权手机号才能开门哦～';
        wx.showModal({
          title: '用户授权失败',
          showCancel: false,
          content: text,
        });
      }
    },
    /**
     * END 我的相关
     */
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom {
  width: 100vw;
  height: auto;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.tab-bar {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
  justify-content: space-between;
}
.tab {
  width: 40%;
  padding: 10rpx 0;
  text-align: center;
  z-index: 2;
}
.tab-title {
  font-size: 22rpx;
}
.tab-icon {
  width: 40rpx;
  height: 40rpx;
}
.text-gray {
  color: #999999;
}
.text-yellow {
  color: #fbb12f;
}
.over-tab-for-scan-bg {
  position: absolute;
  top: -85rpx;
  left: 50%;
  margin-left: -85rpx;
  width: 170rpx;
  height: 170rpx;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 -7rpx 10rpx rgba(68, 68, 68, 0.1);
}
.over-tab-for-scan {
  position: relative;
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
  background-image: linear-gradient(#fde901, #ffca00);
  box-shadow: 0 7rpx 21rpx rgba(255, 164, 6, 0.32);
}
.over-tab-for-text {
  position: absolute;
  bottom: -8rpx;
  left: 50%;
  margin-left: -28rpx;
  font-size: 28rpx;
}
.get-userinfo-btn {
  width: 100%;
  height: 100%;
  background: transparent;
  margin: 0;
  padding: 0;
  line-height: 44rpx;
}
.button-hover {
  background: none;
}
</style>

