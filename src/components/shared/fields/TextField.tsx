import React from 'react';
import Utils from '../../../utils/Utils';
import Conditional from '../../utils/Conditional';
import Label from './Label';
import { ErrorLabel, StyledTextField, StyledTextFieldContainer } from './StyledComponents';

interface TextFieldInterface {
  id?: string
  name?: string
  type?: string
  value?: string
  label?: string
  placeholder?: string
  labelColor?: string
  onType?(target: any): any
  error?: boolean
  errorsList?: any
}

const TextField = ({
  id,
  type = 'text',
  name,
  value,
  label,
  placeholder,
  labelColor,
  onType,
  error,
  errorsList = []
}: TextFieldInterface) => {

  return (
    <StyledTextFieldContainer>

      <Conditional when={!Utils.isNullOrUndefined(label)}>
        <Label labelColor={labelColor}>{label}</Label>
      </Conditional>

      <StyledTextField
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onType}
        placeholder={placeholder}
        error={error}
      />

      <Conditional when={error}>
        {errorsList?.map((err, index) => <ErrorLabel key={index}>{err}<br/></ErrorLabel>)}
      </Conditional>

    </StyledTextFieldContainer>
  );
};

export default TextField;
