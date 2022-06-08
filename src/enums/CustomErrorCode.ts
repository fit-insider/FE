enum CustomErrorCode {
  Server = 1,
  AddUser_Email = 100,
  AddUser_Username = 101,
  EditUser_Username = 201,
  EditUser_Password = 202,
  Login_Credentials = 300,

  InternalServerError = 500
}

export default CustomErrorCode;