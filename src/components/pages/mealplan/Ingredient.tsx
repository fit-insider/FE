import React from 'react';
import Utils from '../../../utils/Utils';
import Conditional from '../../utils/Conditional';
import { StyledIngredient } from './StyledComponents';
import { removeUnit } from './Utils';

const Ingredient = ({ ingredient }) => {
  return (
    <StyledIngredient>
      <Conditional when={ingredient.quantity >= 0.2}>
        {Utils.decimalRound(ingredient.quantity)} {Utils.capitalize(removeUnit(ingredient.text))} - {Utils.round(ingredient.weight)} gr
      </Conditional>
    </StyledIngredient>
  );
};

export default Ingredient;