<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-image: url('/images/estrelas.gif');
  background-repeat: repeat;
}

</style>
