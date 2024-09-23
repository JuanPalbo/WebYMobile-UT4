import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import Translations from './Translations';

const ChangeThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = Translations[language];
  return (
    <button onClick={toggleTheme}>
      {t.cambiarTema}
    </button>
  );
};

export default ChangeThemeButton;