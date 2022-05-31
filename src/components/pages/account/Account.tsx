import React from 'react';
import Page from '../../layout/page-wrapper/Page';
import EditInfoForm from './EditAccountForm';
import Mealplans from './Mealplans';
import PasswordChangeForm from './PasswordChangeForm';

const Account = () => {
  return (
    <Page>
      <EditInfoForm />
      <PasswordChangeForm />
      <Mealplans />
    </Page>
  );
};

export default Account;