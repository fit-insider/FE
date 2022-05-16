import React, { createContext, useEffect, useState } from 'react';

interface AppSettingsModel {
  language: string
  setLanguage: (value: string) => void
}

export const AppSetingsContext = createContext<AppSettingsModel>({ language: '', setLanguage: null });

export const AppSettingsContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    if (localStorage.getItem('lang') === null || localStorage.getItem('lang') === undefined) {
      localStorage.setItem('lang', 'en');
    }
  });

  const data = {
    language: language,
    setLanguage: setLanguage
  };

  return <AppSetingsContext.Provider value={data}>
    {children}
  </AppSetingsContext.Provider>;
};