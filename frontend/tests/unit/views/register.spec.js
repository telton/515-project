import { ErrorBag, Validator } from 'vee-validate';
import { shallowMount } from '@vue/test-utils';
import Register from '@/views/Register.vue';

describe('Register.vue', () => {
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
    const wrapper = shallowMount(Register, {
      mocks, directives, stubs
    });
    expect(wrapper.text()).toMatch('Register');
  });
});
