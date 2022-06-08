import React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../../../utils/Utils';
import { DailyRequirementsContainer, DailyRequirementsTitle, DailyRequirementsWrapper, Requirement } from './StyledComponents';

const DailyRequirements = ({ requirements }) => {
  const { t } = useTranslation();

  return (
    <DailyRequirementsContainer>
      <DailyRequirementsTitle>{t('DAILY_NUTRITIONAL_REQUIREMENTS')}</DailyRequirementsTitle>
      <DailyRequirementsWrapper>
        {
          requirements.map((nutrient, index) =>
            <Requirement key={index} color={nutrient.color}>
              {nutrient.name}: {Utils.round(nutrient.value)} {nutrient.unit}
            </Requirement>)
        }
      </DailyRequirementsWrapper>
    </DailyRequirementsContainer>
  );
};

export default DailyRequirements;