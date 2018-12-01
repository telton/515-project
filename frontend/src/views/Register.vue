<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-teal px-4 pt-3">
      <p class="font-bold text-center text-teal-darkest">Register for an account</p>
    </div>
    <form
      class="bg-white rounded-b px-8 pt-6 pb-8 mb-4"
      @keydown.enter.prevent="validateBeforeRegister"
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
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          v-model="password"
          v-validate="'required|confirmed:password_confirm|min:6'"
          placeholder="******************"
          required
        >
        <p
          class="text-red text-xs pt-2"
          v-if="errors.has('password')"
        >{{ errors.first('password') }}</p>
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password_confirm"
        >Confirm Your Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="password_confirm"
          name="password_confirm"
          type="password"
          v-model="passwordConfirm"
          v-validate="'required'"
          ref="password_confirm"
          placeholder="******************"
          required
        >
        <p
          class="text-red text-xs pt-2"
          v-if="errors.has('password_confirm')"
        >{{ errors.first('password_confirm') }}</p>
      </div>
      <div class="flex items-center">
        <button
          @click.prevent="validateBeforeRegister"
          :disabled="isRegisterButtonDisabled"
          class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          ref="registerButton"
        >
          <fa icon="share-square"/>Register
        </button>
        <button
          @click.prevent="resetForm"
          class="mx-4 flex-no-shrink border-transparent border-4 text-grey-dark hover:text-grey-darker text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  watch: {
    isRegisterButtonDisabled: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          if (newVal) {
            this.$refs.registerButton.classList.add('btn-disabled');
          } else {
            this.$refs.registerButton.classList.remove('btn-disabled');
          }
        });
      },
    },
  },
  computed: {
    passwordIsConfirmed() {
      return this.password.trim() === this.passwordConfirm.trim();
    },
    isRegisterButtonDisabled() {
      return (
        this.email.trim() == '' ||
        this.password.trim() == '' ||
        this.passwordConfirm.trim() == '' ||
        !this.passwordIsConfirmed
      );
    },
  },
  methods: {
    validateBeforeRegister() {
      this.$validator.validateAll();

      if (!this.errors.any()) {
        this.register();
      }
    },
    register() {
      if (!this.isRegisterButtonDisabled) {
        this.$refs.registerButton.classList.add('btn-disabled');
        this.$refs.registerButton.classList.add('spinner');

        this.$store.dispatch('auth/CREATE_USER', { email: this.email, password: this.password })
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
            })
            this.$refs.registerButton.classList.remove('btn-disabled');
            this.$refs.registerButton.classList.remove('spinner');
          });
      }
    },
    resetForm() {
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';
    },
  },
};
</script>
