<template>
<div class="container">
  <div id="text">{{ text }}</div>

  <h2>img avatar</h2>
  <img src="./assets/images/avatar.jpeg" style="width: 100px" alt="">

  <h2>i avatar</h2>
  <i class="avatar"></i>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'abc',
    }
  }
}
</script>

<style>
  #text {
    color: blueviolet;
  }
</style>