import { createRouter, createWebHistory } from 'vue-router'

import RU from '@pages/ru.vue';
import EN from '@pages/en.vue';

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', redirect: '/en' },
		{ path: '/ru', component: RU },
		{ path: '/en', component: EN },
		{ path: '/:pathMatch(.*)*', redirect: '/' }
	]
})
