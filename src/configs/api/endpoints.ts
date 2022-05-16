export const ApiEndpoints = {
  lastVersion: '/version/last-version',
  getVersion: (name: string) => `/version/get-version?version=${name}`,
  user: (token: string) => `/users/${token}`,
  registerUser: '/user/add-user',
  loginUser: '/user/login',
  getUserById: (id: string) => `/user/display/${id}`,
  editUser: (id: string) => `/user/edit/${id}`,
  createMeal:'/meal/create'
};