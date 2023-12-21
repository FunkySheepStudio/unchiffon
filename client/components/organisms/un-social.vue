<template>
    <v-bottom-navigation>
        <button
        >
            <v-icon
                size="4vh"
            >
                mdi-instagram
            </v-icon>
        </button>
        <button
        >
            <v-icon
                size="4vh"
            >
                mdi-facebook
            </v-icon>
        </button>
    </v-bottom-navigation>    
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
<style scoped>
.mdi-instagram
{
    color: white
}

.mdi-instagram:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mdi-facebook
{
    color: white
}

.mdi-facebook:hover
{
    color: #4267B2;
}
</style>
