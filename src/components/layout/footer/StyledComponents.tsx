import styled from 'styled-components';
import colors from '../../shared/theme/Colors';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: ${colors.dark};
`;

export const StyledContacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 20px;
  color: #ff8000;
`;

export const StyledContactsFormWrapper = styled.div`
  border: 2px solid blue;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ----------- Settings ----------- //
export const SettingsWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSettingsModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  width: 400px;
  outline: none;
  border-radius: 4px;
  background: ${colors.white};

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

// ----------- Language Selection ----------- //
export const StyledLanguageSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SettingsIconButton = styled.img`
  width: 30px;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray; /* IE 6-9 */
  transition: .1s;
  cursor: pointer;

  &:hover {
    -webkit-filter: none;
    -moz-filter: none;
    -ms-filter: none;
    filter: none;
   }
`;

export const LanguageLabel = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: ${colors.dark};
`;

export const LanguageOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageOption = styled.img<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin: 5px;
  cursor: pointer;
  border-radius: 4px;
  border: ${({ selected }) => selected === true ? `2px solid ${colors.primary}` : 'none'};
  opacity: ${({ selected }) => selected === false ? '0.6' : '1'};

  &:hover {
    opacity: 1;
  }
`;

// ----------- Links ----------- //
export const LinksWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  border-top: 3px solid ${colors.white};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinksGroupTitle = styled.h1`
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: 1.1rem;
`;

export const FooterLink = styled(Link)`
  font-size: 0.8rem;
  margin: 10px 0 10px 0;
  padding: 5px;
  color: #e1e2e2;
  text-decoration: none
`;

// ----------- Media ----------- //
export const MediaWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const MediaLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MediaImage = styled.img`
  width: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CopyrightText = styled.p`
  padding: 5px;
  text-align: center;
  color:#e1e2e2;
  font-size: 0.8rem;
  margin-bottom: 12px;
  margin-top: 10px;
`;