import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromSearchHistory } from '../../features/images/imagesSlice';
import RemoveImagesBtn from '../RemoveImagesBtn/RemoveImagesBtn';
import ViewImagesBtn from '../ViewImagesBtn/ViewImagesBtn';

import './SearchHistory.css';

const SearchHistory = ({ history=[] }) => {

    const dispatch = useDispatch();

    const renderHistoyItemImages = (images) => {
        return images.map( (img, i) => {
            return (
                <img src={img.url} alt=""/>
            )
        })
    }

    const openImageGallery = id => {
        const images = history.filter(searchObj => searchObj.id === id)[0].images;
        console.log(images);
    }

    const renderHistoryItems = () => {
        let theSearchHistory = [...history];
        theSearchHistory.pop();
        const historyReversed = [...theSearchHistory].reverse();
        return historyReversed.map( (searchObj, i) => {
            return (
                <div className="search-history__item">
                    <div className="search-history__item__inner">
                        <div className="search-history__item__images">
                            <div className="search-history__item__images__inner">
                                {renderHistoyItemImages(searchObj.images)}
                            </div>
                        </div>
                        <div className="search-history__item__buttons">
                            <div className="search-history__item__buttons__inner">
                                <ViewImagesBtn
                                    onClick={()=> openImageGallery(searchObj.id)}
                                />
                                <RemoveImagesBtn
                                    onClick={()=>dispatch(removeFromSearchHistory(searchObj.id))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="search-history">
            <div className="search-history__inner">
                {renderHistoryItems()}
            </div>
        </div>
    )
}

export default SearchHistory;