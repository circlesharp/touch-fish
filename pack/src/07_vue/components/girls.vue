<template>
  <div class="container">
    <label for="name">name:</label>
    <p>name: {{name}}</p>
    <input type="text" id="name" v-model="name">

    <h2>img avatar</h2>
    <img src="../assets/images/avatar.jpeg" style="width: 100px" alt="">

    <h2>i avatar</h2>
    <i class="avatar"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Amy',
    };
  },
}
</script>

<style>

</style>