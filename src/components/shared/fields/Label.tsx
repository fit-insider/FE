import styled from 'styled-components';
import colors from '../theme/Colors';

const Label = styled.label<{labelColor?: string, small?: boolean}>`
  margin: 3px;
  color: ${({ labelColor }) => labelColor === 'dark' ? colors.dark : colors.white };
  font-size: ${({ small }) => small ? '0.8rem' : '1rem' };
`;

export default Label;