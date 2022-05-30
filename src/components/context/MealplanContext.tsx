import React, { createContext, useState } from 'react';
import { Mealplan } from '../../interfaces/Mealplan';

interface MealplanContextModel {
  mealplan: Mealplan
  saveMealplan: (value : object) => void
}

export const MealplanContext = createContext<MealplanContextModel>({ mealplan: null, saveMealplan: null });

export const MealplanContextProvider = ({ children }) => {
  const [mealplan, setMealplan] = useState(JSON.parse(localStorage.getItem('mealplan')));

  const savePlan = (mealplan) => {
    localStorage.setItem('mealplan', JSON.stringify(mealplan));
    setMealplan(mealplan);
  };

  const data = {
    mealplan: mealplan,
    saveMealplan: savePlan
  };

  return <MealplanContext.Provider value={data}>
    {children}
  </MealplanContext.Provider>;
};