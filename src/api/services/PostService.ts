import { API } from '../apiConnection'
import { ListOfPostDTO } from '../dtos/ListOfPostDTO'
import { PostDTO } from '../dtos/PostDTO'

export const PostService = {
  list: async (page: number | unknown): Promise<ListOfPostDTO> =>
    (await API.get(`/posts/?page=${page}`)).data,

  create: async (name: string): Promise<PostDTO> =>
    (await API.post('/posts/', { name })).data,

  get: async (id: number): Promise<PostDTO> =>
    (await API.get(`/posts/${id}`)).data,
}
