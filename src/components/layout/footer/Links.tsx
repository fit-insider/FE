import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterLink, LinksGroup, LinksGroupTitle, LinksWrapper } from './StyledComponents';

const Links = () => {
  const { t } = useTranslation();

  return (
    <LinksWrapper>
      <LinksGroup>
        <LinksGroupTitle>{t('OUR_BRAND')}</LinksGroupTitle>
        <FooterLink to='/about-us'>{t('ABOUT_US')}</FooterLink>
        <FooterLink to='/register'>{t('BECOME_A_MEMBER')}</FooterLink>
        <FooterLink to='#'>{t('NEWS')}</FooterLink>
      </LinksGroup>

      <LinksGroup>
        <LinksGroupTitle>{t('CUSTOMER_CARE')}</LinksGroupTitle>
        <FooterLink to='#'>{t('PAYMENT_METHODS')}</FooterLink>
        <FooterLink to='#'>{t('GUIDES')}</FooterLink>
        <FooterLink to='#'>{t('FAQ')}</FooterLink>
      </LinksGroup>

      <LinksGroup>
        <LinksGroupTitle>{t('COMPANY')}</LinksGroupTitle>
        <FooterLink to='#'>{t('TERMS_AND_CONDITIONS')}</FooterLink>
        <FooterLink to='#'>{t('PRIVACY_POLICY')}</FooterLink>
        <FooterLink to='#'>{t('COOKIES')}</FooterLink>
        <FooterLink to='#'>{t('DISCLAIMER')}</FooterLink>
      </LinksGroup>
    </LinksWrapper>
  );
};

export default Links;