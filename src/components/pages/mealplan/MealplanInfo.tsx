import React from 'react';
import { useTranslation } from 'react-i18next';
import { MealplanInfoLabel, MealplanInfoLabels, MealplanInformationContainer, MealplanInfoTitle, MealplanInfoWrapper, MealplanName, PieChartContainer } from './StyledComponents';
import { PieChart } from 'react-minimal-pie-chart';
import colors from '../../shared/theme/Colors';
import DailyRequirements from './DailyRequirements';

const MealplanInfo = ({ mealplan, requirements }) => {
  const mealplanData = mealplan.mealplanData;
  const { t } = useTranslation();

  return (
    <MealplanInfoWrapper>
      <MealplanName to={`/mealplan?id=${mealplan.id}`}>{t('MEALPLAN')}: {mealplan.id}</MealplanName>

      <MealplanInformationContainer>
        <MealplanInfoLabels>
          <MealplanInfoTitle>{t('MEALPLAN_INFO')}</MealplanInfoTitle>
          <MealplanInfoLabel>{`${t('GENDER')}: ${mealplanData.gender}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('TARGET')}: ${mealplanData.target}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('HEIGHT')}: ${mealplanData.height} ${mealplanData.heightUnit}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('WEIGHT')}: ${mealplanData.weight} ${mealplanData.weightUnit}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('AGE')}: ${mealplanData.age}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('BODY_TYPE')}: ${mealplanData.body}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('USUAL_ACTIVITY')}: ${mealplanData.usualActivity}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('PHISICAL_ACTIVITY')}: ${mealplanData.phisicalActivity}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('SLEEP')}: ${mealplanData.sleep}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('DAILY_WATER_INTAKE')}: ${mealplanData.waterIntake}`}</MealplanInfoLabel>
          <MealplanInfoLabel>{`${t('MEALS_COUNT')}: ${mealplanData.mealsCount}`}</MealplanInfoLabel>
        </MealplanInfoLabels>

        <PieChartContainer>
          {
            mealplan && <PieChart
              labelStyle={{ fontSize: '6px' }}
              label={({ dataEntry }) => `${dataEntry.title} ${Math.round(dataEntry.percentage)}%`}
              data={[
                { title: t('PROTEIN'), value: (mealplan.protein * 4 * 100 / mealplan.calories), color: colors.protein },
                { title: t('CARBS'), value: (mealplan.carb * 4 * 100 / mealplan.calories), color: colors.carb },
                { title: t('FAT'), value: (mealplan.fat * 9 * 100 / mealplan.calories), color: colors.fat }
              ]}
            />
          }

        </PieChartContainer>
      </MealplanInformationContainer>

      <DailyRequirements requirements={requirements} />

    </MealplanInfoWrapper>
  );
};

export default MealplanInfo;