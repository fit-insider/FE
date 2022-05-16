import CustomErrorCode from '../../enums/CustomErrorCode';

const customErrorMapper = {
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
  },
  [CustomErrorCode.AddAccommodation_Accommodation]: {
    fieldName: 'name',
    translationKey: 'ACCOMMODATION_NAME_ALREADY_EXISTS'
  },
  [CustomErrorCode.EditReservation_AccommodationAlreadyBooked]: {
    fieldName: 'reservationDates',
    translationKey: 'ACCOMMODATION_ALREADY_BOOKED'
  },
  [CustomErrorCode.EditAccommodation_Name]: {
    fieldName: 'name',
    translationKey: 'ACCOMMODATION_NAME_ALREADY_EXISTS'
  },
  [CustomErrorCode.RemoveAccommodation]: {
    translationKey: 'ACCOMMODATION_CANNOT_BE_REMOVED'
  }
};

export default customErrorMapper;