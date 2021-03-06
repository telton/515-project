<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-teal px-4 pt-3">
      <p class="font-bold text-center text-teal-darkest">Log in</p>
    </div>
    <form
      class="bg-white rounded-b px-8 pt-6 pb-8 mb-4"
      @keydown.enter.prevent="validateBeforeLogin"
    >
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">E-mail Address</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          v-model="email"
          v-validate="'required|email'"
          placeholder="john@example.com"
          required
        >
        <p class="text-red text-xs pt-2" v-if="errors.has('email')">{{ errors.first('email') }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          v-model="password"
          v-validate="'required'"
          placeholder="******************"
          required
        >
        <p
          class="text-red text-xs pt-2"
          v-if="errors.has('password')"
        >{{ errors.first('password') }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          @click.prevent="validateBeforeLogin"
          :disabled="isLoginButtonDisabled"
          class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          ref="loginButton"
        >
          <fa icon="sign-in-alt"/>Log In
        </button>
        <router-link
          to="/reset-password"
          class="inline-block align-baseline font-bold text-sm text-teal hover:text-teal-dark"
        >Forgot Password?</router-link>
      </div>
      <div class="mt-4 text-center">
        <span class="text-grey-dark text-xs">Don't have an account?
          <router-link
            to="/register"
            class="inline-block align-baseline font-bold text-teal-light hover:text-teal"
          >Register here</router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
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
    validateBeforeLogin() {
      this.$validator.validateAll();

      if (!this.errors.any()) {
        this.login();
      }
    },
    login() {
      if (!this.isLoginButtonDisabled) {
        this.$refs.loginButton.classList.add('btn-disabled');
        this.$refs.loginButton.classList.add('spinner');

        this.$store.dispatch('auth/LOG_IN', { email: this.email, password: this.password })
          .then(() => {
            this.$store.commit('auth/SET_USER');
            this.$router.replace('/');
          })
          .catch(err => {
            this.$notify({
              type: 'error',
              title: 'Error!',
              text: `${err.message}`,
              duration: 5000
            });
            this.$refs.loginButton.classList.remove('btn-disabled');
            this.$refs.loginButton.classList.remove('spinner');
          });
      }
    },
  },
};
</script>
