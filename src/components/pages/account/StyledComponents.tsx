import styled from 'styled-components';
import colors from '../../shared/theme/Colors';
import { Link } from 'react-router-dom';

export const EditFormWrapper = styled.div`
  padding: 10px;
  margin: 30px;
  width: 60%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: ${colors.dark};
`;

export const FormTitle = styled.h1`
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
  margin: 0 autol
`;

// Mealplan
export const MealplanWrapper = styled.div`
  width: 100%;
`;

export const MealplanInfoWrapper = styled.div`
  border: 1px solid red;
  display: grid;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const MealplanName = styled(Link)`
  font-size: 20px;
  color: ${colors.primary};
  text-align: center;
  margin: 0 autol
`;
