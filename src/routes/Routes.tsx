import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

// Routes
import { PublicRoute } from './PublicRoute'
import { ProtectedRoute } from './ProtectedRoute'
import { SemiProtectedRoute } from './SemiProtectedRoute'
import { Router } from './Router'
const NotFound = lazy(() => import('../screens/NotFound'))

export const Routing: React.FC<{ isAuth: boolean }> = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {Router.map(({ isProtected, isSemiProtected, ...props }, key) =>
        isProtected ? (
          <ProtectedRoute key={key} {...props} />
        ) : isSemiProtected ? (
          <SemiProtectedRoute key={key} {...props} />
        ) : (
          <PublicRoute key={key} isAuth={isAuth} {...props} />
        )
      )}
      <Route component={NotFound} />
    </Switch>
  </Suspense>
)
