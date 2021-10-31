<template>
  <div class="comp-about-detail">
    <h2>About Page Detail</h2>
    <p>The item info is: {{ item }}</p>

    <button @click="onGetItemClick">Get Item Sync</button>
    <button @click="onGetItemClickAsync">Get Item Async</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutDetail extends Vue {
  public item = '';

  public onGetItemClick(): void {
    this.item = 'sync item';
  }

  public async onGetItemClickAsync(): Promise<void> {
    const asyncItem: Promise<string> = Promise.resolve('async item');
    this.item = await asyncItem;
  }
}
</script>

<style scoped>
.comp-about-detail {
  background-color: aliceblue;
}

button + button {
  margin-left: 10px;
}
</style>
