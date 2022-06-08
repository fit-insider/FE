import styled from 'styled-components';

export const AboutUsWrapper = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Paragraph = styled.p`
  margin: 10px auto;
  padding: 5px;
  width: 100%;
  text-align: justify;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
`;