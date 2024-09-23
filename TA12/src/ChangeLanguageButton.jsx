import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import Translations from './Translations';

const ChangeLanguageButton = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext); 
  const t = Translations[language];
  return (
    <button onClick={toggleLanguage}>
      {t.cambiarIdioma}
    </button>
  );
};

export default ChangeLanguageButton;
