import { Box } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { StyledLinearProgress, StyledProgressContainer, StyledProgressLabel } from './StyledComponents';

const ProgressIndicator = forwardRef(({ value }: any) => (
  <StyledProgressContainer sx={{ display: 'flex', alignItems: 'center', width: '70%' }}>
    <Box sx={{ width: '100%', mr: 1 }}>
      <StyledLinearProgress variant='determinate' value={value} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <StyledProgressLabel>{`${Math.round(value)}%`}</StyledProgressLabel>
    </Box>
  </StyledProgressContainer>

));

export default ProgressIndicator;