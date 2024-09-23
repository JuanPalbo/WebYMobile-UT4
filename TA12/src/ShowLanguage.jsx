import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';
import Translations from './Translations';

const ShowLanguage = () => {
  const { language } = useContext(LanguageContext); 
  const { theme } = useContext(ThemeContext);
  const t = Translations[language];
  return (
    <div className={`themed-rectangulo ${theme}`}>
      <p>{t.idioma}: {language === 'es' ? 'Español' : 'English'}</p> 
    </div>
  );
};

export default ShowLanguage;
