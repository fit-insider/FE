import React, { useContext, useEffect, useState } from 'react';
import Page from '../../layout/page-wrapper/Page';
import DailyRequirements from './DailyRequirements';
import { useTranslation } from 'react-i18next';
import DailyMealComponent from './DailyMealsComponent';
import { MealplanContext } from '../../context/MealplanContext';
import Utils from '../../../utils/Utils';
import { useHistory } from 'react-router-dom';
import MealplanInfo from './MealplanInfo';
import MealplanReports from './MealplanReports';
import Conditional from '../../utils/Conditional';
import { UserContext } from '../../context/UserContext';

const MealplanPage = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const history = useHistory();
  const { mealplan } = useContext(MealplanContext);
  const { userId } = useContext(UserContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (Utils.isNullOrUndefined(mealplan)) {
      history.push('/');
    }
  }, [mealplan]);

  const prevDay = () => {
    if (currentDay == 0) {
      return;
    }
    setCurrentDay(currentDay - 1);
  };

  const nextDay = () => {
    if (currentDay == 6) {
      return;
    }
    setCurrentDay(currentDay + 1);
  };

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
    <Page>
      {
        !Utils.isNullOrUndefined(mealplan) &&
        <>
          <MealplanInfo mealplan={mealplan}></MealplanInfo>
          <DailyRequirements requirements={requirements} />
          <DailyMealComponent
            dayTitle={`${t('DAY')} ${currentDay + 1}`}
            requirements={requirements}
            meals={mealplan.dailyMeals[currentDay].meals}
            currentDay={currentDay}
            prevDay={prevDay}
            nextDay={nextDay}
          />

          <Conditional when={!Utils.isNullOrUndefined(userId)}>
            <MealplanReports mealplan={mealplan} />
          </Conditional>
        </>
      }
    </Page>
  );
};

export default MealplanPage;