<template>
	<div class="content">
		<ul class="about">
			<RouterView />
		</ul>
		<ul class="where">
			<li>
				<a href="https://github.com/tpkn" class="invisible">
					<div class="icons github"></div>
				</a>
			</li>
			<li>
				<a href="https://www.npmjs.com/~tpkn" class="invisible">
					<div class="icons npm"></div>
				</a>
			</li>
		</ul>
	</div>
	<div class="footer">
		<div class="language">
			<RouterLink to="/en" active-class="current" key="en">In English</RouterLink>
			<RouterLink to="/ru" active-class="current" key="ru">По-русски</RouterLink>
		</div>
	</div>
</template>
<script setup>
	import { onMounted } from 'vue';
	import { RouterView, RouterLink } from 'vue-router';
	
	onMounted(() => {
		window.addEventListener('load', () => {
			document.querySelector('#app').classList.add('animate');
		});
	});
</script>
<style lang="scss">
	@import '@scss/main.scss';
</style>
