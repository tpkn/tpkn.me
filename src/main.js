import { createApp } from 'vue';
import App from './app.vue';
import router from './router.js';

const app = createApp(App);
app.config.globalProperties.$production = process.env.NODE_ENV === 'production';
app.use(router)
app.mount('#app');
