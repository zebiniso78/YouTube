//Files
import React from "react";
import "./SideVideos.scss";
import { NavLink } from "react-router-dom";

function SideVideos() {
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((data) => {
        const neededPhotos = data.slice(0, 3);
        setVideo(neededPhotos);
      });
  }, []);

  return (
    <>
      <div className="sidevideos">
        <div className="sidevideos__wrapper">
          <h2 className="sidevideos__heading">Next</h2>

          <div className="sidevideos-toogle-wrapper">
            <p className="sidevideos-toogle-text">Autoplay</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <ul className="sidevideos__list">
          {video.length > 0 &&
            video.map((photo) => (
              <li className="sidevideos__item" key={photo.id}>
                <div className="sidevideos-item__image-wrapper">
                  <NavLink to="/video">
                    <img
                      className="sidevideos-item__image"
                      src={photo.thumbnailUrl}
                      alt="Video"
                      width="250"
                      height="200"
                    />
                  </NavLink>

                  <div className="sidevideos-item__image-time-wrapper">
                    <p className="sidevideos-item__image-time">
                      {photo.id}:{photo.albumId}0
                    </p>
                  </div>
                </div>
                <h3 className="sidevideos-item__image-heading">
                  {photo.title.slice(0, 24)}...
                </h3>
                <div className="sidevideos-item__info-wrapper">
                  <span className="sidevideos-item__info-span">
                    80k views · 3 days ago
                  </span>
                  <span className="sidevideos-item__info-span">
                    Dollie Blair
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default SideVideos;
