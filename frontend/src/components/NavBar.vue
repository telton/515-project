<template>
  <nav id='nav' v-if='loggedIn' class='p-4 bg-teal-lighter opacity-50'>
    <div class='flex justify-between'>
      <div>
        <router-link
          to='/'
          class='p-2 no-underline text-teal-dark hover:text-teal-darkest font-bold uppercase tracking-wide'
        >Home</router-link>
        <router-link
          to='/search'
          class='p-2 no-underline text-teal-dark hover:text-teal-darkest font-bold uppercase tracking-wide'
        >Search</router-link>
      </div>
      <button
        class='no-underline text-teal-dark hover:text-teal-darkest font-bold uppercase tracking-wide'
        @click='logout'
      >Log Out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    loggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/LOG_OUT").then(() => {
        this.$store.commit("auth/SET_USER");
        this.$router.replace("login");
      });
    }
  }
};
</script>
