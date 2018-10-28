<template>
  <nav id="nav" v-if="loggedIn" class="p-4">
    <div class="flex justify-between">
      <router-link to="/" class="p-2 no-underline text-teal hover:text-teal-dark">Home</router-link>
      <button class="p-2 text-teal hover:text-teal-dark" @click="logout">Log Out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    loggedIn() {
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
    }
  }
}
</script>
