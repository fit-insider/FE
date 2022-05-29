import React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../../../utils/Utils';
import images from '../../shared/images/Images';
import Conditional from '../../utils/Conditional';
import Meal from './Meal';
import { Control, ControlLabel, DailyMealControls, DailyMeals, DailyMealWrapper, DayTitle, IconImage } from './StyledComponents';

const DailyMealComponent = ({ dayTitle, meals, currentDay, prevDay, nextDay }) => {
  const { t } = useTranslation();
  
  return (
    <DailyMealWrapper>
      <DailyMealControls>
        <span>
          <Conditional when={currentDay > 0}>
            <Control onClick={prevDay}>
              <IconImage src={images.arrowLeft} />
              <ControlLabel>{t('PREVIOUS_DAY')}</ControlLabel>
            </Control>
          </Conditional>
        </span>

        <span>
          <Conditional when={currentDay < 6}>
            <Control onClick={nextDay}>
              <ControlLabel>{t('NEXT_DAY')}</ControlLabel>
              <IconImage src={images.arrowRight} />
            </Control>
          </Conditional>
        </span>
      </DailyMealControls>


      <DayTitle>{dayTitle}</DayTitle>

      <DailyMeals>
        {
          !Utils.isNullOrUndefined(meals) && meals.map((meal, index)  =>
            <Meal key={index} meal={meal} />
          )
        }
      </DailyMeals>

    </DailyMealWrapper>
  );
};

export default DailyMealComponent;