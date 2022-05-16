import styled from 'styled-components';
import colors from '../theme/Colors';

export const StyledButton = styled.button<{disabled?: boolean}>`
  border: none;
  padding: 5px 15px;
  height 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: .1s;

  background: ${({ disabled }) => disabled ? `${colors.darkGrey}` : `${colors.primary}` };
  color: ${colors.white};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };

  &:hover {
    background: ${({ disabled }) => disabled ? `${colors.darkGrey}` : `${colors.primaryLight}` };
  }
`;
