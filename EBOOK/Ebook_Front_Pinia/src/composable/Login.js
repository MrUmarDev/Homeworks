import { ref } from 'vue';
import { useLoginStore } from '../store/modules/Login.js';
import { errorToast } from '../utils/toast';

export function useLogin() {
  const loginStore = useLoginStore();
  const email = ref('');
  const password = ref('');

  async function onLogin() {
    if (!email.value.length && !password.value.length) {
      errorToast('Please enter correct values', { hideProgressBar: true });
      return;
    }
    await loginStore.login({
      email: email.value,
      password: password.value,
    });
  }

  return {
    onLogin,
    email,
    password
  };
}
