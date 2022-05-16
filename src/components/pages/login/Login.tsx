import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../layout/components/PageTitle';
import Page from '../../layout/page-wrapper/Page';
import LoginForm from './LoginForm';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <PageTitle text={t('LOGIN')} />
      <LoginForm />
    </Page>
  );
};

export default Login;