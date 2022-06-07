import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import { UserContext } from '../../context/UserContext';
import Mealplan from './Mealplan';

const Mealplans = () => {
  const { userId } = useContext(UserContext);
  const [mealplans, setMealplans] = useState([]);

  useEffect(() => {
    apiService.get<any, any>(ApiEndpoints.getUserMealplans(userId))
    .then(({ data }) => {
      setMealplans(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
     {mealplans.map(mealplan => <Mealplan key={mealplan.Id} mealplan={mealplan} />)}
    </>
  );
};

export default Mealplans;
