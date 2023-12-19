<template>
  <v-app
    style="background-color: black; color: white;"
  >
      <v-main>
        <router-view />
      </v-main>
    </v-app>
</template>
<script>
module.exports = {
  components: {
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
  font-family: 'Nova Square', sans-serif;
}
</style>