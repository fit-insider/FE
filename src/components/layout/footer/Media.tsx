import React from 'react';
import { useTranslation } from 'react-i18next';
import images from '../../shared/images/Images';
import { CopyrightText, MediaImage, MediaLinksWrapper, MediaWrapper } from './StyledComponents';

const Media = () => {
  const { t } = useTranslation();

  return (
    <MediaWrapper>
      <MediaLinksWrapper>
        <MediaImage src={images.facebook} />
        <MediaImage src={images.instagram} />
        <MediaImage src={images.messenger} />
      </MediaLinksWrapper>
      <CopyrightText>© {new Date().getFullYear()} {t('COPYRIGHT')}</CopyrightText>
    </MediaWrapper >
  );
};


export default Media;