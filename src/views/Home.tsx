import './Home.css'
import ThemeProvider from '../providers/ThemeProvider';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import Theme from '../types/ThemeType';
import Navbar from '../components/NavbarComponent';
import Presentation from '../components/PresentationComponent';
import Socials from '../components/SocialsComponent';
import { useTranslation } from 'react-i18next';
import Language from '../types/LanguageType';

function Home() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    themeChange(theme === 'light' ? true : false)
  }, [theme]);

  const changeLanguage = () => {
    i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr');
    setLang(i18n.language as Language)
  }

  return (
    <ThemeProvider.Provider value={theme ? 'light' : 'dark'}>
      <div className='home' data-theme={theme}>
        <Navbar theme={theme} changeTheme={setTheme} changeLanguage={() => changeLanguage()} />
        <Presentation />
        <Socials />
        <div className='p-12 space-x-12 bg-base-200'>
          <iframe className="rounded-xl" src="https://open.spotify.com/embed/show/19tWdF770Vm8XuC939rJCW?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </ThemeProvider.Provider>
  )
}

export default Home;
