import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import Utils from '../../../utils/Utils';
import { UserContext } from '../../context/UserContext';
import { useApiError } from '../../hooks/UseApiError';
import Button from '../../shared/buttons/Button';
import TextField from '../../shared/fields/TextField';
import CustomForm from '../../shared/forms/CustomForm';
import { FormError } from '../../shared/forms/StylesComponents';
import { StyledLink, StyledNewMemberText } from './StyledComponents';
import { UserInfo } from './UserInfo';
import { UserLoginModel } from './UserLoginModel';

const LoginForm = () => {
  const { setUserId, setFirstName, setLastName } = useContext(UserContext);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
  const { t } = useTranslation();
  const [credentials, setCredentials] = useState({ identifier: '', password: '' });
  const { formLevelError, errors, handleApiError } = useApiError();

  const handleInputChanges = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    setIsLoginButtonDisabled(true);
    apiService.post<UserInfo, UserLoginModel>(ApiEndpoints.loginUser, credentials)
      .then(({ data: { userId, firstName, lastName } }) => {
        localStorage.setItem('userId', userId);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        setUserId(userId);
        setFirstName(firstName);
        setLastName(lastName);
      })
      .catch((error) => {
        handleApiError(error);
        setIsLoginButtonDisabled(false);
      });
  };

  return (
    <CustomForm width={60}>
      <FormError>{formLevelError}</FormError>
      <TextField
        name='identifier'
        label={t('EMAIL')}
        placeholder={`${t('EMAIL')}...`}
        labelColor='dark'
        error={!Utils.isNullOrUndefined(errors)}
        errorsList={[errors?.identifier]}
        onType={handleInputChanges}
      />

      <TextField
        name='password'
        type='password'
        label={t('PASSWORD')}
        placeholder={`${t('PASSWORD')}...`}
        labelColor='dark'
        error={!Utils.isNullOrUndefined(errors)}
        errorsList={[errors?.password]}
        onType={handleInputChanges}
      />
      
      <Button htmlType='submit' onClick={handleLogin} disabled={isLoginButtonDisabled}>{t('LOGIN')}</Button>

      <StyledNewMemberText>{t('NEW_MEMBER')}? <StyledLink to='/register'>{t('REGISTER_HERE')}</StyledLink>!</StyledNewMemberText>
    </CustomForm>
  );
};

export default LoginForm;
