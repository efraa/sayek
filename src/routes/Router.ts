import { lazy } from 'react'

// Screens
const Login = lazy(() => import('../screens/Login'))
const Logout = lazy(() => import('../screens/Logout'))
const Home = lazy(() => import('../screens/Home'))
const Walls = lazy(() => import('../screens/Walls'))
const Landing = lazy(() => import('../screens/Landing'))

export const Router = [
  {
    path: '/auth',
    component: Login,
    exact: true,
    isProtected: false,
    isSemiProtected: false,
  },
  {
    path: '/logout',
    component: Logout,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
  {
    path: '/walls',
    component: Walls,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
  {
    path: '/',
    component: Landing,
    exact: true,
    isProtected: false,
    isSemiProtected: false,
  },
]
