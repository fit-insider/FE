import React, { useContext, useState } from 'react';
import Page from '../../layout/page-wrapper/Page';
import DailyRequirements from './DailyRequirements';
import { useTranslation } from 'react-i18next';
import DailyMealComponent from './DailyMealsComponent';
import { MealplanContext } from '../../context/MealplanContext';

const MealplanPage = () => {
  const { mealplan } = useContext(MealplanContext);
  const [currentDay, setCurrentDay] = useState(0);
  const { t } = useTranslation();

  const prevDay = () => {
    if(currentDay == 0) {
      return;
    }
    setCurrentDay(currentDay - 1);
  };

  const nextDay = () => {
    if(currentDay == 6) {
      return;
    }
    setCurrentDay(currentDay + 1);
  };

  const requirements = [
    {
      name: t('CALORIES'),
      value: mealplan.calories,
      unit: 'kcal',
      color: 'kcal'
    },
    {
      name: t('PROTEIN'),
      value: mealplan.protein,
      unit: 'gr',
      color: 'protein'
    },
    {
      name: t('CARBS'),
      value: mealplan.carb,
      unit: 'gr',
      color: 'carb'
    },
    {
      name: t('FAT'),
      value: mealplan.fat,
      unit: 'gr',
      color: 'fat'
    }
  ];

  return (
    <Page>
      <DailyRequirements requirements={requirements} />
      <DailyMealComponent 
        dayTitle={`${t('DAY')} ${currentDay + 1}`}
        meals={mealplan.dailyMeals[currentDay].meals}
        currentDay = {currentDay} 
        prevDay = {prevDay}
        nextDay = {nextDay}  
      />
    </Page>
  );
};

export default MealplanPage;