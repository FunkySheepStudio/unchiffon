<template>
  <un-filter/>
</template>
<script>
  module.exports = {
    components: {
      'un-filter': Vue.defineAsyncComponent( () => loadModule('./components/molecules/un-filter.vue', options))
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
<style>
</style>