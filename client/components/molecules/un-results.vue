<template>
  <v-dialog
    v-model="showDetail"
  >
    <un-product-detail/>
  </v-dialog>
  <v-container
    class="fill-height"
  >
    <v-row
      class="justify-center align-center"
    >
        <un-product-card
          v-for="item in items"
          @click="selectedItem = item"
        />
    </v-row>
  </v-container>
</template>
<script>
  module.exports = {
    components: {
      'un-product-card': Vue.defineAsyncComponent( () => loadModule('./components/atoms/un-product-card.vue', options)),
      'un-product-detail': Vue.defineAsyncComponent( () => loadModule('./components/atoms/un-product-detail.vue', options))
    },
    data() {
      return {
        items: [
          1, 2, 3, 4, 5
        ],
        selectedItem: null
      }
    },
    mounted () {
    },
    computed: {
      showDetail: {
        get: function() {
          return this.selectedItem !== null
        },
        set: function(newValue) {
          this.selectedItem = null
        }
      }
    }
  }
</script>
<style>
</style>
