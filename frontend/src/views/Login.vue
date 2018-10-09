<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-purple px-4 pt-3">
      <p class="font-bold text-center text-purple-darkest">Log in</p>
    </div>
    <form class="bg-white rounded-b px-8 pt-6 pb-8 mb-4" @keydown.enter.prevent="login">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
          E-mail Address
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
          id="email" 
          type="email" 
          v-model="email"
          placeholder="john@example.com"
          required
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
          id="password" 
          type="password" 
          v-model="password"
          placeholder="******************"
          required
        >
      </div>
      <div class="flex items-center justify-between">
        <button 
          @click.prevent="login"
          :disabled="isLoginButtonDisabled"
          class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button"
          ref="loginButton"
        >
          Log In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-purple hover:text-purple-dark" href="#">
          Forgot Password?
        </a>
      </div>
      <div class="mt-4 text-center">
        <span class="text-grey-dark text-xs">
          Don't have an account? <router-link to="/register" class="inline-block align-baseline font-bold text-purple-light hover:text-purple">Register here</router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  watch: {
    isLoginButtonDisabled: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          if (newVal) {
            this.$refs.loginButton.classList.add('btn-disabled');
          } else {
            this.$refs.loginButton.classList.remove('btn-disabled');
          }
        });
      },
    },
  },
  computed: {
    isLoginButtonDisabled() {
      return this.email.trim() == '' || this.password.trim() == '';
    },
  },
  methods: {
    login() {
      if (!this.isLoginButtonDisabled) {
        this.$refs.loginButton.classList.add('btn-disabled');
        this.$refs.loginButton.classList.add('spinner');

        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('home');
          })
          .catch(err => {
            this.$refs.loginButton.classList.remove('btn-disabled');
            this.$refs.loginButton.classList.remove('spinner');
            console.log(err);
          });
      }
    },
  },
};
</script>
