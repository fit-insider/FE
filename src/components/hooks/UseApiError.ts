import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../../utils/Utils';
import customErrorMapper from '../mappers/CustomErrorMapper';

export const useApiError = () => {
  const [formLevelError, setFormLevelError] = useState('');
  const [errors, setErrors] = useState(null);
  const { t } = useTranslation();

  function convertResponseKeys(obj) {   
    return Object.keys(obj).reduce((accumulator, key) => {
      accumulator[key.toLowerCase()] = obj[key];
      return accumulator;
    }, {});
  }

  const handleApiError = (error: any) => {
    if(error.response.status === 500) {
      setFormLevelError(t(customErrorMapper[500].translationKey));
      return;
    }
    
    const errorDetails = customErrorMapper[error.response.data.StatusCode];
    
    if (Utils.isNullOrUndefined(errorDetails)) {
      setErrors(convertResponseKeys(error.response.data.errors));
    } else {
      setFormLevelError(t(errorDetails.translationKey));
    }
  };

  return {
    formLevelError,
    setFormLevelError,
    errors,
    setErrors,
    handleApiError
  };
};