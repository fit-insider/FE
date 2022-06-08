import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../layout/components/PageTitle';
import Page from '../../layout/page-wrapper/Page';
import images from '../../shared/images/Images';
import { AboutUsWrapper, Paragraph, StyledImage } from './StyledComponents';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <PageTitle text={t('ABOUT_US')} />

      <AboutUsWrapper>
        <Paragraph>{t('ABOUT_US_P_1')}</Paragraph>
        <StyledImage src={images.aboutUs} alt='' />
        <Paragraph>{t('ABOUT_US_P_2')}</Paragraph>
      </AboutUsWrapper>
    </Page>
  );
};

export default AboutUs;