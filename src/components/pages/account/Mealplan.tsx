import React from 'react';
import { useTranslation } from 'react-i18next';
import MealplanInfo from '../mealplan/MealplanInfo';
import { MealplanWrapper } from './StyledComponents';

const Mealplan = ({ mealplan }) => {
  const { t } = useTranslation();

  const requirements = [
    {
      name: t('CALORIES'),
      value: mealplan?.calories,
      unit: 'kcal',
      color: 'kcal'
    },
    {
      name: t('PROTEIN'),
      value: mealplan?.protein,
      unit: 'gr',
      color: 'protein'
    },
    {
      name: t('CARBS'),
      value: mealplan?.carb,
      unit: 'gr',
      color: 'carb'
    },
    {
      name: t('FAT'),
      value: mealplan?.fat,
      unit: 'gr',
      color: 'fat'
    }
  ];

  return (
    <MealplanWrapper>
      <MealplanInfo mealplan={mealplan} requirements={requirements}></MealplanInfo>
    </MealplanWrapper>
  );
};

export default Mealplan;