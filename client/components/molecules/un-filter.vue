<template>
    <v-navigation-drawer
      width="200"
      style="border-style: solid; border-color: white;"
    >
      <div
          class="noselect"
      >
              <label class="choice">
                  <input type="checkbox" value="1">
                  <span>Femme</span>
              </label>
              <label class="choice">
                  <input type="checkbox" value="1">
                  <span>Homme</span>
              </label>
      </div>
    </v-navigation-drawer>
</template>
<script>
  module.exports = {
    data() {
      return {
      }
    },
    mounted () {
    }
  }
</script>
<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.choice span {
  font-size: 17px;
  background: transparent;
  border: none;
  color: white;
  text-transform: uppercase;
  position: relative;
  transition: .5s ease;
  padding: 5px;
}

.choice span::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: rgb(var(--v-theme-primary));
  transition: .2s ease;
}

.choice span:hover::before {
  width: 100%;
}

.choice span::after {
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

.choice input
{
    visibility: hidden;
}

.choice input:checked + span {
    color: black;
    background-color: rgb(var(--v-theme-primary));
    transition: .4s ease;
    z-index: 0;
}

</style>
