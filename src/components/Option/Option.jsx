import React from 'react';

import './Option.css';

const Option = ( {label, options, value, setValue} ) => {

    const renderSelectedItemClass = (option) => {
        if(option === value){
            return "option__list__item_selected"
        }
    }

    const renderOptionList = () => {
        return options.map( (o, i) => {
            return (
                <div className={`option__list__item ${renderSelectedItemClass(o)}`} key={i} onClick={()=>setValue(o)}>
                    <div className="option__list__item__inner">
                        <div>
                            {o}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="option">
            <div className="option__inner">
                <div className="option__label">
                    <div className="option__label__inner">
                        <div>
                            {label}
                        </div>
                    </div>
                </div>
                <div className="option__list">
                    <div className="option__list__inner">
                        {renderOptionList()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Option;