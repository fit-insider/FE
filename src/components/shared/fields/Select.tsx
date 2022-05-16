import React, { useMemo } from 'react';
import Utils from '../../../utils/Utils';
import Conditional from '../../utils/Conditional';
import Label from './Label';
import {
  ErrorLabel,
  StyledSelect,
  StyledSelectOption,
  StyledTextFieldContainer
} from './StyledComponents';

interface SelectInterface {
  id?: string
  name?: string
  value?: string
  label?: string
  placeholder?: string
  labelColor?: string
  onChange?(): any
  error?: any
  options?: any[]
}

const Select = ({
  id,
  name,
  value,
  label,
  placeholder,
  labelColor,
  onChange,
  error = '',
  options
}: SelectInterface) => {

  const errors = useMemo(() => {
    if(Utils.isEmptyString(error)) {
      return [];
    }
    if(Utils.isString(error) && !Utils.isEmptyString(error)){
      return [error];
    }
    return error;
  }, [error])

  return (
    <StyledTextFieldContainer>

      <Conditional when={!Utils.isNullOrUndefined(label)}>
        <Label labelColor={labelColor}>{label}</Label>
      </Conditional>

      <StyledSelect
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={Utils.isArray(error) ? !Utils.isEmptyArray(error) : !Utils.isEmptyString(error)}
      >
        {
          options.map((option, index) =>
            <StyledSelectOption
              key={index}
              value={option.value}
            >
              {option.label}
            </StyledSelectOption>)
        }
      </StyledSelect>

      <Conditional when={error}>
        {errors?.map((err, index) => <ErrorLabel key={index}>{err}</ErrorLabel>)}
      </Conditional>
    </StyledTextFieldContainer >
  );
};

export default Select;
