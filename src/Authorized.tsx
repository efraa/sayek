import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './store/contexts/AuthContext'
import { AuthActions } from './store/actions/AuthActions'
import { Routing } from './routes/Routes'
import { Spinner } from './components/Spinner'

export const Authorized = () => {
  const [isLoading, setLoading] = useState(true)
  const {
    state: { isAuth },
    dispatch,
  } = useContext(AuthContext)

  useEffect(() => {
    AuthActions.login(dispatch).then(() => setLoading(false))
  }, [dispatch])

  return isLoading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Routing isAuth={isAuth} />
    </BrowserRouter>
  )
}
