export const Paths = {
  main: '/',
  auth: '/auth',
  logout: '/logout',
  home: '/home',
  walls: {
    list: '/w/list',
    compose: '/w/compose',
    get: '/w/:postId',
    toWall: (wallId: number) => `/w/${wallId}`,
  },
  explore: '/explore',
  posts: {
    list: '/p/list',
    compose: '/p/compose',
    comments: '/p/:postId/comments',
    toComments: (postId: number) => `/p/${postId}/comments`,
    get: '/p/:postId',
    toPost: (postId: number) => `/p/${postId}`,
  },
  notifications: '/notifications',
}
