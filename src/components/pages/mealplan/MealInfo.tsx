import React, { useMemo } from 'react';
import images from '../../shared/images/Images';
import { MealInfoLabel, NutrientLabel, TooltipIcon, TooltipWrapper } from './StyledComponents';
import ReactTooltip from 'react-tooltip';
import { HorizontalDivier } from '../../shared/dividers/StyledComponents';
import { useTranslation } from 'react-i18next';
import Utils from '../../../utils/Utils';

const MealInfo = ({ meal }) => {
  const { t } = useTranslation();

  const cautions = useMemo(() => {
    const cautions = [];
    meal.cautions.forEach(caution => {
      cautions.push(caution.name);
    });
    return Utils.capitalize(cautions.join(', '));
  }, [meal]);
  
  const dishTypes = useMemo(() => {
    const dishTypes = [];
    meal.dishTypes.forEach(dishType => {
      dishTypes.push(dishType.name);
    });
    return Utils.capitalize(dishTypes.join(', '));
  }, [meal]);

  const cuisineTypes = useMemo(() => {
    const cuisineTypes = [];
    meal.cuisineTypes.forEach(cuisineType => {
      cuisineTypes.push(cuisineType.name);
    });
    return Utils.capitalize(cuisineTypes.join(', '));
  }, [meal]);

  const mealTypes = useMemo(() => {
    const mealTypes = [];
    meal.mealTypes.forEach(mealType => {
      mealTypes.push(mealType.name);
    });
    return Utils.capitalize(mealTypes.join(', '));
  }, [meal]);

  const KCal = useMemo(() => {
    return meal.nutrients.filter(nutrient => nutrient.name === 'Energy')[0];
  }, [meal]);

  const Protein = useMemo(() => {
    return meal.nutrients.filter(nutrient => nutrient.name === 'Protein')[0];
  }, [meal]);

  const Carbs = useMemo(() => {
    return meal.nutrients.filter(nutrient => nutrient.name === 'Carbs')[0];
  }, [meal]);

  const Fat = useMemo(() => {
    return meal.nutrients.filter(nutrient => nutrient.name === 'Fat')[0];
  }, [meal]);

  return (
    <TooltipWrapper>
      <TooltipIcon src={images.info} data-tip data-for={'' + meal.id}/>

      <ReactTooltip id={'' + meal.id} place='top' effect='solid'>
        {meal.name}
        <HorizontalDivier />
        <MealInfoLabel>{`${t('MEAL_TYPES')}: ${mealTypes}`}</MealInfoLabel>
        <MealInfoLabel>{`${t('DISH_TYPES')}: ${dishTypes}`}</MealInfoLabel>
        <MealInfoLabel>{`${t('CUISINE_TYPES')}: ${cuisineTypes}`}</MealInfoLabel>
        <MealInfoLabel>{`${t('CAUTIONS')}: ${cautions}`}</MealInfoLabel>

        <HorizontalDivier />
        <NutrientLabel><MealInfoLabel color='kcal'>{t('KCAL')}</MealInfoLabel>: {Utils.round(KCal.quantity)} {KCal.unit}</NutrientLabel>
        <NutrientLabel><MealInfoLabel color='protein'>{t('PROTEIN')}</MealInfoLabel>: {Utils.round(Protein.quantity)} {Protein.unit}</NutrientLabel>
        <NutrientLabel><MealInfoLabel color='carb'>{t('CARBS')}</MealInfoLabel>: {Utils.round(Carbs.quantity)} {Carbs.unit}</NutrientLabel>
        <NutrientLabel><MealInfoLabel color='fat'>{t('FAT')}</MealInfoLabel>: {Utils.round(Fat.quantity)} {Fat.unit}</NutrientLabel>
        
      </ReactTooltip>
    </TooltipWrapper>
  );
};

export default MealInfo;