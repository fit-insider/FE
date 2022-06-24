import { Box, LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../../shared/theme/Colors';

export const MainFormPage = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  padding-top: 60px;
  margin-top: 20px;
  background: ${colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.p`
  color: ${colors.white};
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

export const PageFields = styled.div<{ grid?: boolean }>`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  align-content: stretch;
  grid-template-columns: ${({ grid }) =>grid? '1fr 1fr' : '1fr'};
`;

export const FieldLabel = styled.label<{ labelColor?: string, fieldChecked?: boolean, small?: boolean, hasImage?: boolean }>`
  margin: 0 auto;
  width: 100%;  
  max-width: 250px;
  color: ${colors.white};
  background: ${({ fieldChecked }) => fieldChecked ? colors.primary : colors.darkGrey};
  font-size: ${({ small }) => small ? '0.8rem' : '1rem'};
  display: flex;
  align-items: center;
  justify-content: ${({ hasImage }) => hasImage ? 'space-evenly' : 'center'};
  text-align: center;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  cursor: pointer;
  transition: .2s;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledLabelImage = styled.img`
  width: 100px;
`;

export const PageControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;

export const StyledProgressContainer = styled(Box)`
  position: absolute;
  top: 60px;
  margin: 10px auto;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  &.MuiLinearProgress-colorPrimary {
    background-color:  ${colors.primaryLightLight};
  }

  & .MuiLinearProgress-barColorPrimary {
    background-color: ${colors.primary};
  }
`;

export const StyledProgressLabel = styled.p`
  font-size: 14px;
  color: ${colors.white}
`;