import React from 'react';

import './DownloadButton.css';

const DownloadButton = ({status, images, size='normal', variant="", label="aaaa"}) => {
    //There are two variants:
    //icon (a trasparent button that only shows the icon)
    //text-icon (shows both the text and the icon)

    const renderBtn = () => {
        return (
            <button className="download-btn__element">
                <div className="download-btn__element__inner">
                    <span className="download-btn__element__text">
                        <div className="download-btn__element__text__inner">
                            {label}
                        </div>
                    </span>
                    <div className="download-btn__element__icon">
                        <div className="download-btn__element__icon__inner">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/></svg>
                        </div>
                    </div>
                </div>
            </button>
        )
    }

    return (
        <div className={`download-btn download-btn_${variant} download-btn_size-${size}`} type="button">
            <div className="download-btn__inner">
                {renderBtn()}
            </div>
        </div>
    )
}

export default DownloadButton;