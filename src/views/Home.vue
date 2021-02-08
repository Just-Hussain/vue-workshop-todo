<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />

		<div>
			<button @click="useApi = false">Local Todos</button>
			|
			<button @click="useApi = true">jsonplaceholder Todos</button>
		</div>
		<todo-list :todos="todos" />
	</div>
</template>

<script>
	import TodoList from '../components/TodoList.vue'
	import TodoListItem from '../components/TodoListItem.vue'

	export default {
		name: 'Home',

		components: { TodoListItem, TodoList },

		async created() {
			let result = await fetch('https://jsonplaceholder.typicode.com/todos')
			let data = await result.json()
			this.apiData = data
		},

		data() {
			return {
				useApi: false,
				localData: [
					{
						id: 2,
						title: 'test1',
						completed: false,
					},
					{
						id: 1,
						title: 'test2',
						completed: false,
					},
					{
						id: 0,
						title: 'test3',
						completed: true,
					},
				],

				apiData: [],
			}
		},

		computed: {
			todos() {
				if (this.useApi) return this.apiData
				else return this.localData
			},
		},
	}
</script>

<style scoped>
	button {
		color: #42b983;
		background: none;
		border: none;
		font-size: 24px;
		margin: 12px;
	}

	/* to remove the outline after clicking a button */
	button:focus {
		outline: 0px;
	}

	button:hover {
		cursor: pointer;
	}
</style>
