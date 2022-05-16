import { CreateMealRequestModel } from "./CreateMealRequestModel";
import { METRICS } from "./MetricTypes";

export const MIN_HEIGHT_CM = 54;
export const MAX_HEIGHT_CM = 272;
export const MIN_HEIGHT_FEET = 1.7;
export const MAX_HEIGHT_FEET = 8.93;
export const MIN_WEIGHT_KG = 20;
export const MAX_WEIGHT_KG = 635;
export const MIN_WEIGHT_LBS = 44;
export const MAX_WEIGHT_LBS = 1400;
export const MIN_AGE = 16;
export const MAX_AGE = 70;
export const HEIGHT_VALID_REGEX = /^[1-9]+[0-9]*$/g;
export const WEIGHT_VALID_REGEX = /^[1-9]+[0-9]*$/g;
export const AGE_VALID_REGEX = /^[1-9]+[0-9]*$/g;

const getCheckedValueId = (values) => {
  for (const [id, value] of Object.entries(values)) {
    if (value['type'] === 'checkbox' && value['checked'] === true) {
      return id;
    }
  }
}

const getCheckedItemValue = (values) => {
  for (const value of Object.values(values)) {
    if (value['type'] === 'checkbox' && value['checked'] === true) {
      return value['value'];
    }
  }
}

export const mapFormDataToRequest =  (data) : CreateMealRequestModel => {
  const apiData = {
    userId: '',
    gender: '',
    target: '',
    height: 0,
    weight: 0,
    age: 0,
    heightUnit: '',
    weightUnit: '',
    body: '',
    usualActivity: 0,
    phisicalActivity: 0,
    sleep: 0,
    waterIntake: 0,
    mealplanType: '',
    mealsCount: 0,
  };

  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case 'page_0':
        apiData[value['apiKey']] = getCheckedValueId(value);
        break;
      case 'page_1':
        apiData[value['apiKey']] = getCheckedValueId(value);
        break;
      case 'page_2':
        apiData['heightUnit'] = METRICS[data.metrics.heightUnit]
        apiData['weightUnit'] = METRICS[data.metrics.weightUnit]
        apiData['height'] = parseInt(data['page_2'].height.value);
        apiData['weight'] = parseInt(data['page_2'].weight.value);
        apiData['age'] = parseInt(data['page_2'].age.value);
        break;
      case 'page_3':
        apiData[value['apiKey']] = getCheckedValueId(value);
        break;
      case 'page_4':
        apiData[value['apiKey']] = getCheckedItemValue(value);
        break;
      case 'page_5':
        apiData[value['apiKey']] = getCheckedItemValue(value);
        break;
      case 'page_6':
        apiData[value['apiKey']] = getCheckedItemValue(value);
        break;
      case 'page_7':
        apiData[value['apiKey']] = getCheckedItemValue(value);
        break;
      case 'page_8':
        apiData[value['apiKey']] = getCheckedValueId(value);
        break;
      case 'page_9':
        apiData[value['apiKey']] = getCheckedItemValue(value);
        break;
    }
  }

  return apiData;
}