import React from 'react';

import './FileDownloadBtn.css';

const FileDownloadBtn = ({files=[], label='Download All Files', variant, download=null}) => {

    const downloadFiles = () => {
        if(download){
            download(files);
        }
    }

    return (
        <button className={`download-btn download-btn_variant-${variant}`} onClick={()=>downloadFiles()}>
            <div>
                <div className="download-btn__label">
                    <div>
                        <div className="download-btn__label__text">
                            {label}
                        </div>
                    </div>
                </div>
                <div className="download-btn__icon">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default FileDownloadBtn;