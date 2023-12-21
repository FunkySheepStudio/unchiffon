<template>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
        >
          <v-icon
            v-if="!drawer"
          >
            mdi-menu
          </v-icon>
          <v-icon
            v-else
            color="primary"
          >
            mdi-close
          </v-icon>
        </v-app-bar-nav-icon>
      </template>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list
      :items="menu"
    ></v-list>
  </v-navigation-drawer>
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
        drawer: false,
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

.btn:hover {
  color: #1e1e2b;
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

.btn:hover::after {
  height: 100%;
  transition-delay: 0.2s;
  color: white;
}

.btn:focus{
  color: white;
  background-color: rgb(var(--v-theme-primary));
}
</style>