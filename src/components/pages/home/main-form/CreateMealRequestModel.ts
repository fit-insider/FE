export interface CreateMealRequestModel {
  userId: string
  gender: string
  target: string
  height: number
  weight: number
  age: number
  heightUnit: string
  weightUnit: string
  body: string
  usualActivity: number
  phisicalActivity: number
  sleep: number
  waterIntake: number
  mealplanType: string
  excludedFoods: Array<string>
  mealsCount: number,
  useCustomMethod: boolean
}