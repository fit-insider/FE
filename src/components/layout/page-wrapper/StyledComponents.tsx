import styled from 'styled-components';
import colors from '../../shared/theme/Colors';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow-y: auto;
  background: linear-gradient(120deg, ${colors.gradientStart}, ${colors.gradientEnd});
`;