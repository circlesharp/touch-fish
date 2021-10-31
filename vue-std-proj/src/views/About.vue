<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutDetail />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import AboutDetail from "@/components/AboutDetail.vue";


@Component({
  components: {
    AboutDetail,
  },
})
export default class About extends Vue {}
</script>
