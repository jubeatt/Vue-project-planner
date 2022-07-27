import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../components/Form.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    component: Form
  },
  {
    path: '/project/:id',
    name: 'EditProject',
    component: Form,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
