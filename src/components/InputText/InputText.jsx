import React from "react";

import './InputText.css';

const InputText = ( { register, value="", name } ) => {

    return (
        <div className="input-text">
            <div className="input-text__inner">
                <div className="input-text__element">
                    <div className="input-text__element__inner">
                        <input 
                            type="text"
                            placeholder="e.g Future dystopian American city" 
                            className="input-text__element__box" 
                            {...register(name, { required: true })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputText;