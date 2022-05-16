import styled from 'styled-components';
import colors from '../../../shared/theme/Colors';

export const MainFormPage = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background: ${colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.p`
  color: ${colors.white};
  font-size: 1.1rem;
  margin-bottom: 10px;
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

export const FieldLabel = styled.label<{ labelColor?: string, fieldChecked?: boolean, small?: boolean }>`
  margin: 0 auto;
  width: 100%;  
  max-width: 250px;
  color: ${colors.white};
  background: ${({ fieldChecked }) => fieldChecked ? colors.primary : colors.darkGrey};
  font-size: ${({ small }) => small ? '0.8rem' : '1rem'};
  display: flex;
  align-items: center;
  justify-content: center;
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

export const PageControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;
