import React from 'react';
import Contacts from './Contacts';
import Links from './Links';
import Media from './Media';
import Settings from './Settings';
import { FooterContainer } from './StyledComponents';

const Footer = () => {
  
  return (
    <FooterContainer>
      <Contacts />
      <Links />
      <Media />
      <Settings />
    </FooterContainer>
  );
};

export default Footer;