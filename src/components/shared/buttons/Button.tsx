import React from 'react';
import Utils from '../../../utils/Utils';
import { StyledButton } from './StyledComponents';

const Button = ({
  children,
  onClick = Utils.noop,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton
      type='button'
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >

      {children}
    </StyledButton>
  );
};

export default Button;
