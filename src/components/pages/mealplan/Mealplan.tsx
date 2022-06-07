import React, { useContext, useEffect, useMemo, useState } from 'react';
import Page from '../../layout/page-wrapper/Page';
import { useTranslation } from 'react-i18next';
import DailyMealComponent from './DailyMealsComponent';
import { MealplanContext } from '../../context/MealplanContext';
import Utils from '../../../utils/Utils';
import { useHistory } from 'react-router-dom';
import MealplanInfo from './MealplanInfo';
import MealplanReports from './MealplanReports';
import Conditional from '../../utils/Conditional';
import { UserContext } from '../../context/UserContext';
import { useLocation } from 'react-router-dom';
import apiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';

const MealplanPage = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const history = useHistory();
  const [mealplan, setMealplan] = useState(null);
  const { contextMealplan } = useContext(MealplanContext);
  const { userId } = useContext(UserContext);
  const { t } = useTranslation();
  const search = useLocation().search;
  const mealplanId = new URLSearchParams(search).get('id');

  useEffect(() => {
    if (!Utils.isNullOrUndefined(userId)) {
      apiService.get<any, any>(ApiEndpoints.getMealplan(userId, mealplanId))
        .then(({ data }) => {
          setMealplan(data);
        })
        .catch(() => {
          history.push('/');
        });
    } else {
      if(!Utils.isNullOrUndefined(contextMealplan)) {
        setMealplan(contextMealplan);
      } else {
        history.push('/');
      }
    }
  }, [mealplanId])

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
          <MealplanInfo mealplan={mealplan} requirements={requirements} />
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