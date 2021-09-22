//Files
import './ChannelOwner.scss';

//Icons
import NotifButton from '../Lib/Svg/Navbar_Svg/Notif';
import SearchButton from '../Lib/Svg/Navbar_Svg/SearchButton';

//Images 
import SingleVideo from '../../Assets/Images/ChannelOwner_Img/SingleVideo.jpg';
import SmallVideo from '../../Assets/Images/ChannelOwner_Img/SmallVideo.jpg';
import ChannelOwnerPhoto from '../../Assets/Images/ChannelOwner_Img/ChannelOwner.jpg';
import ChannelOwnerPhoto1 from '../../Assets/Images/ChannelOwner_Img/ChannelOwner1.jpg';
import ChannelOwnerPhoto2 from '../../Assets/Images/ChannelOwner_Img/ChannelOwner2.jpg';
import ChannelOwnerPhoto3 from '../../Assets/Images/ChannelOwner_Img/ChannelOwner3.jpg';



function ChannelOwner() {
    return <> 
        <div className="channel-wrapper">

            <img
            className="single-video__img" 
            src={SingleVideo} 
            alt="Single Video"
            width='1300'
            height='250'  />
    

            <div className="channel__heading-wrapper">
                <div className="channel-info-wrapper">
                    <img
                    className="channel-owner__img" 
                    src={ChannelOwnerPhoto} 
                    alt="Owner Avatar"  />

                    <div className="info-wrapper">
                        <h3 className="channel__heading">Margaret Phelps</h3>
                        <p className="channel__paragraph">243K subscribers</p>
                    </div>
                </div>

                <div className="subscribe-button__wrapper">
                    <button className="notif">
                        <NotifButton />
                    </button>

                    <button className="subscribe">Subscribe 2.3M</button>
                </div>
            </div>

            <div className="channel__center-left">
                <nav className="channel__navbar">
                    <ul className="channel__list">
                        <li className="channel__item">
                            <a href="#link" className="channel__link" active='true'>Home</a>
                        </li>
                        <li className="channel__item">
                            <a href="#link" className="channel__link">Videos</a>
                        </li>
                        <li className="channel__item">
                            <a href="#link" className="channel__link">Playlists</a>
                        </li>
                        <li className="channel__item">
                            <a href="#link" className="channel__link dis">Channels</a>
                        </li>
                        <li className="channel__item">
                            <a href="#link" className="channel__link dis">Discussions</a>
                        </li>
                        <li className="channel__item">
                            <a href="#link" className="channel__link search">About</a>
                        </li>
                        <li className="channel__item">
                            <a href="#link" className="channel__link search"> <SearchButton /></a>
                        </li>
                    </ul>
                </nav>
                <div className="channel-video-info__wrapper">
                
                    <img
                    className="small-video__img" 
                    src={SmallVideo} 
                    alt="Small Video"  />
            
                    <div className="video-info__wrapper">
                        <h3 className="video__heading">Choosing The Best Audio Player Software For Your Computer</h3>
                        <p className="video__paragraph">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                        <p className="video__date-info">11k views  ·  6 months ago</p>
                    </div>
                </div>
            </div>

            <div className="channel__center-right">
                <h2 className="channel-owners__heading">Recommended channel</h2>
                <ul className="channel-owners__list">
                    <li className="channel-owners__item">
                        <img
                        className="channel-owners__img" 
                        src={ChannelOwnerPhoto1} 
                        alt="Owner Avatar"  />
                        <h3 className="channel-owners__name">Flora Benson</h3>
                    </li>
                    <li className="channel-owners__item">
                        <img
                        className="channel-owners__img" 
                        src={ChannelOwnerPhoto2} 
                        alt="Owner Avatar"  />
                        <h3 className="channel-owners__name">Violet Cobb</h3>
                    </li>
                    <li className="channel-owners__item">
                        <img
                        className="channel-owners__img" 
                        src={ChannelOwnerPhoto3} 
                        alt="Owner Avatar"  />
                        <h3 className="channel-owners__name">Phillip Mullins</h3>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default ChannelOwner; 