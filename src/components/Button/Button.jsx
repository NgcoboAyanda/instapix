import React from 'react';

import './Button.css';

const Button = ( {variant='filled', text='', size='normal', type='submit', onClick=null, loader=false, status=null} ) => {

    const renderLoader = () => {
        if(loader && status && status === 'loading'){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" ><circle cx="50" cy="50" r="32" strokeWidth="5" stroke="#ffffff" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round" transform="matrix(1,0,0,1,0,0)" ></circle></svg>
            )
        }
        else{
            return text
        }
    }

    return (
        <button type={type} onClick={()=>console.log('a')} className={`button button_${variant} button_size-${size}`}>
            <div className={`button__inner button_${variant}__inner`}>
                <div className={`button__text button_${variant}__text`}>
                    <div className={`button__text__inner button_${variant}__text__inner`}>
                        <div>
                            {renderLoader()}
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Button;