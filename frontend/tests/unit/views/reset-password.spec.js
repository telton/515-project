import { ErrorBag, Validator } from 'vee-validate';
import { shallowMount } from '@vue/test-utils';
import ResetPassword from '@/views/ResetPassword.vue';

describe('ResetPassword.vue', () => {
  let mocks, directives, stubs;

  beforeEach(() => {
    const errors = new ErrorBag();
    const $validator = new Validator();

    mocks = {
      errors: errors,
      $validator: $validator
    };
    directives = {
      validate: ''
    };
    stubs = ['router-link', 'fa'];
  });

  it('renders', () => {
    const wrapper = shallowMount(ResetPassword, {
      mocks, directives, stubs
    });
    expect(wrapper.text()).toMatch('Reset Password');
  });
});
