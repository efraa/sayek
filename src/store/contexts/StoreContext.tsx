import React, { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { StoreTypes } from '../types/StoreTypes'
import { StoreReducer } from '../reducers/StoreReducer'
import { StoreState, IStoreState } from '../state/StoreState'

export interface IStoreContext {
  state: IStoreState
  dispatch: Dispatch<StoreTypes>
}

export const StoreContext = createContext({
  state: StoreState,
  dispatch: () => {},
} as IStoreContext)

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(StoreReducer, StoreState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
