import { ListOfWallDTO } from '../../api/dtos/ListOfWallDTO'

export interface IStoreState {
  isLoading: boolean
  walls?: ListOfWallDTO[]
}

export const StoreState: IStoreState = {
  isLoading: true,
  walls: [],
}
