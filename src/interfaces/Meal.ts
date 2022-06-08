export interface Meal {
  id: number,
  name: string,
  imageURL: string,
  cautions: Array<object>
  dishTypes: Array<object>
  cuisineTypes: Array<object>
  mealTypes: Array<object>
  ingredients: Array<object>
  nutrients: Array<object>
}