<template>
    <v-app-bar
      elevation="0"
    >
      <v-spacer/>
      <router-link
          v-for="(item, i) in menu"
          :key="i"
          :to="item.to"
          v-slot="{ navigate }"
        >
          <button
            class="btn"
            @click="navigate"
            role="link"
          >
            {{ item.title }}
          </button>
        </router-link>
      <v-spacer/>
  </v-app-bar>
</template>
<script>
  module.exports = {
    props: {
      menu: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
      }
    },
    mounted () {
    }
  }
</script>
<style scoped>
.btn {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: white;
  text-transform: uppercase;
  position: relative;
  transition: .5s ease;
}

.btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: rgb(var(--v-theme-primary));
  transition: .2s ease;
}

.btn:hover::before {
  width: 100%;
}

.btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: rgb(var(--v-theme-primary));
  transition: .4s ease;
  z-index: -1;
}

.btn:focus{
  height: 100%;
  color: black;
  background-color: rgb(var(--v-theme-primary));
}
</style>