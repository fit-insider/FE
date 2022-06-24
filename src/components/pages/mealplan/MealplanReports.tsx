import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import Button from '../../shared/buttons/Button';
import LoadingScreen from '../../shared/overlays/LoadingScreen';
import { MealplanInfoTitle, MealplanReportsOptions, MealplanReportsWrapper } from './StyledComponents';

const MealplanReports = ({ mealplan }) => {
  const { t } = useTranslation();
  const [loadingScreenActive, setLoadingScreenActive] = useState(false);

  const exportMealplan = () => {
    setLoadingScreenActive(true);
    apiService.getFile(ApiEndpoints.exportMealplan(mealplan.userId, mealplan.id))
    .then(({ data } : any) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      const pdfWindow = window.open();
      pdfWindow.location.href = fileURL;
      setLoadingScreenActive(false);
    })
    .catch((error) => {
      console.log(error);
      setLoadingScreenActive(false);
    });
  };

  const generateShoppingList = () => {
    setLoadingScreenActive(true);
    apiService.getFile(ApiEndpoints.createShoppingList(mealplan.userId, mealplan.id))
    .then(({ data } : any) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      const pdfWindow = window.open();
      pdfWindow.location.href = fileURL;
      setLoadingScreenActive(false);
    })
    .catch((error) => {
      console.log(error);
      setLoadingScreenActive(false);
    });
  };

  return (
    <MealplanReportsWrapper>
      <MealplanInfoTitle>{t('MEALPLAN_REPORTS')}</MealplanInfoTitle>

      <MealplanReportsOptions>
        <Button onClick={exportMealplan}>{t('EXPORT_MEALPLAN_TO_PDF')}</Button>
        <Button onClick={generateShoppingList}>{t('GENERATE_SHOPPING_LIST')}</Button>
      </MealplanReportsOptions>

      <LoadingScreen active={loadingScreenActive} text=''/>

    </MealplanReportsWrapper>
  );
};

export default MealplanReports;