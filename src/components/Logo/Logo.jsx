import React from 'react';

import appLogo from './Logo.svg';

import './Logo.css';
import { useNavigate } from 'react-router-dom';

//Simple component that displays the app logo
const Logo = ({ isALink=false })=>{

    const navigate = useNavigate()

    const goToHomePage = ()=>{
        if(isALink){
            navigate('/')
        }
    }

    return(
        <div className="logo">
            <div className="logo__inner">
                <img src={appLogo} onClick={()=>goToHomePage()} alt="" srcSet="" />
            </div>
        </div>
    )
}

export default Logo;