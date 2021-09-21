//Files
import "./SingleVideo.scss";

//Icons
import LikeHand from "../Lib/Svg/VideoPlayer_Svg/LikeHand";
import DislikeHand from "../Lib/Svg/VideoPlayer_Svg/DislikeHand";
import ShareVideo from "../Lib/Svg/VideoPlayer_Svg/ShareVideo";
import ThreeDots from "../Lib/Svg/VideoPlayer_Svg/ThreeDots";

//Images
import ChannelAvatar from "../../Assets/Images/Channel_Img/FoodandDrink.jpg";

function SingleVideo() {
  return (
    <>
      <div className="single-video__wrapper">
        <div className="play-video__wrapper">
          <iframe
            className="play-video__iframe"
            src="https://www.youtube.com/embed/ItoTvKPhgFk"
            title="YouTube video player"
            height="600"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="play-video__info-wrapper">
            <div>
              <h2 className="play-video__heading">
                Dude You Re Getting A Telescope
              </h2>
              <p className="play-video__paragraph">123k views</p>
            </div>
            <ul className="play-video__list">
              <li className="play-video__item">
                <button className="play-video__button">
                  <LikeHand />
                  123k
                </button>
              </li>

              <li className="play-video__item">
                <button className="play-video__button">
                  <DislikeHand />
                  425k
                </button>
              </li>

              <li className="play-video__item">
                <button className="play-video__button">
                  <ShareVideo />
                  Share
                </button>
              </li>

              <li className="play-video__item three-dots__item">
                <button className="play-video__button three-dots">
                  <ThreeDots />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="play-video-info__wrapper">
          <img
            className="play-video-channel__img"
            src={ChannelAvatar}
            alt="Avatar of Channel"
          />
          <div className="play-video-channel-info__wrapper">
            <h2 className="play-video-channel__heading">Food & Drink</h2>
            <p className="play-video-channel-published-date">
              Published on 14 Jun 2019
            </p>
            <p className="play-video__paragraph">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </p>
            <button className="play-video__button">Show more</button>
          </div>
          <button className="play-video-channel__button">Subscribe 2.3m</button>
        </div>
      </div>
    </>
  );
}

export default SingleVideo;
