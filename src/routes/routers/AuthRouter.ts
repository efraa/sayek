import { lazy } from 'react'

// Screens
const Login = lazy(() => import('../../screens/Login'))
// const Logout = lazy(() => import('../../screens/Logout'))

export const AuthenticationRoutes = [
  {
    path: '/auth',
    component: Login,
    exact: true,
    isProtected: false,
  },
  {
    path: '/logout',
    // component: Logout,
    exact: true,
    isProtected: true,
  },
]
