import React, { useEffect } from 'react';

import './Error.css';

const Error = ( {errorObj:{code=null, message=null}, clearError=null} ) => {

    useEffect(
        () => {
            setTimeout(
                () => {
                    if(clearError){
                        clearError();
                    }   
                },
                5000
            )
        },
        []
    )

    const renderErrorCode = () => {
        if(code){
            return(
                <span className="error__code">
                    <div className="error__code__inner">
                        {code}
                    </div>
                </span>
            )
        }
    }

    return (
        <div className="error">
            <div className="error__inner">
                {renderErrorCode()}
                <span className="error__message">
                    <div className="error__message__inner">
                        {message}
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Error;