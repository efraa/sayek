import { StoreTypes } from '../types/StoreTypes'
import { IStoreState } from '../state/StoreState'

export const StoreReducer = (state: IStoreState, action: StoreTypes) => {
  switch (action.type) {
    default:
      return {
        ...state,
      }
  }
}
