import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../shared/theme/Colors';

export const CustomCircularProgress = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary{
    color: ${colors.primary};
  }
`;

export const LodingScreenWraper = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingScreenLabel = styled.p`
  margin: 5px;
  font-size: 14px;
  text-align: center;
  font-style: italic;
`;