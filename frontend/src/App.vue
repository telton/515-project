<template>
  <div id="app">
    <nav-bar/>
    <notifications position="bottom right" animation-type="velocity"/>
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

