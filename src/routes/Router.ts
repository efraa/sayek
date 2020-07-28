import { lazy } from 'react'
import { Paths } from './Paths'

// Screens
const Login = lazy(() => import('../screens/Login'))
const Logout = lazy(() => import('../screens/Logout'))
const Home = lazy(() => import('../screens/Home'))
const Walls = lazy(() => import('../screens/Walls'))
const Landing = lazy(() => import('../screens/Landing'))
const ComposeWall = lazy(() => import('../screens/Walls/ComposeWall'))

const users = [
  {
    path: Paths.auth,
    component: Login,
    exact: true,
    isProtected: false,
    isSemiProtected: false,
  },
  {
    path: Paths.logout,
    component: Logout,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
  {
    path: Paths.home,
    component: Home,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
]

const walls = [
  {
    path: Paths.walls.list,
    component: Walls,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
  {
    path: Paths.walls.compose,
    component: ComposeWall,
    exact: true,
    isProtected: true,
    isSemiProtected: false,
  },
]

export const Router = [
  ...users,
  ...walls,
  {
    path: Paths.main,
    component: Landing,
    exact: true,
    isProtected: false,
    isSemiProtected: false,
  },
]
