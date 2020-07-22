import React, { useEffect, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './store/contexts/AuthContext'
import { AuthActions } from './store/actions/AuthActions'
import { Routing } from './routes/Routes'
import { Spinner } from './components/Spinner'

export const Authorized = () => {
  const {
    state: { isAuth, isLoading },
    dispatch,
  } = useContext(AuthContext)

  useEffect(() => {
    AuthActions.login(dispatch)
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Routing isAuth={isAuth} />
    </BrowserRouter>
  )
}
