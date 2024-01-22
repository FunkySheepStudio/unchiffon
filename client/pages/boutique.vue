<template>
  <un-filter
    v-if="!$vuetify.display.mobile"
  />
  <un-results/>
</template>
<script>
  module.exports = {
    components: {
      'un-filter': Vue.defineAsyncComponent( () => loadModule('./components/molecules/un-filter.vue', options)),
      'un-results': Vue.defineAsyncComponent( () => loadModule('./components/molecules/un-results.vue', options))
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