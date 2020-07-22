import React, { useContext, useEffect } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { AuthContext } from '../../store/contexts/AuthContext'

interface IProps extends RouteProps {
  redirect?: string
}

export const PrivateRoute: React.FC<IProps> = ({ redirect, ...props }) => {
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
  }, [])

  return isAuth ? <Route {...props} /> : <Redirect to={redirect || '/auth'} />
}
