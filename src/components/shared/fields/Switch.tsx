import React from 'react';
import Label from './Label';
import {
  SwitchButtonContainer,
  SwitchLabel,
  SwitchToggle,
  SwitchWrapper
} from './StyledComponents';
import { useState } from 'react';
import Checkbox from './Checkbox';

interface SwitchInterface {
  id?: string
  defaultActive?: boolean
  labels?: { first: string, second: string }
  labelColor?: string
  onChange?(ev: any): any
}

const Switch = ({
  id,
  defaultActive = false,
  labels = { first: '', second: '' },
  labelColor,
  onChange
}: SwitchInterface) => {

  const [active, setActive] = useState(defaultActive);

  const toggle = (ev) => {
    setActive(!active);
    onChange(ev);
  };

  return (
    <SwitchWrapper>
      <Checkbox id={id} hidden onChange={(ev) => toggle(ev)}></Checkbox>

      <SwitchLabel active={!active} labelColor={labelColor} small>{labels.first}</SwitchLabel>

      <Label htmlFor={id}>
        <SwitchButtonContainer labelColor={labelColor}>
          <SwitchToggle active={active} />
        </SwitchButtonContainer>
      </Label>

      <SwitchLabel active={active} labelColor={labelColor} small>{labels.second}</SwitchLabel>
    </SwitchWrapper>
  );
};

export default Switch;


