import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import Button from '../../shared/buttons/Button';
import TextField from '../../shared/fields/TextField';
import CustomForm from '../../shared/forms/CustomForm';
import { useApiError } from '../../hooks/UseApiError';
import { FormError, SuccessMessage } from '../../shared/forms/StylesComponents';
import Utils from '../../../utils/Utils';
import { UserContext } from '../../context/UserContext';
import { EditFormWrapper, FormTitle } from './StyledComponents';
import { ChangePasswordModel } from './ChangePasswordModel';

const PasswordChangeForm = () => {
  const { userId } = useContext(UserContext);
  const [changeButtonDisabled, setChangeButtonDisabled] = useState(false);
  const { t } = useTranslation();
  const { formLevelError, errors, setErrors, handleApiError } = useApiError();
  const [passwordChangeMessage, setPasswordChangeMessage] = useState('');
  const [credentials, setCredentials] = useState({
    OldPassword: '',
    NewPassword: '',
    ConfirmPassword: ''
  });

  const handleInputChanges = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [String(name).toLocaleLowerCase()]: undefined });
  };

  const handleEditUserInfo = () => {
    setChangeButtonDisabled(true);
    apiService.put<any, ChangePasswordModel>(ApiEndpoints.changePassword(userId), credentials)
      .then(() => {
        setChangeButtonDisabled(false);
        setPasswordChangeMessage(t('PASSWORD_CHANGED_SUCCESSFULLY'));
      })
      .catch((error) => {
        handleApiError(error);
        setChangeButtonDisabled(false);
      });
  };

  return (
    <EditFormWrapper>
      <CustomForm width={60}>
        
        <FormTitle>{t('CHANGE_PASSWORD')}</FormTitle>

        <FormError>{formLevelError}</FormError>
        <SuccessMessage>{passwordChangeMessage}</SuccessMessage>

        <TextField
          name='OldPassword'
          label={t('CURRENT_PASSWORD')}
          placeholder={`${t('CURRENT_PASSWORD')}...`}
          labelColor='light'
          type='password'
          value={credentials.OldPassword}
          onType={handleInputChanges}
          error={!Utils.isNullOrUndefined(errors?.oldpassword)}
          errorsList={errors?.oldpassword}
        />

        <TextField
          name='NewPassword'
          label={t('NEW_PASSWORD')}
          placeholder={`${t('NEW_PASSWORD')}...`}
          labelColor='light'
          type='password'
          value={credentials.NewPassword}
          onType={handleInputChanges}
          error={!Utils.isNullOrUndefined(errors?.newpassword)}
          errorsList={errors?.newpassword}
        />

        <TextField
          name='ConfirmPassword'
          label={t('RETYPE_NEW_PASSWORD')}
          placeholder={`${t('RETYPE_NEW_PASSWORD')}...`}
          labelColor='light'
          type='password'
          value={credentials.ConfirmPassword}
          onType={handleInputChanges}
          error={!Utils.isNullOrUndefined(errors?.confirmpassword)}
          errorsList={errors?.confirmpassword}
        />

        <Button onClick={handleEditUserInfo} disabled={changeButtonDisabled}>{t('CHANGE_PASSWORD')}</Button>
      </CustomForm>
    </EditFormWrapper>
  );
};

export default PasswordChangeForm;
