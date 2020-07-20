import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { StyledProvider } from './styles'
import { AuthProvider, AuthContext } from './store/contexts/AuthContext'
import { AuthActions } from './store/actions/AuthActions'
import { Routing } from './routes/Routes'
import { Spinner } from './components/Spinner'

export const Authentication = () => {
  const [isLoading, setLoading] = useState(true)
  const { state, dispatch } = useContext(AuthContext)

  useEffect(() => {
    AuthActions.login(dispatch)
      .then(() => setLoading(false))
  }, [])

  return isLoading ? <Spinner /> : (
    <BrowserRouter>
      <Routing isAuth={state.isAuth} />
    </BrowserRouter>
  )
}
