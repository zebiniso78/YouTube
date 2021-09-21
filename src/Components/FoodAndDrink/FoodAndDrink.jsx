//Files
import React from "react";
import { NavLink } from "react-router-dom";
import "./FoodAndDrink.scss";

//Icons
import Prev from "../Lib/Svg/PrevNext_Svg/Prev";
import Next from "../Lib/Svg/PrevNext_Svg/Next";

//Images
import ChannelPhoto from "../../Assets/Images/Channel_Img/FoodandDrink.jpg";

function FoodAndDrink() {
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((data) => {
        const neededPhotos = data.slice(0, 5);
        setVideo(neededPhotos);
      });
  }, []);

  return (
    <>
      <div className="food-wrapper">
        <div className="food-heading__wrapper">
          <img
            className="food__image"
            src={ChannelPhoto}
            alt="Avatar of Channel"
          />
          <NavLink to="/channel">
          
            <h2 className="food__heading">Food & Drink</h2>{" "}
          </NavLink>
          <p className="food__paragraph">Recommended channel for you</p>
        </div>

        <div className="food-buttons-wrapper">
          <button className="food-button-subscribe">Subscribe 2.3M</button>

          <button className="food-button-prev">
            <Prev />
          </button>
          <button className="food-button-next">
            <Next />
          </button>
        </div>
      </div>

      <ul className="food__list">
        {video.length > 0 &&
          video.map((photo) => (
            <li className="food__item" key={photo.id}>
              <NavLink to="/video">
                <div className="food-item__image-wrapper">
                  <img
                    className="food-item__image"
                    src={photo.thumbnailUrl}
                    alt="Video"
                    width="250"
                    height="150"
                  />

                  <div className="food-item__image-time-wrapper">
                    <p className="food-item__image-time">
                      {photo.id}:{photo.albumId}0
                    </p>
                  </div>
                </div>
              </NavLink>
              <h3 className="food-item__image-heading">
                {photo.title.slice(0, 30)}
              </h3>
              <div className="food-item__info-wrapper">
                <span className="food-item__info-span">
                  80k views · 3 days ago
                </span>
                <span className="food-item__info-span">Dollie Blair</span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default FoodAndDrink;
