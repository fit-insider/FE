import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import { UserContext } from '../../context/UserContext';

import { EditFormWrapper } from './StyledComponents';

const Mealplans = () => {
  const { userId } = useContext(UserContext);

  useEffect(() => {
    apiService.get<any, any>(ApiEndpoints.getUserMealplans(userId))
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <EditFormWrapper>
      MEALPLANS
    </EditFormWrapper>
  );
};

export default Mealplans;
