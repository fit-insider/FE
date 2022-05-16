const isNullOrUndefined = (val : any) => val === null || val === undefined;

const isString = (val : any) => typeof val === 'string' || val instanceof String;

const isEmptyString = (val : any) => val === '';

const isArray = (val : any) => Array.isArray(val);

const isEmptyArray = (val : any) => val.length > 0;

function noop() {}

export default {
  noop,
  isNullOrUndefined,
  isString,
  isEmptyString,
  isArray,
  isEmptyArray
};
