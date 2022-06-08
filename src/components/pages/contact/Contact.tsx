import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../layout/components/PageTitle';
import Page from '../../layout/page-wrapper/Page';
import images from '../../shared/images/Images';
import Link from '../../shared/routes/Link';
import colors from '../../shared/theme/Colors';
import { ContactWrapper, IconImage, IconLabel } from './StyledComponents';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <PageTitle text={t('CONTACT')} />
      
      <ContactWrapper>
        <IconLabel>
          <IconImage src={images.pin} />
          <p>Str. Zorilor, Nr. 38, Cluj-Napoca, Cluj, România</p>
        </IconLabel>

        <IconLabel>
          <IconImage src={images.email} />
          <p>contact@fit-insider.com</p>
        </IconLabel>

        <IconLabel>
          <IconImage src={images.phone} />
          <p>+40 746 787 234</p>
        </IconLabel>

        <IconLabel>
          <IconImage src={images.facebook_black} />
          <Link to='https://www.facebook.com/Fit-Insider-104093838382570' color={colors.dark}>Fit Insider</Link>
        </IconLabel>

        <IconLabel>
          <IconImage src={images.instagram_black} />
          <Link to='https://www.instagram.com/fitinsideronline/' color={colors.dark}>fitinsideronline</Link>
        </IconLabel>
        
      </ContactWrapper>
    </Page>
  );
};

export default Contact;