<template>
	<div>
		<h1>This is, {{ msg }}, a Todo app!</h1>

		<base-input v-model="input" @keyup.enter="addTodo" />

		<h2>Todo:</h2>
		<ul v-if="pending.length">
			<todo-list-item
				:todo="todo"
				v-for="todo in pending"
				:key="todo.id"
				@delete="deleteTodo(todo.id)"
				@check="checkTodo(todo.id)"
			/>
		</ul>
		<p v-else>No todos bruh</p>

		<br /><br />

		<h2>Done:</h2>
		<ul v-if="done.length">
			<todo-list-item
				:todo="todo"
				v-for="todo in done"
				:key="todo.id"
				@delete="deleteTodo(todo.id)"
				@uncheck="uncheckTodo(todo.id)"
			/>
		</ul>
		<p v-else>complete some bruh</p>
	</div>
</template>

<script>
	import BaseInput from './BaseInput.vue'
	import TodoListItem from './TodoListItem.vue'

	export default {
		name: 'TodoList',

		components: { TodoListItem, BaseInput },

		props: {
			todos: {
				type: Array,
				required: true,
			},
		},

		data() {
			return {
				msg: 'probably',

				input: '',
			}
		},

		computed: {
			done() {
				return this.todos.filter(todo => {
					return todo.completed === true
				})
			},

			pending() {
				return this.todos.filter(todo => {
					return todo.completed === false
				})
			},
		},

		methods: {
			addTodo() {
				if (this.input) {
					this.todos.push({
						id: Math.random(),
						title: this.input,
						completed: false,
					})
					this.input = ''
				}
			},

			deleteTodo(id) {
				this.todos = this.todos.filter(todo => {
					return todo.id !== id
				})
			},

			checkTodo(id) {
				this.todos.filter(todo => {
					if (todo.id === id) {
						todo.completed = true
					}
				})
			},

			uncheckTodo(id) {
				this.todos.filter(todo => {
					if (todo.id === id) {
						todo.completed = false
					}
				})
			},
		},
	}
</script>

<style scoped>
	ul {
		list-style: none;
	}
</style>
