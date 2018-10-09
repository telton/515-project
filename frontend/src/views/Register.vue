<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-purple px-4 pt-3">
      <p class="font-bold text-center text-purple-darkest">Register for an account</p>
    </div>
    <form class="bg-white rounded-b px-8 pt-6 pb-8 mb-4" @keydown.enter.prevent="register">
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
      <div class="mb-4">
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
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="passwordConfirm">
          Confirm Your Password
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
          id="passwordConfirm" 
          type="password" 
          v-model="passwordConfirm"
          placeholder="******************"
          required
        >
      </div>
      <div class="flex items-center">
        <button 
          @click.prevent="register"
          :disabled="isRegisterButtonDisabled"
          class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button"
          ref="registerButton"
        >
          Register
        </button>
        <button
          @click.prevent="resetForm"
          class="mx-4 flex-no-shrink border-transparent border-4 text-grey-dark hover:text-grey-darker text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline" 
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

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
    register() {
      if (!this.isRegisterButtonDisabled) {
        this.$refs.registerButton.classList.add('btn-disabled');
        this.$refs.registerButton.classList.add('spinner');

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('home');
          })
          .catch(err => {
            this.$refs.registerButton.classList.remove('btn-disabled');
            this.$refs.registerButton.classList.remove('spinner');
            console.log(err);
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
