import { DailyMeal } from "./DailyMeal"
import { MealplanInfoModel } from "./MealplanInfoModel"

export interface Mealplan{
  userId: string
  id: string
  calories: number
  carb: number
  fat: number
  protein: number
  dailyMeals: Array<DailyMeal>
  mealplanData: MealplanInfoModel
}