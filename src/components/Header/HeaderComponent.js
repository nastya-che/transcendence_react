import React, {Component} from 'react';
import MainNav from './MainNav';
import headerLogo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';

class HeaderComponent extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="logo"><Link to="/"><img src={headerLogo} alt=""/></Link></div>
                <div className="box-main-nav">
                    <a href="#" className="button-nav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <MainNav />
                </div>
            </div>
        )
    }
}

export default HeaderComponent;