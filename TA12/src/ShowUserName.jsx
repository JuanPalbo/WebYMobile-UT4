import React, { useContext } from 'react';
import UserContext from './UserContext';
import LanguageContext from './LanguageContext';
import Translations from './Translations';

const ShowUserName = () => {
  const { userName } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const t = Translations[language];

  return (
    <div>
      <p>{t.usuario}: {userName}</p>
    </div>
  );
};

export default ShowUserName;
