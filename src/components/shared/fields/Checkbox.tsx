import React from 'react';
import Utils from '../../../utils/Utils';
import Conditional from '../../utils/Conditional';
import Label from './Label';
import {
  CheckboxContent,
  ErrorLabel,
  StyledCheckboxInput,
  StyledCheckboxWrapper
} from './StyledComponents';

interface CheckboxInterface {
  id?: string
  name?: string
  checked?: boolean
  label?: string
  labelColor?: string
  onChange?(ev: any): any
  error?: string
  options?: any[],
  hidden?: boolean
}

const Checkbox = ({
  id,
  name,
  checked,
  label,
  labelColor,
  onChange,
  error = '',
  hidden
}: CheckboxInterface) => {
  return (
    <CheckboxContent hidden>
      <StyledCheckboxWrapper>
        <StyledCheckboxInput
          type='checkbox'
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          error={!Utils.isEmptyString(error)}
          hidden={hidden}
        />

        <Conditional when={!Utils.isNullOrUndefined(label) && !hidden}>
          <Label htmlFor={id} labelColor={labelColor} small>{label}</Label>
        </Conditional>
      </StyledCheckboxWrapper>

      <Conditional when={error !== ''}>
        <ErrorLabel>{error}</ErrorLabel>
      </Conditional>
    </CheckboxContent>
  );
};

export default Checkbox;
