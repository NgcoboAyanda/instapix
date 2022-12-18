import React from 'react';

import './SearchHistory.css';

const searchHistory = ({ history=[] }) => {

    const renderHistoyItemImages = (images) => {
        return images.map( (img, i) => {
            return (
                <img src={img.url} alt=""/>
            )
        })
    }

    const renderHistoryItems = () => {
        return history.map( (searchObj, i) => {
            return (
                <div className="search-history__item">
                    <div className="search-history__item__inner">
                        <div className="search-history__item__images">
                            <div className="search-history__item__images__inner">
                                {renderHistoyItemImages(searchObj.images)}
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

export default searchHistory;