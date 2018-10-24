<template>
  <div id="app">
    <div id="nav" v-if="loggedIn">
      <router-link to="/home">Home</router-link>
    </div>
    <notifications position="bottom right" animation-type="velocity"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    }
  },
};
</script>

