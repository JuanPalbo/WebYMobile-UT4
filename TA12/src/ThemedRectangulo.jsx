import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import Translations from './Translations';

const ThemedRectangulo = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = Translations[language];

  return (
    <div className={`themed-rectangulo ${theme}`}>
      {t.tema} {theme === 'light' ? 'Claro' : 'Oscuro'}.
    </div>
  );
};

export default ThemedRectangulo;
