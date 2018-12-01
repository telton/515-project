<template>
  <div id="app">
    <nav-bar/>
    <notifications position="bottom left" animation-type="velocity"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Marvel");

html,
body {
  font-family: "Marvel", sans-serif;
}
</style>
