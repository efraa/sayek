import React, { useEffect, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext, AuthActions } from '.'
import { Routing } from '../routes/Routes'
import { Spinner } from '../components/Spinner'

export const Authorized = () => {
  const {
    state: { isAuth, isLoading },
    dispatch,
  } = useContext(AuthContext)

  useEffect(() => {
    AuthActions.login(dispatch)
  }, [dispatch])

  return isLoading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Routing isAuth={isAuth} />
    </BrowserRouter>
  )
}
