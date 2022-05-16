import React, { useMemo } from 'react';
import Utils from '../../../utils/Utils';
import Conditional from '../../utils/Conditional';
import Label from './Label';
import { ErrorLabel, StyledTextArea, StyledTextFieldContainer } from './StyledComponents';

interface TextAreaInterface {
  id?: string
  name?: string
  value?: string
  label?: string
  placeholder?: string
  labelColor?: string
  onType?(): any
  error?: any
}

const TextArea = ({
  id,
  name,
  value,
  label,
  placeholder,
  labelColor,
  onType,
  error = ''
}: TextAreaInterface) => {

  const errors = useMemo(() => {
    if(Utils.isEmptyString(error)) {
      return [];
    }
    if(Utils.isString(error) && !Utils.isEmptyString(error)){
      return [error];
    }
    return error;
  }, [error]);

  return (
    <StyledTextFieldContainer>

      <Conditional when={!Utils.isNullOrUndefined(label)}>
        <Label labelColor={labelColor}>{label}</Label>
      </Conditional>

      <StyledTextArea
        id={id}
        name={name}
        value={value}
        onChange={onType}
        placeholder={placeholder}
        error={Utils.isArray(error) ? !Utils.isEmptyArray(error) : !Utils.isEmptyString(error)}
      />

      <Conditional when={error}>
        {errors?.map((err, index) => <ErrorLabel key={index}>{err}</ErrorLabel>)}
      </Conditional>
    </StyledTextFieldContainer >
  );
};

export default TextArea;
