import React from 'react';
import {
  ShowcaseImage,
  StyledBanner1,
  StyledBanner2,
  StyledBanner3,
  StyledBanner4
} from './StyledComponents';
import Textbox from './Textbox';

export const Banner1 = ({ img } ) => {
  return (
    <StyledBanner1>
      <ShowcaseImage src={img}/>
      <Textbox id={1}/>
    </StyledBanner1>
  );
};

export const Banner2 = ({ img }) => {
  return (
    <StyledBanner2 >
      <ShowcaseImage src={img}/>
      <Textbox id={2}/>
    </StyledBanner2>
  );
};

export const Banner3 = ({ img }) => {
  return (
    <StyledBanner3>
      <ShowcaseImage src={img}/>
      <Textbox id={3}/>
    </StyledBanner3>
  );
};

export const Banner4 = ({ img } ) => {
  return (
    <StyledBanner4>
      <ShowcaseImage src={img}/>
      <Textbox id={4}/>
    </StyledBanner4>
  );
};
