import { useTranslation } from 'react-i18next';
import { METRICS } from './MetricTypes';

const useMainFormFields = () => {
  const { t } = useTranslation();

  return [
    {
      pageId: 'page_0',
      apiKey: 'gender',
      pageName: t('CHOOSE_GENDER'),
      fields: [
        { id: 'male', name: t('MALE'), type: 'checkbox' },
        { id: 'female', name: t('FEMALE'), type: 'checkbox' }
      ],
      unique: true
    },
    {
      pageId: 'page_1',
      apiKey: 'target',
      pageName: t('CHOOSE_TARGET'),
      fields: [
        { id: 'loseWeight', name: t('LOSE_WEIGHT'), type: 'checkbox' },
        { id: 'gainMass', name: t('GAIN_MASS'), type: 'checkbox' },
        { id: 'tonifying', name: t('TONIFYING'), type: 'checkbox' }
      ],
      unique: true
    },
    {
      pageId: 'page_2',
      apiKey: 'metrics',
      pageName: t('METRICS'),
      switchOptions: [
        { id: 'weightUnit', firstValue: METRICS.KG, secondValue: METRICS.LBS },
        { id: 'heightUnit', firstValue: METRICS.CM, secondValue: METRICS.FEET }
      ],
      fields: [
        { id: 'height', name: t('YOUR_HEIGHT'), type: 'text', valueType: 'height' },
        { id: 'weight', name: t('YOUR_WEIGHT'), type: 'text', valueType: 'weight' },
        { id: 'age', name: t('AGE'), type: 'text', valueType: 'age' }
      ]
    },
    {
      pageId: 'page_3',
      apiKey: 'body',
      pageName: t('BODY_TYPE'),
      fields: [
        { id: 'ectomorph', name: t('ECTOMORPH'), type: 'checkbox' },
        { id: 'mesomorph', name: t('MESOMORPH'), type: 'checkbox' },
        { id: 'endomorph', name: t('ENDOMORPH'), type: 'checkbox' }
      ],
      unique: true
    },
    {
      pageId: 'page_4',
      apiKey: 'usualActivity',
      pageName: t('USUAL_ACTIVITY'),
      fields: [
        { id: 'mostlyHome', name: t('MOSTLY_HOME'), type: 'checkbox', value: 1 },
        { id: 'office', name: t('AT_OFFICE'), type: 'checkbox', value: 2 },
        { id: 'dailyWalks', name: t('OFTEN_DAILY_WALKS'), type: 'checkbox', value: 3 },
        { id: 'phisicalWork', name: t('DAILY_PHISICAL_WORK'), type: 'checkbox', value: 4 }
      ],
      unique: true
    },
    {
      pageId: 'page_5',
      apiKey: 'phisicalActivity',
      pageName: t('PHISICAL_ACTIVITY'),
      fields: [
        { id: 'noActivity', name: t('NO_PHISICAL_ACTIVITY'), type: 'checkbox', value: 0 },
        { id: 'oneTwoTimes', name: t('1_2_TIMES_A_WEEK'), type: 'checkbox', value: 2 },
        { id: 'threeFiveTimes', name: t('3_5_TIMES_A_WEEK'), type: 'checkbox', value: 4 },
        { id: 'fiveSevenTimes', name: t('5_7_TIMES_A_WEEK'), type: 'checkbox', value: 6 },
        { id: 'moreThanSevenTimes', name: t('MORE_THAN_7_TIMES_A_WEEK'), type: 'checkbox', value: 8 }
      ],
      unique: true
    },
    {
      pageId: 'page_6',
      apiKey: 'sleep',
      pageName: t('SLEEP'),
      fields: [
        { id: 'lessThanFiveHours', name: t('LESS_THAN_5_HOURS'), type: 'checkbox', value: 4 },
        { id: 'fiveSevenHours)', name: t('5_7_HOURS'), type: 'checkbox', value: 6 },
        { id: 'sevenNineHours', name: t('7_9_HOURS'), type: 'checkbox', value: 8 },
        { id: 'moreThanNineHours', name: t('MORE_THAN_9_HOURS'), type: 'checkbox', value: 10 }
      ],
      unique: true
    },
    {
      pageId: 'page_7',
      apiKey: 'waterIntake',
      pageName: t('DAILY_WATER_INTAKE'),
      fields: [
        { id: 'anyWater', name: t('ANY_WATER_ONLY_OTHER_DRINKS'), type: 'checkbox', value: 0 },
        { id: 'oneLiter', name: t('APPROX_1_L'), type: 'checkbox', value: 1 },
        { id: 'twiLiter', name: t('APPROX_2_L'), type: 'checkbox', value: 2 },
        { id: 'moreThanThreeLiter', name: t('MORE_THAN_3_L'), type: 'checkbox', value: 3 }
      ],
      unique: true
    },
    {
      pageId: 'page_8',
      apiKey: 'mealplanType',
      pageName: t('WHAT_MEALPLAN_TYPE_YOU_WANT'),
      fields: [
        { id: 'general', name: t('GENERAL'), type: 'checkbox' },
        { id: 'vegetarian', name: t('VEGETARIAN'), type: 'checkbox' }
      ],
      unique: true
    },
    {
      pageId: 'page_9',
      apiKey: 'mealsCount',
      pageName: t('HOW_MANY_MEALS_YOU_WANT_A_DAY'),
      fields: [
        { id: 'twoMeals', name: t('TWO'), type: 'checkbox', value: 2 },
        { id: 'threeMeals', name: t('THREE'), type: 'checkbox', value: 3 },
        { id: 'fourMeals', name: t('FOUR'), type: 'checkbox', value: 4 },
        { id: 'fiveMeals', name: t('FIVE'), type: 'checkbox', value: 5 },
        { id: 'sixMeals', name: t('SIX'), type: 'checkbox', value: 6 }
      ],
      unique: true
    }
  ];
};

export default useMainFormFields;