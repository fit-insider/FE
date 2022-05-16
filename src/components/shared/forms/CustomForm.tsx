import React from 'react';
import { StyledForm } from './StylesComponents';

interface CustomFormModel {
  children: any,
  width?: number
}


const CustomForm = ({ children, width } : CustomFormModel) => {
  return (
    <StyledForm width={width}>
      {children}
    </StyledForm>
  );
};

export default CustomForm;
