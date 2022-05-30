import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import Button from '../../shared/buttons/Button';
import Checkbox from '../../shared/fields/Checkbox';
import TextField from '../../shared/fields/TextField';
import CustomForm from '../../shared/forms/CustomForm';
import { RegisterOptionsWrapper, StyledLink, StyledNewMemberText } from './StyledComponents';
import { UserRegisterModel } from './UserRegisterModel';
import { useHistory } from 'react-router-dom';
import { useApiError } from '../../hooks/UseApiError';
import { FormError } from '../../shared/forms/StylesComponents';
import Utils from '../../../utils/Utils';

const RegisterOptions = () => {
  const { t } = useTranslation();
  return (
    <RegisterOptionsWrapper>
      <Checkbox label={t('ACCEPT_TERMS_AND_CONDITIONS')} labelColor='dark' />
      <span />
    </RegisterOptionsWrapper>
  );
};

const RegisterForm = () => {
  const history = useHistory();
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(false);
  const { t } = useTranslation();
  const { formLevelError, errors, setErrors, handleApiError } = useApiError();
  const [credentials, setCredentials] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleInputChanges = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleRegister = () => {
    setIsRegisterButtonDisabled(true);
    apiService.post<any, UserRegisterModel>(ApiEndpoints.registerUser, credentials)
      .then(() => {
        history.push('/login');
      })
      .catch((error) => {
        handleApiError(error);
        setIsRegisterButtonDisabled(false);
      });
  };

  return (
    <CustomForm width={60}>

      <FormError>{formLevelError}</FormError>

      <TextField
        name='firstname'
        label={t('FIRST_NAME')}
        placeholder={`${t('FIRST_NAME')}...`}
        labelColor='dark'
        onType={handleInputChanges}
        error={!Utils.isNullOrUndefined(errors?.firstname)}
        errorsList={errors?.firstname}
      />

      <TextField
        name='lastname'
        label={t('LAST_NAME')}
        placeholder={`${t('LAST_NAME')}...`}
        labelColor='dark'
        onType={handleInputChanges}
        error={!Utils.isNullOrUndefined(errors?.lastname)}
        errorsList={errors?.lastname}
      />

      <TextField
        name='email'
        label={t('EMAIL')}
        placeholder={`${t('EMAIL')}...`}
        labelColor='dark'
        onType={handleInputChanges}
        error={!Utils.isNullOrUndefined(errors?.email)}
        errorsList={errors?.email}
      />

      <TextField
        name='password'
        type='password'
        label={t('PASSWORD')}
        placeholder={`${t('PASSWORD')}...`}
        labelColor='dark'
        onType={handleInputChanges}
        error={!Utils.isNullOrUndefined(errors?.password)}
        errorsList={errors?.password}
      />

      <RegisterOptions />

      <Button onClick={handleRegister} disabled={isRegisterButtonDisabled}>{t('REGISTER')}</Button>

      <StyledNewMemberText>{t('ALREADY_HAVE_AN_ACCOUNT')}? <StyledLink to='/login'>{t('LOGIN_HERE')}</StyledLink>!</StyledNewMemberText>
    </CustomForm>
  );
};

export default RegisterForm;
