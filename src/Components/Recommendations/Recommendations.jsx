//Files
import React from 'react';
import './Recommendations.scss';

//Icons
import Prev from '../Lib/Svg/PrevNext_Svg/Prev';
import Next from '../Lib/Svg/PrevNext_Svg/Next';


function Recommendations() {

    const [video, setVideo] = React.useState([]);
    const [photoId, setPhotoId] = React.useState();
	const [isNextDisabled, setIsNextDisabled] = React.useState(false);


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((response)=> response.json()).then((data) => {
            const neededPhotos= data.slice(5, 8)
            setVideo(neededPhotos);
        });

        fetch('https://jsonplaceholder.typicode.com/photos/' +(photoId+1))
        .then((response) => response.json()).then((data) => {
            if(data.length) {
                setIsNextDisabled(false);
            }
            else {
                setIsNextDisabled(true);
            }
        });
    }, [photoId]);

    return <> 

    <div className="recommendations-wrapper">
        <div className="recommendations-heading__wrapper">
            <h2 className="recommendations__heading">Recommendations</h2>
        </div>

        <div className="recommendations-buttons-wrapper">
            <button 
            className="recommendations-button-prev"
            onClick={() => setPhotoId(photoId - 1)}
			disabled={photoId < 2 ? true : false}>
                <Prev />
            </button>
            <button 
            className="recommendations-button-next"
            onClick={() => setPhotoId(photoId + 1)} 
            disabled={isNextDisabled}>
                <Next />
            </button>
        </div>
    </div>

    <ul className="recommendations__list">
        {video.length > 0 && 
        video.map((photo) => (
            <li className="recommendations__item" key={photo.id}>
                <div className="recommendations-item__image-wrapper">
                    <img
                    className="recommendations-item__image" 
                    src={photo.url} 
                    alt="Video"
                    width='450'
                    height='250'  />

                    <div className="recommendations-item__image-time-wrapper">
                        <p className="recommendations-item__image-time">{photo.id}:{photo.albumId}0</p>
                    </div>
                
                </div>
                <h3 className="recommendations-item__image-heading">{photo.title.slice(0, 50)}</h3>
                <div className="recommendations-item__info-wrapper">
                    <span className="recommendations-item__info-span">80k views  ·  3 days ago</span>
                    <span className="recommendations-item__info-span">Dollie Blair</span>
                </div>
            </li>
        ))}
    </ul>
    
    </>
}

export default Recommendations;