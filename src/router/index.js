/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Ranking from '@/components/Ranking'
import ListaJogadores from '@/components/ListaJogadores'
import Admin from '@/components/Admin'
import Geral from '@/components/Geral'
import Selecao from '@/components/Selecao'
import Home from '@/components/Home'
import Cadastro from '@/components/User/Cadastro'
import Login from '@/components/User/Login'
import Profile from '@/components/User/Profile'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/escalar',
      name: 'ListaJogadores',
      component: ListaJogadores,
      beforeEnter: AuthGuard
    }, 
    {
      path: '/selecao',
      name: 'Selecao',
      component: Selecao,
      beforeEnter: AuthGuard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: AuthGuard
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking,
      beforeEnter: AuthGuard
    },
  ],
  mode: 'history'
})