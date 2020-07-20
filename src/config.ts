export const validations = {
  messages: {
    required: ':attribute is required.',
    email: 'Your :attribute address must be valid.',
    alpha_num_dash:
      'The :attribute can only contain letters, numbers and hyphens.',
    min: ':attribute must be at least 6 characters.',
    alpha_space: ':attribute can only contain letters and spaces.',
    alpha_num: ':attribute can only contain letters and numbers.',
  },
  locale: 'en',
}

export const config = {
  auth: {
    facebook: process.env.REACT_APP_API_AUTH_FACEBOOK as string,
    google: process.env.REACT_APP_API_AUTH_GOOGLE as string,
  },
}
