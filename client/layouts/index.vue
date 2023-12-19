<template>
  <v-app>
      <un-menu/>
      <v-main>
        <router-view />
      </v-main>
      <un-social/>
    </v-app>
</template>
<script>
module.exports = {
  components: {
    'un-menu': Vue.defineAsyncComponent( () => loadModule('./components/organisms/un-menu.vue', options)),
    'un-social': Vue.defineAsyncComponent( () => loadModule('./components/organisms/un-social.vue', options))
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  computed: {
  }
}
</script>
<style>
html {
  overflow-y: scroll
}

/* Hiding scrollbar for Chrome, Safari and Opera */
html::-webkit-scrollbar {
    display: none;
}

/* Hiding scrollbar for IE, Edge and Firefox */
html {
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}

body {
  font-family: 'Open Sans', sans-serif;
}
</style>