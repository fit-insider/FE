import styled from 'styled-components';

export const ContactWrapper = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const IconLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconImage = styled.img`
  width: 30px;
  margin: 5px;
`;