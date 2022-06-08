import { t } from 'i18next';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import { UserContext } from '../../context/UserContext';
import { CustomCircularProgress, LoadingScreenLabel } from '../../shared/overlays/StyledComponents';
import Conditional from '../../utils/Conditional';
import Mealplan from './Mealplan';

const Mealplans = () => {
  const [mealplans, setMealplans] = useState([]);
  const [waitForData, setWaitForData] = useState(false);
  const { userId } = useContext(UserContext);
  const { t } = useTranslation();

  useEffect(() => {
    setWaitForData(true);
    apiService.get<any, any>(ApiEndpoints.getUserMealplans(userId))
      .then(({ data }) => {
        setMealplans(data);
        setWaitForData(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {mealplans.map(mealplan => <Mealplan key={mealplan.Id} mealplan={mealplan} />)}

      <Conditional when={waitForData}>
        <CustomCircularProgress />
        <LoadingScreenLabel>{t('WAITING_FOR_DATA')}</LoadingScreenLabel>
      </Conditional>
    </>
  );
};

export default Mealplans;
