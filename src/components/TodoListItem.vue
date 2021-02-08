<template>
	<li>
		<span @click="goToDetails">{{ todo.title }}</span>
		<button class="fas fa-trash" @click="$emit('delete', todo.id)" />
		<button
			v-if="!todo.completed"
			class="fas fa-check"
			@click="$emit('check', todo.id)"
		/>
		<button v-else class="fas fa-undo" @click="$emit('uncheck', todo.id)" />
	</li>
</template>

<script>
	export default {
		name: 'TodoListItem',
		props: {
			/*
			{
				id: number
				title: string
				completed: boolean
			}
			 */
			todo: {
				type: Object,
				required: true,
			},
		},

		methods: {
			goToDetails() {
				this.$router.push({
					name: 'Details',
					params: {
						id: this.todo.id,
					},
				})
			},
		},
	}
</script>

<style scoped>
	li {
		margin: 20px;
		font-size: 25px;
		list-style-type: none;
	}

	span {
		margin: 8px;
	}

	span:hover {
		cursor: pointer;
	}

	button {
		color: #42b983;
		background: none;
		border: none;
	}

	/* to remove the outline after clicking a button */
	button:focus {
		outline: 0px;
	}

	button:hover {
		cursor: pointer;
	}
</style>
