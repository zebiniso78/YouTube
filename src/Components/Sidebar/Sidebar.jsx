//Files
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

//Icons
import Home from "../Lib/Svg/Sidebar_Svg/Home";
import Trending from "../Lib/Svg/Sidebar_Svg/Trending";
import Subscriptions from "../Lib/Svg/Sidebar_Svg/Subscriptions";

import Library from "../Lib/Svg/Sidebar_Svg/Library";
import History from "../Lib/Svg/Sidebar_Svg/History";
import WatchLater from "../Lib/Svg/Sidebar_Svg/WatchLater";
import Favourites from "../Lib/Svg/Sidebar_Svg/Favourites";
import LikedVideos from "../Lib/Svg/Sidebar_Svg/LikedVideos";
import Music from "../Lib/Svg/Sidebar_Svg/Music";
import Games from "../Lib/Svg/Sidebar_Svg/Games";
import ShowMore from "../Lib/Svg/Sidebar_Svg/ShowMore";
import Settings from "../Lib/Svg/Sidebar_Svg/Settings";

//Images
import Subscribe1 from "../../Assets/Images/Sidebar_Img/subscribe1.png";
import Subscribe2 from "../../Assets/Images/Sidebar_Img/subscribe2.png";
import Subscribe3 from "../../Assets/Images/Sidebar_Img/subscribe3.png";
import Subscribe4 from "../../Assets/Images/Sidebar_Img/subscribe4.png";
import Subscribe5 from "../../Assets/Images/Sidebar_Img/subscribe5.png";
import Subscribe6 from "../../Assets/Images/Sidebar_Img/subscribe6.png";


function Sidebar() {
  return (
    <>
    <nav className="sidebar">
      <ul className="sidebar__list-pages">
        <li className="sidebar__item-pages">
            <NavLink to='/' activeClassName='active' className="sidebar__link-pages">
              <Home />
              <p className="sidebar__paragraph-pages">Home</p>
            </NavLink>
        </li>
        <li className="sidebar__item-pages">
          <a href="#link" className="sidebar__link-pages">
            <Trending />
            <p className="sidebar__paragraph-pages">Trending</p>
          </a>
        </li>
        <li className="sidebar__item-pages">
          <a href="#link" className="sidebar__link-pages">
            <Subscriptions />
            <p className="sidebar__paragraph-pages">Subscriptions</p>
          </a>
        </li>
      </ul>

      <ul className="sidebar__list-menu">
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <Library />
            <p className="sidebar__paragraph-menu">Library</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <History />
            <p className="sidebar__paragraph-menu">History</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <WatchLater />
            <p className="sidebar__paragraph-menu">Watch later</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <Favourites />
            <p className="sidebar__paragraph-menu">Favourites</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <LikedVideos />
            <p className="sidebar__paragraph-menu">Liked videos</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <Music />
            <p className="sidebar__paragraph-menu">Music</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <Games />
            <p className="sidebar__paragraph-menu">Games</p>
          </a>
        </li>
        <li className="sidebar__item-menu">
          <a href="#link" className="sidebar__link-menu">
            <ShowMore />
            <p className="sidebar__paragraph-menu">Show more</p>
          </a>
        </li>
      </ul>

      <div className="subscriptions__wrapper">
        <h2 className="subscriptions__heading">Subscriptions</h2>
        <ul className="sidebar__list-subscriptions">
          <li className="sidebar__item-subscriptions">
          <NavLink to='/channel' className="sidebar__link-subscriptions">
              <img
                className="sidebar__img-subscriptions"
                src={Subscribe1}
                alt="Avatar"
              />
              <p className="sidebar__paragraph-subscriptions">
                Gussie Singleton
              </p>
            </NavLink>
          </li>
          <li className="sidebar__item-subscriptions">
            <NavLink to='/channel' className="sidebar__link-subscriptions">
              <img
                className="sidebar__img-subscriptions"
                src={Subscribe2}
                alt="Avatar"
              />
              <p className="sidebar__paragraph-subscriptions">Nora Francis</p>
            </NavLink>
          </li>
          <li className="sidebar__item-subscriptions">
            <NavLink to='/channel' className="sidebar__link-subscriptions">
              <img
                className="sidebar__img-subscriptions"
                src={Subscribe3}
                alt="Avatar"
              />
              <p className="sidebar__paragraph-subscriptions">Belle Briggs</p>
            </NavLink>
          </li>
          <li className="sidebar__item-subscriptions">
            <NavLink to='/channel' className="sidebar__link-subscriptions">
              <img
                className="sidebar__img-subscriptions"
                src={Subscribe4}
                alt="Avatar"
              />
              <p className="sidebar__paragraph-subscriptions">Eunice Cortez</p>
            </NavLink>
          </li>
          <li className="sidebar__item-subscriptions">
          <NavLink to='/channel' className="sidebar__link-subscriptions">
              <img
                className="sidebar__img-subscriptions"
                src={Subscribe5}
                alt="Avatar"
              />
              <p className="sidebar__paragraph-subscriptions">Emma Hanson</p>
            </NavLink>
          </li>
          <li className="sidebar__item-subscriptions">
          <NavLink to='/channel' className="sidebar__link-subscriptions">
              <img
                className="sidebar__img-subscriptions"
                src={Subscribe6}
                alt="Avatar"
              />
              <p className="sidebar__paragraph-subscriptions">Leah Berry</p>
            </NavLink>
          </li>
        </ul>

        <div className="sidebar__settings-wrapper">
          <Settings />
          <p className="settings-wrapper__paragraph">Settings</p>
        </div>
      </div>
    </nav>

   

    </>
  );
}

export default Sidebar;
