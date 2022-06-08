import CustomErrorCode from '../../enums/CustomErrorCode';

const customErrorMapper = {
  [CustomErrorCode.InternalServerError]: {
    translationKey: 'INTERNAL_SERVER_ERROR'
  },
  [CustomErrorCode.AddUser_Email]: {
    fieldName: 'email',
    translationKey: 'EMAIL_SHOULD_BE_UNIQUE'
  },
  [CustomErrorCode.AddUser_Username]: {
    fieldName: 'username',
    translationKey: 'USERNAME_SHOULD_BE_UNIQUE'
  },
  [CustomErrorCode.Login_Credentials]: {
    translationKey: 'WRONG_CREDENTIALS'
  },
  [CustomErrorCode.EditUser_Username]: {
    fieldName: 'username',
    translationKey: 'USERNAME_ALREADY_EXISTS'
  },
  [CustomErrorCode.EditUser_Password]: {
    fieldName: 'oldPassword',
    translationKey: 'OLD_PASSWORD_MUST_MATCH_EXISTING'
  }
};

export default customErrorMapper;