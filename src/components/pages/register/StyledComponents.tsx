import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../shared/theme/Colors';

export const StyledRegisterWrapper = styled.h1`
  width: 80%;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const RegisterOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  margin: 5px;
`;

export const StyledNewMemberText = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;