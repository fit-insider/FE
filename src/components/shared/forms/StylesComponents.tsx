import styled from 'styled-components';
import colors from '../theme/Colors';

export const StyledForm = styled.form<{width?: number}>`
  width: ${({ width }) => width}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: .5s;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 90%;
  }  
`;

export const FormError = styled.p`
  color: ${colors.error};
  font-style: italic;
`;
