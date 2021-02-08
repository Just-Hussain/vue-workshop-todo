import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

function load(view) {
	// route level code-splitting
	// this generates a separate chunk (view.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	return () => import(`../views/${view}.vue`)
}

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',

		component: load('About'),
	},
	{
		path: '/todo/:id',
		name: 'Details',
		props: true,
		component: load('Details'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
