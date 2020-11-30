<script src="store/index.js"></script>
<template>
  <div id="app">
    <router-link :to="{ name: 'Main' }"></router-link>
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
