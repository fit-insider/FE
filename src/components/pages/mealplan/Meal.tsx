import React from 'react';
import Utils from '../../../utils/Utils';
import Ingredient from './Ingredient';
import MealInfo from './MealInfo';
import { MealImage, MealTitle, MealWrapper } from './StyledComponents';

const Meal = ({ meal }) => {
  return (
    <MealWrapper>
      <MealTitle>{Utils.capitalize(meal.name)}</MealTitle>
      <MealInfo meal={meal}/>
      <MealImage src={meal.imageURL} alt='' />
      {
        meal.ingredients.map((ingredient, index) => 
        <Ingredient key={index} ingredient={ingredient}/>
        )
      }
    </MealWrapper>
  );
};

export default Meal;