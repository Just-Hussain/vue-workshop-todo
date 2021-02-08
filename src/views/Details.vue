<template>
	<div>{{ id }}</div>
</template>

<script>
	export default {
		name: 'Details',

		props: {
			id: {
				type: Number,
				required: true,
			},
		},
	}
</script>

<style scoped></style>
