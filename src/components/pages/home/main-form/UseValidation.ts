import { useMemo } from 'react';
import Utils from '../../../../utils/Utils';
import { METRICS } from './MetricTypes';

import {
  AGE_VALID_REGEX,
  HEIGHT_VALID_REGEX,
  MAX_AGE, MAX_HEIGHT_CM,
  MAX_HEIGHT_FEET,
  MAX_WEIGHT_KG,
  MAX_WEIGHT_LBS,
  MIN_AGE,
  MIN_HEIGHT_CM,
  MIN_HEIGHT_FEET,
  MIN_WEIGHT_KG,
  MIN_WEIGHT_LBS,
  WEIGHT_VALID_REGEX
} from './Utils';

export const useValidation = (metrics) => {

  const heightUnit = useMemo(() => {
    if (!Utils.isNullOrUndefined(metrics)) {
      return metrics.heightUnit;
    }
    return undefined;
  }, [metrics]);

  const weightUnit = useMemo(() => {
    if (!Utils.isNullOrUndefined(metrics)) {
      return metrics.weightUnit;
    }
    return undefined;
  }, [metrics]);

  const validateValue = (value: string, type: string) => {
    switch (type) {
      case 'height':
        return validateHeightValue(value);
      case 'weight':
        return validateWeightValue(value);
      case 'age':
        return validateAgeValue(value);
      default:
        return false;
    }
  };

  const validateHeightValue = (value: string) => {
    if (value.match(HEIGHT_VALID_REGEX)) {
      if (heightUnit === METRICS.CM) {
        return parseInt(value) >= MIN_HEIGHT_CM && parseInt(value) <= MAX_HEIGHT_CM;
      }

      if (heightUnit === METRICS.FEET) {
        return parseInt(value) >= MIN_HEIGHT_FEET && parseInt(value) <= MAX_HEIGHT_FEET;
      }
    }

    return false;
  };

  const validateWeightValue = (value: string) => {
    if (value.match(WEIGHT_VALID_REGEX)) {
      if (weightUnit === METRICS.KG) {
        return parseInt(value) >= MIN_WEIGHT_KG && parseInt(value) <= MAX_WEIGHT_KG;
      }

      if (weightUnit === METRICS.LBS) {
        return parseInt(value) >= MIN_WEIGHT_LBS && parseInt(value) <= MAX_WEIGHT_LBS;
      }
    }

    return false;
  };

  const validateAgeValue = (value: string) => {
    if (
      value.match(AGE_VALID_REGEX) &&
      parseInt(value) >= MIN_AGE &&
      parseInt(value) <= MAX_AGE
    ) {
      return true;
    }

    return false;
  };

  return {
    validateValue
  };
};