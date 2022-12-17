import React from 'react';

import './InputRange.css';

const InputRange = ( {name, value, label, minValue="1", maxValue="10", register} ) => {

    return (
        <div className="input-range">
            <div className="input-range__inner">
                <div className="input-range__label">
                    <div className="input-range__label__inner">
                        <div>
                            {label}
                        </div>
                    </div>
                </div>
                <div className="input-range__element">
                    <div className="input-range__element__inner">
                        <input type="range" min={minValue} max={maxValue} {...register(name, {required: true})} />
                    </div>
                </div>
                <div className="input-range__count">
                    <div className="input-range__count__inner">
                        <span className="input-range__count__number">
                            {value}
                        </span>
                        <span className="input-range__count__text">
                            image{`${value>1?'s':''}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputRange;