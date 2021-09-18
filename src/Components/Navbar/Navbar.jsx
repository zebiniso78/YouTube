//Files
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

//Icons
import Menu from "../Lib/Svg/Navbar_Svg/Menu";
import Logo from "../Lib/Svg/Navbar_Svg/Logo";
import Search from "../Lib/Svg/Navbar_Svg/Search";
import UploadVideo from "../Lib/Svg/Navbar_Svg/UploadVideo";
import YouTubeApps from "../Lib/Svg/Navbar_Svg/YouTubeApps";
import Notifications from "../Lib/Svg/Navbar_Svg/Notifications";
import UserAvatar from "../../Assets/Images/Navbar_Img/UserAvatar.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
            <div className="nav__logo-wrapper">
            <button className="nav__menu-button" type="button">
                <Menu />
            </button>
            <a href="#link" className="nav__logo-link">
                <Logo />
            </a>
            </div>
            <form className="nav__search-form">
                <input type="text"
                className="nav__search-input"
                placeholder="Search" />
                <Search />
            </form>
            <ul className="nav__list">
                <li className="nav__item">
                    <button className="nav__icon-button">
                        <UploadVideo/>
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__icon-button">
                        <YouTubeApps/>
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__icon-button">
                        <Notifications/>
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__icon-button">
                        <img 
                        src={UserAvatar} 
                        alt="Avatar of User" 
                        className="nav__icon-photo" />
                    </button>
                </li>
            </ul>
      </nav>
    </>
  );
}

export default Navbar;
