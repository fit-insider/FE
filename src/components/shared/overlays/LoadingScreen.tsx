import React from 'react';
import Conditional from '../../utils/Conditional';
import { CustomCircularProgress, LoadingScreenLabel, LodingScreenWraper } from './StyledComponents';

const LoadingScreen = ({ active, text }) => (
  <Conditional when={active}>
    <LodingScreenWraper>
      <CustomCircularProgress />
      <LoadingScreenLabel>{text}</LoadingScreenLabel>
    </LodingScreenWraper>
  </Conditional>
);

export default LoadingScreen;