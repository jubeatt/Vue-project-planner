import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../components/Form.vue'
import Test from '../components/Test.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-new-project',
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
