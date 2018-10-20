<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-purple px-4 pt-3">
      <p class="font-bold text-center text-purple-darkest">Reset Password</p>
    </div>
    <form
      class="bg-white rounded-b px-8 pt-6 pb-8 mb-4"
      @keydown.enter.prevent="validateBeforeReset"
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
      <div class="flex items-center justify-between">
        <button
          @click.prevent="validateBeforeReset"
          :disabled="isResetButtonDisabled"
          class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          ref="resetButton"
        >
          <fa icon="share-square"></fa>Password Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'ResetPassword',
  data() {
    return {
      email: '',
    };
  },
  watch: {
    isResetButtonDisabled: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          if (newVal) {
            this.$refs.resetButton.classList.add('btn-disabled')
          } else {
            this.$refs.resetButton.classList.remove('btn-disabled');
          }
        });
      }
    }
  },
  computed: {
    isResetButtonDisabled() {
      return this.email.trim() == '';
    }
  },
  methods: {
    validateBeforeReset() {
      this.$validator.validateAll();

      if (!this.errors.any()) {
        this.resetPassword();
      }
    },
    resetPassword() {
      if (!this.isResetButtonDisabled) {
        this.$refs.resetButton.classList.add('btn-disabled');
        this.$refs.resetButton.classList.add('spinner');

        firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.$notify({
              type: 'success',
              title: 'Success!',
              text: `A password reset e-mail has been sent to: ${this.email}.`
            });
            this.$refs.resetButton.classList.remove('btn-disabled');
            this.$refs.resetButton.classList.remove('spinner');
          })
          .catch(() => {
            this.$notify({
              type: 'error',
              title: 'Error!',
              text: `An account with the e-mail ${this.email} was not found. Please verify the e-mail is correct and try again.`,
              duration: 5000
            });
            this.$refs.resetButton.classList.remove('btn-disabled');
            this.$refs.resetButton.classList.remove('spinner');
          })
      }
    }
  }
}
</script>
