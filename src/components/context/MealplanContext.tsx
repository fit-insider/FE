import React, { createContext, useState } from 'react';
import { Mealplan } from '../../interfaces/Mealplan';

interface MealplanContextModel {
  contextMealplan: Mealplan
  saveMealplan: (value : object) => void
}

export const MealplanContext = createContext<MealplanContextModel>({ contextMealplan: null, saveMealplan: null });

export const MealplanContextProvider = ({ children }) => {
  const [contextMealplan, setMealplan] = useState(JSON.parse(localStorage.getItem('mealplan')));

  const savePlan = (mealplan) => {
    localStorage.setItem('mealplan', JSON.stringify(mealplan));
    setMealplan(mealplan);
  };

  const data = {
    contextMealplan: contextMealplan,
    saveMealplan: savePlan
  };

  return <MealplanContext.Provider value={data}>
    {children}
  </MealplanContext.Provider>;
};