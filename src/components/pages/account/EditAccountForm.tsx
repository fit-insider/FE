import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import Button from '../../shared/buttons/Button';
import TextField from '../../shared/fields/TextField';
import CustomForm from '../../shared/forms/CustomForm';
import { useHistory } from 'react-router-dom';
import { useApiError } from '../../hooks/UseApiError';
import { FormError } from '../../shared/forms/StylesComponents';
import Utils from '../../../utils/Utils';
import { UserEditModel } from './UserEditModel';
import { UserContext } from '../../context/UserContext';
import { EditFormWrapper, FormTitle } from './StyledComponents';

const EditInfoForm = () => {
  const { userId, firstName, lastName, setFirstName, setLastName } = useContext(UserContext);
  const [editButtonDisabled, setEditButtonDisabled] = useState(false);
  const { t } = useTranslation();
  const { formLevelError, errors, setErrors, handleApiError } = useApiError();
  const [credentials, setCredentials] = useState({
    firstname: firstName,
    lastname: lastName
  });

  const handleInputChanges = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleEditUserInfo = () => {
    setEditButtonDisabled(true);
    apiService.put<any, UserEditModel>(ApiEndpoints.editUser(userId), credentials)
      .then(({ data }) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        localStorage.setItem('firstName', data.firstName);
        localStorage.setItem('lastName', data.lastName);
        setEditButtonDisabled(false);
      })
      .catch((error) => {
        handleApiError(error);
        setEditButtonDisabled(false);
      });
  };

  return (
    <EditFormWrapper>
      <CustomForm width={60}>
        <FormTitle>{t('EDIT_USER_INFORMATION')}</FormTitle>
        <FormError>{formLevelError}</FormError>

        <TextField
          name='firstname'
          label={t('FIRST_NAME')}
          placeholder={`${t('FIRST_NAME')}...`}
          labelColor='light'
          value={credentials.firstname}
          onType={handleInputChanges}
          error={!Utils.isNullOrUndefined(errors?.firstname)}
          errorsList={errors?.firstname}
        />

        <TextField
          name='lastname'
          label={t('LAST_NAME')}
          placeholder={`${t('LAST_NAME')}...`}
          labelColor='light'
          value={credentials.lastname}
          onType={handleInputChanges}
          error={!Utils.isNullOrUndefined(errors?.lastname)}
          errorsList={errors?.lastname}
        />

        <Button onClick={handleEditUserInfo} disabled={editButtonDisabled}>{t('EDIT')}</Button>
      </CustomForm>
    </EditFormWrapper>
  );
};

export default EditInfoForm;
