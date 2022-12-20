import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

import { clearCurrentImage, closeSlideshow, setCurrentImage } from '../../features/slideshow/slideshow';
import FileDownloadBtn from '../FileDownloadBtn/FileDownloadBtn';
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

    const renderSlideshowMiniImgGrid = () => {
        return slideshowImages.map( ({url}, i) => {
            const renderImageSelectedClass = () => {
                if(slideshowImageIndex === i){
                    return (
                        "slideshow__mini-img-grid__item_selected"
                    )
                }
            }

            const setCurrentImage = (index) => {
                setSlideshowImageIndex(index);
            }

            return (
                <div className={`slideshow__mini-img-grid__item ${renderImageSelectedClass()}`} key={i} onClick={()=>setCurrentImage(i)}>
                    <div>
                        <img src={url} alt="" />
                    </div>
                </div>
            )
        })
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
                {/* 
                <div className="slideshow__download-btn">
                    <div>
                        <FileDownloadBtn
                            files={createImageDownloadArray()}
                            label="Download All Images"
                            variant="borderless"
                            download={downloadImages}
                        />
                    </div>
                </div> */}
                <div className="slideshow__slider">
                    <div className="slideshow__slider__inner">
                        <div className="slideshow__slider__info">
                            <div>
                                <div className="slideshow__slider__info__index-count">
                                    <div>
                                        <span>
                                            Image
                                        </span>
                                        <span className="count">
                                            {slideshowImageIndex+1}
                                        </span>
                                        <span>
                                            out of
                                        </span>
                                        <span className="length">
                                            {slideshowImages.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div className="slideshow__slider__mini-img-grid">
                            <div>
                                {renderSlideshowMiniImgGrid()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;