import { useToast } from 'vue-toastification'
const toast = useToast()

function errorToast(msg, options) {
  return toast.error(msg, options);
}

function infoToast(msg, options) {
  return toast.info(msg, options);
}


export {
  errorToast,
  infoToast,
}