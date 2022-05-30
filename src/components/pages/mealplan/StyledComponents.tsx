import styled from 'styled-components';
import Utils from '../../../utils/Utils';
import colors from '../../shared/theme/Colors';


// Daily Requirements
export const DailyRequirementsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const DailyRequirementsTitle = styled.h1`
  font-size: 20px;
`;

export const DailyRequirementsWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Requirement = styled.div<{ color?: string }>`
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${({ color }) => colors[color]};
  color: ${colors.white};
  font-weight: bold;
  margin: 10px;
`;

// Daily Meals Wrapper
export const DailyMealWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
  padding: 10px;
  border-radius: 4px;
  background: ${colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const DailyMealControls = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Control = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.white}
`;

export const ControlLabel = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  padding: 0;
  font-size: 18px

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 30px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const DayTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const DayTitle = styled.p`
  margin: 0 5px;
  padding: 0;
  font-size: 20px;
  color: ${colors.white}
`;

export const DailyMeals = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

//Meal
export const MealWrapper = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  position: relative;
`;

export const MealTitle = styled.div`
  color: ${colors.white};
  margin: 5px;
  width: 90%;
  font-size: 18px;
  text-align: center;
`;

export const MealImage = styled.img`
  width: 100%;
  max-width: 150px;
`;

export const StyledIngredient = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${colors.white};
`;

// tooltip
export const TooltipWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const DayInfoTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TooltipIcon = styled.img`
  width: 20px;
`;

export const MealInfoLabel = styled.p`
  color: ${({ color }) => !Utils.isNullOrUndefined(color) ? colors[color] : colors.white};
  font-size: 12px;
`;

export const NutrientLabel = styled.div<{ color?: string }>`
  color: ${colors.white};
  font-size: 12px;
  display: flex;
  align-items: center;
`;


// mealplan info
export const MealplanInfoWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
  padding: 10px;
  border-radius: 4px;
  background: ${colors.dark};
  display: flex;
  aling-items: center;
  justify-content: space-evenly;
`;

export const MealplanInfoLabels = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-evenly;
`;

export const MealplanInfoTitle = styled.p`
  text-align: center;
  margin: 5px;
  color: ${colors.white};
  font-size: 20px;
`;


export const MealplanInfoLabel = styled.p`
  text-align: center;
  margin: 2px;
  padding: 0;
  color: ${colors.white};
  font-size: 16px;
  font-style: italic;
`;

export const PieChartContainer = styled.div`
  width: 35%;
  display: flex;
  aling-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;