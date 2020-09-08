<template>
  <div>
    <div class="btn-container">
      <div class="btn-wrapper">
        <Button @click="editType = 1"
                class="ios-keypad_button"
                type="warning">修改售卖商品</Button>
        <Button @click="editType = 2"
                class="ios-keypad_button"
                type="warning">修改价格</Button>
      </div>

      <div v-if="editType !== 1">
        <div v-if="productListClone.length > 0">
          <div class="row-cargo"
               v-for="(rowitem, rowindex) in Math.ceil(productListClone.length/10)"
               :key="rowindex">
            <div :class="`single-cargo`"
                 v-for="(caritem, carindex) in productListClone.slice(rowindex*10, (rowindex+1)*10)"
                 :key="carindex">
              <div class="image-content"
                   :class="{'image-empty': false, 'not-show-single-btn': editType === 0 }">
                <!-- 商品图片 -->
                <img
                     :src="`${caritem.ProductVO.ImageFixWidthUrl}?x-oss-process=image/resize,h_80`" />
                <div v-if="editType === 2"
                     class="cargo-max">
                  ￥
                  <div class="max-capacity-poptip"
                       :class="{ isCapacityTip: caritem.isShowTip }">
                    {{ caritem.warnMsg }}</div>
                  <Input class="cargo-max-input"
                         size="small"
                         v-model="caritem.ClonePrice"
                         @on-change="checkPrice(caritem)" />
                  </Input>
                </div>
                <p v-else
                   class="cargo-max">
                  剩{{caritem.Stock}}个/￥{{caritem.ClonePrice}}</p>
              </div>
              <p>{{caritem.BarCode}}</p>
              <p class="product-name"
                 :title="caritem.ProductVO.Name">{{caritem.ProductVO.Name}}</p>
            </div>
          </div>
          <div class="batch-save-container"
               v-if="editType === 2">
            <Button type="primary"
                    class="btn-batch-save"
                    @click="cancelBatchOperation">取消</Button>
            <Button type="primary"
                    class="btn-batch-save"
                    @click="savePrice">保存</Button>
          </div>
          <Spin size="large"
                v-if="loading"
                fix></Spin>
        </div>
        <div v-else
             class='empty-product'>
          未配置商品，请点击【修改售卖商品】进行配置
        </div>
      </div>
    </div>

    <cabinet-change-product v-if="editType === 1"
                            :editType.sync="editType"
                            :CargoList="cargoConfigClone"
                            :provider="cabinet.Provider"
                            @updateCargoConfig="updateCargoConfig">
    </cabinet-change-product>

  </div>
</template>

<script>
import CabinetChangeProduct from './CabinetChangeProduct';

export default {
  name: 'CabinetProductList',
  components: {
    CabinetChangeProduct,
  },
  data() {
    return {
      // 批量修改按钮状态
      editType: 0, // 0:正常状态 1:商品 2:价格
      productListClone: [],
      cargoConfigClone: [],
    };
  },
  props: ['cargoConfig', 'productList', 'loading', 'cabinet'],

  watch: {
    productList: {
      handler(newVal) {
        this.productListClone = JSON.parse(JSON.stringify(newVal));
      },
    },
    cargoConfig: {
      handler(newVal) {
        this.cargoConfigClone = JSON.parse(JSON.stringify(newVal));
      },
    },
    editType(val) {
      if (val === 0) {
        this.productListClone = JSON.parse(JSON.stringify(this.productList));
        this.cargoConfigClone = JSON.parse(JSON.stringify(this.cargoConfig));
      }
    },
  },
  methods: {
    checkPrice(caritem) {
      const tmp = caritem;
      tmp.ClonePrice = parseInt(tmp.ClonePrice * 100, 10) / 100 || 0;
      if (tmp.ClonePrice <= 0) {
        tmp.isShowTip = true;
        tmp.warnMsg = '价格必须大于0';
      } else {
        tmp.isShowTip = false;
      }
    },
    cancelBatchOperation() {
      this.editType = 0;
    },
    savePrice() {
      if (this.editType === 2) {
        const products = this.productListClone.map((row) => {
          const tmp = {
            BarCode: row.BarCode,
            Price: row.ClonePrice * 100,
          };
          return tmp;
        });
        this.$emit('updatePrice', products);
      }
      this.editType = 0;
    },
    updateCargoConfig(cargoConfig) {
      this.$emit('updateCargo', cargoConfig);
      this.editType = 0;
    },
  },
};
</script>

<style lang="less">
.cargo-max-input .ivu-input {
  padding: 1px 0;
}
</style>

<style lang="less" scoped>
@import url('../../components/cargo-product-list-mixin');
.btn-container .row-cargo .single-cargo .cargo-max {
  font-size: 13px;
}
.empty-product {
  margin-top: 45px;
  text-align: center;
  font-size: 13px;
  color: gray;
}
.btn-container {
  position: relative;
  overflow: auto;
  .btn-wrapper {
    // min-width: 1200px;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
}

.ios-keypad_button {
  float: left;
  margin: 0 20px 20px 0;
  background: rgba(255, 198, 42, 1);
  border: none;
  top: 76px;
  color: white;
  &:hover {
    background: rgba(255, 198, 42, 0.85);
  }
}
</style>
