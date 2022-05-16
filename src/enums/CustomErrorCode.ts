enum CustomErrorCode {
  Server = 1,
  AddUser_Email = 100,
  AddUser_Username = 101,
  EditUser_Username = 201,
  EditUser_Password = 202,
  Login_Credentials = 300,
  AddAccommodation_Accommodation = 501,
  EditReservation_AccommodationAlreadyBooked = 1002,
  EditAccommodation_Name = 1302,
  RemoveAccommodation = 1800
}

export default CustomErrorCode;