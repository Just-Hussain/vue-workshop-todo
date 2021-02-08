<template>
	<div id="app">
		<the-nav-bar />

		<router-view />
	</div>
</template>

<script>
	import TheNavBar from './components/TheNavBar.vue'

	export default {
		name: 'App',

		components: { TheNavBar },
	}
</script>

<style>
	body {
		background: #2c3e50;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		text-align: center;
		color: #b4c7d0;
	}

	a {
		color: #42b983;
	}
</style>
