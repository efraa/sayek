import React, { useContext, useEffect } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { AuthContext } from '../Authentication'

interface IProps extends RouteProps {
  redirect?: string
}

export const ProtectedRoute: React.FC<IProps> = ({ redirect, ...props }) => {
  const location = window.location.href
  const {
    dispatch,
    state: { isAuth },
  } = useContext(AuthContext)

  useEffect(() => {
    dispatch({
      type: 'SET_LOCATION',
      location,
    })
  }, [dispatch, location])

  return isAuth ? <Route {...props} /> : <Redirect to={redirect || '/auth'} />
}
