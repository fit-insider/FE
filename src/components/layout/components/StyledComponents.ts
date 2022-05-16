import styled from 'styled-components';
import colors from '../../shared/theme/Colors';

export const StyledPageTitle = styled.h1`
  width: 80%;
  padding: 5px 2px;
  margin-top: 30px;
  font-size: 1.5rem;
  text-align: center;
  box-sizing: border-box;
  border-top: 2px solid ${colors.primary};
  border-bottom: 2px solid ${colors.primary};

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
