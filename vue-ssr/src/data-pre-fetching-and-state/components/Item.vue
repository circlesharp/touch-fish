<template>
  <div v-if="item">{{ item }}</div>
  <div v-else>...</div>
</template>

<script>
export default {
  computed: {
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$store.state.items[this.itemId];
    },
  },

  // server-side only
  serverPrefetch() {
    return this.fetchItem();
  },

  // client-side only
  mounted() {
    if (!this.item) {
      this.fetchItem();
    }
  },

  methods: {
    fetchItem() {
      return this.$store.dispatch('fetchItem', this.itemId);
    },
  },
}
</script>

<style>

</style>