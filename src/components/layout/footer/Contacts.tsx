import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../shared/buttons/Button';
import TextArea from '../../shared/fields/TextArea';
import TextField from '../../shared/fields/TextField';
import CustomForm from '../../shared/forms/CustomForm';
import { ContactsHeader, StyledContacts } from './StyledComponents';

const Contacts = () => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    
  };

  return (
    <StyledContacts>
      <ContactsHeader>{t('CONTACT_US')}</ContactsHeader>

      <CustomForm width={60}>
        <TextField error={false} label={t('NAME')} placeholder={`${t('NAME')}...`} labelColor='light'/>
        <TextField error={false} label={t('EMAIL')} placeholder={`${t('EMAIL')}...`} labelColor='light'/>
        <TextArea label={t('YOUR_MESSAGE')} placeholder={`${t('YOUR_MESSAGE')}...`} labelColor='light'/>

        <Button onClick={handleSubmit}>{t('SEND_MESSAGE')}</Button>
      </CustomForm>

    </StyledContacts>
  );
};

export default Contacts;