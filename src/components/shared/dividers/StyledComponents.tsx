import styled from 'styled-components';
import colors from '../theme/Colors';

export const HorizontalDivier = styled.hr<{ color?: boolean }>`
  border: 1px solid ${({ color }) => colors[color]};
  border-radius: 10px;
`;