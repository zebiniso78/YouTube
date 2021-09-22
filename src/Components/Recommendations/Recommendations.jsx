//Files
import React from "react";
import "./Recommendations.scss";
import { NavLink } from "react-router-dom";

//Icons
import Prev from "../Lib/Svg/PrevNext_Svg/Prev";
import Next from "../Lib/Svg/PrevNext_Svg/Next";

function Recommendations() {
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((data) => {
        const neededPhotos = data.slice(5, 8);
        setVideo(neededPhotos);
      });
  }, []);

  return (
    <>
      <div className="recommendations-wrapper">
        <div className="recommendations-heading__wrapper">
          <h2 className="recommendations__heading">Recommendations</h2>
        </div>

        <div className="recommendations-buttons-wrapper">
          <button className="recommendations-button-prev">
            <Prev />
          </button>
          <button className="recommendations-button-next">
            <Next />
          </button>
        </div>
      </div>

      <ul className="recommendations__list">
        {video.length > 0 &&
          video.map((photo) => (
            <NavLink to={"/video/2"}>
              <li className="recommendations__item" key={photo.id}>
                <div className="recommendations-item__image-wrapper">
                  <img
                    className="recommendations-item__image"
                    src={photo.url}
                    alt="Video"
                    width="450"
                    height="250"
                  />

                  <div className="recommendations-item__image-time-wrapper">
                    <p className="recommendations-item__image-time">
                      {photo.id}:{photo.albumId}0
                    </p>
                  </div>
                </div>
                <h3 className="recommendations-item__image-heading">
                  {photo.title.slice(0, 40)}
                </h3>
                <div className="recommendations-item__info-wrapper">
                  <span className="recommendations-item__info-span">
                    80k views · 3 days ago
                  </span>
                  <span className="recommendations-item__info-span">
                    Dollie Blair
                  </span>
                </div>
              </li>
            </NavLink>
          ))}
      </ul>
    </>
  );
}

export default Recommendations;
