import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../layout/components/PageTitle';
import Page from '../../layout/page-wrapper/Page';
import RegisterForm from './RegisterForm';

const Register = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <PageTitle text={t('REGISTER')} />
      <RegisterForm />
    </Page>
  );
};

export default Register;