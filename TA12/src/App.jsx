import React, { useState } from 'react';
import UserContext from './UserContext';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import ShowUserName from './ShowUserName';
import ChangeUserName from './ChangeUserName';
import ChangeThemeButton from './ChangeThemeButton';
import ThemedRectangulo from './ThemedRectangulo';
import ShowLanguage from './ShowLanguage';
import ChangeLanguageButton from './ChangeLanguageButton';
import Translations from './Translations';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('Nombre Genérico');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  const t = Translations[language];

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
     <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`app ${theme}`}>
          <h1>TAs 12 a 15</h1>
          <ShowUserName />
          <ChangeUserName />
          <ChangeThemeButton />
          <ThemedRectangulo />
          <ShowLanguage />
          <ChangeLanguageButton />
        </div>
      </ThemeContext.Provider>
     </LanguageContext.Provider>
    </UserContext.Provider >
  );
};

export default App;
