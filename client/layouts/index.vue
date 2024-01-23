<template>
  <v-app>
      <v-main>
        <un-menu-mobile
          v-if="$vuetify.display.mobile"
          :menu="menu"
        />
        <un-menu
          v-else
          :menu="menu"
        />
        <router-view />
      </v-main>
      <un-social/>
    </v-app>
</template>
<script>
module.exports = {
  components: {
    'un-menu': Vue.defineAsyncComponent( () => loadModule('./components/organisms/un-menu.vue', options)),
    'un-menu-mobile': Vue.defineAsyncComponent( () => loadModule('./components/organisms/un-menu-mobile.vue', options)),
    'un-social': Vue.defineAsyncComponent( () => loadModule('./components/organisms/un-social.vue', options))
  },
  data() {
    return {
      menu: [
          {
            title: 'Boutique',
            to: '/boutique'
          },
          {
            title: 'Blog',
            to: '/blog'
          },
          {
            title: 'Nous trouver',
            to: '/nous-trouver'
          },
          {
            title: 'Nous contacter',
            to: '/nous-contacter'
          },
          {
            title: 'A propos',
            to: '/a-propos'
          }
      ]
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