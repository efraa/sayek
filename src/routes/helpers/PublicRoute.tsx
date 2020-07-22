import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface IProps extends RouteProps {
  redirect?: string
  isAuth: boolean
}

export const PublicRoute: React.FC<IProps> = ({ isAuth, redirect, ...props }) =>
  isAuth ? <Redirect to={redirect || '/home'} /> : <Route {...props} />
