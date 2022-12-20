import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentImage, closeSlideshow, setCurrentImage } from '../../features/slideshow/slideshow';
import CloseBtn from './CloseBtn/CloseBtn';
import NextBtn from './NextBtn/NextBtn';
import PrevBtn from './PrevBtn/PrevBtn';

import './Slideshow.css';

const Slideshow = () => {
    const slideshowImages = useSelector(state => state.slideshow.images);
    const currentImage = useSelector(state => state.slideshow.currentImage);

    let [slideshowImageIndex, setSlideshowImageIndex] = useState(0);
    
    const dispatch = useDispatch();

    useEffect(
        () => {
            const{url} =currentImage;
            if(!url){
                dispatch(setCurrentImage({currentImage: slideshowImages[slideshowImageIndex]}))
            }
        },
        []
    )

    useEffect(
        () => {
            dispatch(clearCurrentImage())
            dispatch(setCurrentImage({currentImage: slideshowImages[slideshowImageIndex]}));
        },
        [slideshowImageIndex]
    )

    const goToPreviousImage = () => {
        if(slideshowImageIndex > 0){
            setSlideshowImageIndex(slideshowImageIndex-1);
        }
    }

    const goToNextImage = () => {
        if(slideshowImageIndex < slideshowImages.length - 1){
            setSlideshowImageIndex(slideshowImageIndex+1);
        }
    }

    const renderCurrentImage = () => {
        const {url=null} = currentImage;
        if(url){
            return (
                <img src={url} alt=""/>
            )
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshow__inner">
                <div className="slideshow__close-btn">
                    <div className="slideshow__close-btn__inner">
                        <CloseBtn
                            onClick={()=>dispatch( closeSlideshow())}
                        />
                    </div>
                </div>
                <div className="slideshow__slider">
                    <div className="slideshow__slider__inner">
                        <div className="slideshow__slider__image">
                            <div>
                                {renderCurrentImage()}
                            </div>
                        </div>
                        <div className="slideshow__slider__btn slideshow__slider__prev-btn">
                            <div>
                                <PrevBtn
                                    onClick={goToPreviousImage}
                                />
                            </div>
                        </div>
                        <div className="slideshow__slider__btn slideshow__slider__next-btn">
                            <div>
                                <NextBtn
                                    onClick={goToNextImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;