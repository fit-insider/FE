import React, { createContext, useState } from 'react';

interface UserContextModel {
  userId: string;
  firstName: string;
  lastName: string;
  setUserId: (value: string) => void;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContextModel>({ userId: '', firstName: '', lastName: '', setUserId: null, setFirstName: null, setLastName: null, handleLogout: null });

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName'));
  const [lastName, setLastName] = useState(localStorage.getItem('lastName'));

  const handleLogout = () => {
    setUserId(null);
    setFirstName(null);
    setLastName(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
  };

  const data = {
    userId: userId,
    setUserId: setUserId,
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    handleLogout: handleLogout
  };

  return <UserContext.Provider value={data}>
    {children}
  </UserContext.Provider>;
};