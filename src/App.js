
import './App.css';
import {useTranslation} from "react-i18next";
import './i18n';
import {useState} from "react";

function App() {

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguageHandler = (lang) =>
  {
    setLanguage(lang)
    i18n.changeLanguage(`${lang}`)
  }
  return (
    <div className="App">
      <header className="App-header bg-cyan-950 text-white text-2xl flex justify-center items-center flex-col min-h-screen">

        <form className="my-16">
          <label>{t("choose your language")}</label>
          <select value={language}
                  onChange={(e)=>changeLanguageHandler(e.target.value)}
                  className="bg-inherit border-2 mx-4">
            <option value="en">{t('En')}</option>
            <option value="fr">{t('Fr')}</option>
            <option value="rus">{t('Rus')}</option>
          </select>
        </form>

        <div className="w-fit h-96 p-8 border-2 flex flex-col justify-around items-stretch">
          <h1 className="text-3xl text-center">{t('menu')}</h1>
          <div className="text-amber-600">
            <li>{t('pizza')}: <span>{t('currency')+t('8')}</span></li>
            <li>{t('pasta')}: <span>{t('currency')+t('5')}</span></li>
            <li>{t('kebab')}: <span>{t('currency')+t('10')}</span></li>
            <li>{t('Soup')}: <span>{t('currency')+t('3')}</span></li>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
