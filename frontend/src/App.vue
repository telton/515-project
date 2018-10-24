<template>
  <div id="app">
    <div id="nav" v-if="loggedIn">
      <router-link to="/home">Home</router-link>
      <button @click="logout">Log Out</button>
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
      console.log(this.$store.getters['auth/isLoggedIn']);
      return this.$store.getters['auth/isLoggedIn'];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/LOG_OUT')
        .then(() => {
          this.$store.commit('auth/SET_USER');
          this.$router.replace('login');
        });
    },
  }
};
</script>

