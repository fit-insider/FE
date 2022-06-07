export const ApiEndpoints = {
  lastVersion: '/version/last-version',
  getVersion: (name: string) => `/version/get-version?version=${name}`,
  user: (token: string) => `/users/${token}`,
  registerUser: '/user/add-user',
  loginUser: '/user/login',
  getUserById: (id: string) => `/user/display/${id}`,
  editUser: (id: string) => `/user/edit/${id}`,
  changePassword: (id: string) => `/user/change-password/${id}`,
  createMeal:'/meal/create',
  getMealplan: (userId: string, mealplanId: string) => `/meal/mealplan/${userId}&${mealplanId}`,
  getUserMealplans: (id: string) => `/meal/mealplans/${id}`,
  exportMealplan: (userId: string, mealplanId: string) => `/meal/export-mealplan/${userId}&${mealplanId}`,
  createShoppingList: (userId: string, mealplanId: string) => `/meal/create-shopping-list/${userId}&${mealplanId}`
};