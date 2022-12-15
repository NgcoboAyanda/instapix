import React from 'react';

import './Button.css';

const Button = ( {variant='filled', text='', size='normal', type='submit', onClick=null} ) => {

    const clickBtn = () => {
        if (onClick !== null){
            onClick();
        }
    }

    return (
        <button type={type} onClick={()=>clickBtn()} className={`button button_${variant} button_size-${size}`}>
            <div className={`button__inner button_${variant}__inner`}>
                <div className={`button__text button_${variant}__text`}>
                    <div className={`button__text__inner button_${variant}__text__inner`}>
                        <div>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Button;