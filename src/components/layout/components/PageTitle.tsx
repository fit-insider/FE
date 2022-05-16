import React from 'react';
import { StyledPageTitle } from './StyledComponents';

const PageTitle = ({ text }) => {
  return (
    <StyledPageTitle>{text}</StyledPageTitle>
  );
};

export default PageTitle;