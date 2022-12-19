import React from 'react';

import './RemoveImagesBtn.css';

const RemoveImagesBtn = ({onClick}) => {

    return (
        <button className="remove-images-btn btn_icon btn_icon-small" onClick={()=>onClick()}>
            <div className="remove-images-btn__inner">
                <div className="remove-images-btn__icon">
                    <div className="remove-images-btn__icon__inner btn_icon__svg__container">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default RemoveImagesBtn;