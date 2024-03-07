import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import Theme from "../types/ThemeType";
import LanguageIcon from "../icons/LanguageIcon";

interface NavbarProps {
  theme: Theme,
  changeTheme: React.Dispatch<React.SetStateAction<Theme>>,
  changeLanguage: () => void,
}

function NavbarComponent(props: NavbarProps) {
  return (
    <div className="navbar bg-base-200 rounded-t-xl">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">GNMS Portfolio</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost" onClick={() => props.changeLanguage()}>
          <LanguageIcon />
        </button>
        <button className="btn btn-ghost">
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="synthwave" onChange={() => props.changeTheme(props.theme === 'light' ? 'dark' : 'light')} />
            <SunIcon className="swap-on fill-current" />
            <MoonIcon className="swap-off fill-current" />
          </label>
        </button>
      </div>
    </div>
  )
}

export default NavbarComponent;