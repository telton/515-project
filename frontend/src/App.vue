<template>
  <div id="app">
    <div id="nav" v-if="loggedIn">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <notifications position="bottom right" animation-type="velocity"/>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['loggedIn']),
  },
};
</script>

