import React from 'react';
import Logo from '../Logo/Logo';

import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__content">
                    <div className="header__content__inner">
                        <div className="header__content__logo">
                            <div className="header__content__logo__inner">
                                <Logo 
                                    isALink={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;