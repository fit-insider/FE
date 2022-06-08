const isNullOrUndefined = (val : any) => val === null || val === undefined;

const isString = (val : any) => typeof val === 'string' || val instanceof String;

const isEmptyString = (val : any) => val === '';

const isArray = (val : any) => Array.isArray(val);

const isEmptyArray = (val : any) => val.length > 0;

function noop() {}

const round = (val : number) => Math.ceil(val);

const decimalRound = (val : number) => (Math.ceil(val / 0.1) * 0.1).toFixed(1);

const capitalize = (val : string) => val.charAt(0).toUpperCase() + val.slice(1);

export default {
  noop,
  isNullOrUndefined,
  isString,
  isEmptyString,
  isArray,
  isEmptyArray,
  round,
  capitalize,
  decimalRound
};
