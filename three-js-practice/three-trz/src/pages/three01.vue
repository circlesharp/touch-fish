<template>
  <div class="three01" ref="targetRef"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { renderer, animate } from './script/localLocation';
import { useThreeInit } from '@/hooks/useThreeInit';

export default defineComponent({
  setup() {
    const { targetRef } = useThreeInit(renderer, animate);

    return {
      targetRef,
    };
  },
});
</script>

<style lang="less" scoped></style>
