import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import languages from '../../../locales/languages';
import { AppSetingsContext } from '../../context/AppSettingsContext';
import images from '../../shared/images/Images';
import { LanguageLabel, LanguageOption, LanguageOptions, StyledLanguageSelection } from './StyledComponents';

const LanguageSelection = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(AppSetingsContext);

  const onLanguageClick = (language) => {
    localStorage.setItem('lang', language.value);
    setLanguage(language.value);
    window.location.reload();
  };

  return (
    <StyledLanguageSelection>
      <LanguageLabel>{t('LANGUAGE')}</LanguageLabel>
      <LanguageOptions>
        {
          languages.map((lang, index) =>
            <LanguageOption
              onClick={() => { onLanguageClick(lang); }}
              key={index}
              src={images[lang.value]}
              selected={language === lang.value}
            />
          )}
      </LanguageOptions>
    </StyledLanguageSelection>
  );
};

export default LanguageSelection;