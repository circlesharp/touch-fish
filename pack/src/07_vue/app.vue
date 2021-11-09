<template>
<div class="container">
  <div id="text">{{ text }}</div>
  <input type="text" v-model="text">
  <button @click="getEnvInfo">getEnvInfo</button>

  <div class="wrapper-girls">
    <Girls />
  </div>
</div>
</template>

<script>
import Girls from './components/girls.vue';

export default {
  components: {Girls},
  data() {
    return {
      text: 'test',
    }
  },
  methods: {
    getEnvInfo() {
      console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    }
  },
}
</script>

<style>
  #text {
    color: blueviolet;
  }
</style>