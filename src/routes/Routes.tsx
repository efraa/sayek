import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

// Routes
import { PublicRoute } from './helpers/PublicRoute'
import { PrivateRoute } from './helpers/PrivateRoute'
import { Router } from './routers/Router'

export const Routing: React.FC<{ isAuth: boolean }> = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {Router.map(({ isProtected, component: Cp, ...props }, key) =>
        isProtected ? (
          <PrivateRoute key={key} isAuth={isAuth} component={Cp} {...props} />
        ) : (
          <PublicRoute key={key} isAuth={isAuth} component={Cp} {...props} />
        )
      )}
    </Switch>
  </Suspense>
)
