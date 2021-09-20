//Files
import React from 'react';
import './ChannelOwnerVideos.scss';

//Icons
import Prev from '../Lib/Svg/PrevNext_Svg/Prev';
import Next from '../Lib/Svg/PrevNext_Svg/Next';

function ChannelOwnerVideos() {

    const [video, setVideo] = React.useState([]);
    const [photoId, setPhotoId] = React.useState();
	const [isNextDisabled, setIsNextDisabled] = React.useState(false);


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((response)=> response.json()).then((data) => {
            const neededPhotos= data.slice(0, 5)
            setVideo(neededPhotos);
        });

        fetch('https://jsonplaceholder.typicode.com/photos/' +(photoId+1))
        .then((response) => response.json()).then((data) => {

            if(data.length && data.id<11) {
                setIsNextDisabled(false);
            }
            else {
                setIsNextDisabled(true);
            }
        });
    }, [photoId]);

    return <> 

    <div className="owner-videos__wrapper">
        <div className="owner-videos-heading__wrapper">
            <h2 className="owner-videos__heading">Margaret Phelps videos</h2>
        </div>

        <div className="buttons-wrapper">
            <button 
            className="button-prev"
            onClick={() => setPhotoId(photoId - 1)}
			disabled={photoId < 11 ? true : false}>
                <Prev />
            </button>
            <button 
            className="button-next"
            onClick={() => setPhotoId(photoId + 1)} 
            disabled={isNextDisabled}>
                <Next />
            </button>
        </div>
    </div>

    <ul className="owner-videos__list">
        {video.length > 0 && 
        video.map((photo) => (
            <li className="owner-videos__item" key={photo.id}>
                <div className="item__image-wrapper">
                    <img
                    className="item__image" 
                    src={photo.thumbnailUrl} 
                    alt="Video"
                    width='250'
                    height='150'  />

                    <div className="item__image-time-wrapper">
                        <p className="item__image-time">{photo.id}:{photo.albumId}0</p>
                    </div>
                
                </div>
                <h3 className="item__image-heading">{photo.title.slice(0, 30)}...</h3>
                <div className="item__info-wrapper">
                    <span className="item__info-span">80k views  ·  3 days ago</span>
                    <span className="item__info-span">Dollie Blair</span>
                </div>
            </li>
        ))}
    </ul>
    
    </>
}

export default ChannelOwnerVideos;