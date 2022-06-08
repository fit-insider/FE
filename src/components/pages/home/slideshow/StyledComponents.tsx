import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colors from '../../../shared/theme/Colors';

const zoomOut = keyframes`
  100% { width: 100%; }
`;

const slide1 = keyframes`
  0% { visibility: visible; }
  25% { visibility: hidden; }
  50% { visibility: hidden; }
  75% { visibility: hidden; }
  100% { visibility: visible; }
`;

const slide2 = keyframes`
  0% { visibility: hidden; }
  25% { visibility: hidden; }
  50% { visibility: visible; }
  75% { visibility: hidden; }
  100% { visibility: hidden; }
`;

const slide3 = keyframes`
  0% { visibility: hidden; }
  25% { visibility: hidden; }
  50% { visibility: hidden; }
  75% { visibility: visible; }
  100% { visibility: hidden; }
`;

const slide4 = keyframes`
  0% { visibility: hidden; }
  25% { visibility: hidden; }
  50% { visibility: hidden; }
  75% { visibility: hidden; }
  100% { visibility: visible; }
`;

const textup = keyframes`
  10% { transform: translateY(0px); }
  100% { transform: translateY(0px); }
`;

export const SlideshowWrapper = styled.div`
  position: relative;
  height: 70vh;
  min-height: 70vh;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledBanner = styled.div`
  height: 100vh;
  width: 100%;
  min-width: 280px;
  position: absolute;
  overflow: hidden;
`;

export const StyledBanner1 = styled(StyledBanner)`
  animation: ${slide1} 20s linear infinite;
`;

export const StyledBanner2 = styled(StyledBanner)`
  animation: ${slide2} 20s linear infinite;
`;

export const StyledBanner3 = styled(StyledBanner)`
  animation: ${slide3} 20s linear infinite;
`;

export const StyledBanner4 = styled(StyledBanner)`
  animation: ${slide4} 20s linear infinite;
`;

export const ShowcaseImage = styled.img`
  background-position: center;
  width: 120%;
  position: absolute;
  height: 80%;
  animation: ${zoomOut} 5s linear infinite;
  object-fit: cover;
`;

export const StyledTextBox = styled.div<{delay?: number}>`
  width: 50%;
  top: 5%;
  position: absolute;
  left: 10%;
  color: ${colors.white};
  animation: ${textup} 20s linear infinite;
  transform: translateY(70px);
  text-align: center;  
  animation-delay: ${({ delay }) => delay}s;

  @media screen and (max-width: 992px) {
    transform: translateY(60px);
    width: 90%;
    left: 5%;
  }
`;

export const HeaderText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;

  @media screen and (max-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.7rem;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }
`;

export const ShowcaseSpan = styled.span`
  background: ${colors.primary};
  height: 2px;
  width: 80%;
  position: absolute;
  left: 10%;
`;