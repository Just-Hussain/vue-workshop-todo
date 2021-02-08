<template>
	<input
		type="text"
		placeholder="Enter a Todo..."
		:value="value"
		v-on="{
			...$listeners,
			input: event => this.$emit('input', event.target.value),
		}"
	/>
</template>

<script>
	export default {
		name: 'BaseInput',

		props: ['value'],
	}
</script>

<style scoped>
	input {
		border: 0ch;
		border-radius: 50px;
		background: whitesmoke;
		padding: 15px;
	}

	input:focus {
		outline: 0px;
	}
</style>
