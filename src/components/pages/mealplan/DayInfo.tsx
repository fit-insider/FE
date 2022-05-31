import React, { useEffect, useState } from 'react';
import images from '../../shared/images/Images';
import { DayInfoTooltipWrapper, MealInfoLabel, NutrientLabel, TooltipIcon } from './StyledComponents';
import ReactTooltip from 'react-tooltip';
import { HorizontalDivier } from '../../shared/dividers/StyledComponents';
import { useTranslation } from 'react-i18next';
import Utils from '../../../utils/Utils';

const DayInfo = ({ dayName, meals, requirements }) => {
  const { t } = useTranslation();
  const [nutrients, setNutrients] = useState({
    Energy: 0,
    Protein: 0,
    Carbs: 0,
    Fat: 0,
    Error: 0
  });

  useEffect(() => {
    let kcal = 0, protein = 0, carbs = 0, fat = 0, error = 0;
    meals.forEach(meal => {
      meal.nutrients.forEach(nutrient => {
        switch (nutrient.name) {
          case 'Energy':
            kcal += nutrient.quantity;
            break;
          case 'Protein':
            protein += nutrient.quantity;
            break;
          case 'Carbs':
            carbs += nutrient.quantity;
            break;
          case 'Fat':
            fat += nutrient.quantity;
            break;
        }
      });
    });

    requirements.forEach(nutrient => {
      switch (nutrient.name) {
        case 'Energy':
          error += 0.2 * Math.abs(nutrient.value - kcal)
          break;
        case 'Protein':
          error +=  Math.abs(nutrient.value - protein)
          break;
        case 'Carbs':
          error +=  Math.abs(nutrient.value - carbs)
          break;
        case 'Fat':
          error +=  Math.abs(nutrient.value - fat)
          break;
      }
    });

    setNutrients({
      Energy: kcal,
      Protein: protein,
      Carbs: carbs,
      Fat: fat,
      Error: error
    });

  }, [meals]);

  return (
    <DayInfoTooltipWrapper>
      <TooltipIcon src={images.info} data-tip data-for={'' + dayName} />

      <ReactTooltip id={'' + dayName} place='top' effect='solid'>

        {dayName}
        
        <HorizontalDivier />

        <NutrientLabel><MealInfoLabel color='kcal'>{t('KCAL')}</MealInfoLabel>: {Utils.round(nutrients.Energy)} Kcal</NutrientLabel>
        <NutrientLabel><MealInfoLabel color='protein'>{t('PROTEIN')}</MealInfoLabel>: {Utils.round(nutrients.Protein)} gr</NutrientLabel>
        <NutrientLabel><MealInfoLabel color='carb'>{t('CARBS')}</MealInfoLabel>: {Utils.round(nutrients.Carbs)} gr</NutrientLabel>
        <NutrientLabel><MealInfoLabel color='fat'>{t('FAT')}</MealInfoLabel>: {Utils.round(nutrients.Fat)} gr</NutrientLabel>
        
        <HorizontalDivier />

        <NutrientLabel>Error: {Utils.round(nutrients.Error)}</NutrientLabel>

      </ReactTooltip>
    </DayInfoTooltipWrapper>
  );
};

export default DayInfo;