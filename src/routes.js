import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import CreateAccount from './pages/CreateAccount.vue'
import Dashboard from './pages/Dashboard.vue'
import ManageNews from './pages/ManageNews.vue'
import Subject from './pages/Subject.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-account',
    name: 'Create Account',
    component: CreateAccount
  },
  ,
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/manage-news',
    name: 'Manage News',
    component: ManageNews
  },
  {
    path: '/subject/:keyword',
    name: 'Subject',
    component: Subject
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router