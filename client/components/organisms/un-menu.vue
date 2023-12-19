<template>
    <v-app-bar>
      <v-spacer/>
        <router-link
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.route"
          v-slot="{ navigate }"
        >
          <button
            class="btn"
            @click="navigate"
            role="link"
          >
            <v-icon>
              {{ menu.icon }}
            </v-icon>
            {{ menu.title }}
          </button>
        </router-link>
      <v-spacer/>
  </v-app-bar>
</template>
<script>
  module.exports = {
    data() {
      return {
        menus: [
        {
            icon: 'mdi-store',
            title: 'Boutique',
            route: 'Boutique'
          },
          {
            icon: 'mdi-post',
            title: 'Blog',
            route: 'blog'
          },
          {
            icon: 'mdi-map',
            title: 'Nous trouver',
            route: 'nous-trouver',
            restrictToDsi: true
          },
          {
            icon: 'mdi-card-account-mail',
            title: 'Nous contacter',
            route: 'nous-contacter'
          },
          {
            icon: 'mdi-information',
            title: 'A propos',
            route: 'a-propos'
          }
        ]
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
  color: rgb(var(--v-theme-primary));
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