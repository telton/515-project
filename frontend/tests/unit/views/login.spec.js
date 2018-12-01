import { ErrorBag, Validator } from 'vee-validate';
import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';

describe('Login.vue', () => {
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
    const wrapper = shallowMount(Login, {
      mocks, directives, stubs
    });
    expect(wrapper.text()).toMatch('Log In');
  });
});
