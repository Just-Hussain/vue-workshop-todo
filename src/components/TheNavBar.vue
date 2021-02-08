<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
</template>

<script>
	export default {
		name: 'TheNavBar',
	}
</script>

<style scoped>
	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #b4c7d0;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
