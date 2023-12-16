import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast, {
    position: 'bottom-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
});

app.mount('#app');
