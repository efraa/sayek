import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

// Routes
import { PublicRoute } from './helpers/PublicRoute'
import { PrivateRoute } from './helpers/PrivateRoute'
import { Router } from './routers/Router'
const NotFound = lazy(() => import('../screens/NotFound'))

export const Routing: React.FC<{ isAuth: boolean }> = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {Router.map(({ isProtected, ...props }, key) =>
        isProtected ? (
          <PrivateRoute key={key} {...props} />
        ) : (
          <PublicRoute key={key} isAuth={isAuth} {...props} />
        )
      )}
      <Route component={NotFound} />
    </Switch>
  </Suspense>
)
