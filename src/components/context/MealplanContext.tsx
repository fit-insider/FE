import React, { createContext, useState } from 'react';

interface Meal {
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

interface DailyMeal {
  id: number
  meals: Array<Meal>
}

interface Mealplan{
  userId: number
  id: number
  calories: number
  carb: number
  fat: number
  protein: number
  dailyMeals: Array<DailyMeal>
}

interface MealplanContextModel {
  mealplan: Mealplan
  setMealplan: (value : object) => void
}

export const MealplanContext = createContext<MealplanContextModel>({ mealplan: null, setMealplan: null });

export const MealplanContextProvider = ({ children }) => {
  const [mealplan, setMealplan] = useState(null);

  const data = {
    mealplan: mealplan,
    setMealplan: setMealplan
  };

  return <MealplanContext.Provider value={data}>
    {children}
  </MealplanContext.Provider>;
};