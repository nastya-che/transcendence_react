import React, {Component} from 'react';
import SocialListComponent from '../CommonElements/SocialList/SocialListComponent';
import footer_logo from '../../assets/img/footer-logo.svg';
import FooterNavComponent from "../FooterNav/FooterNavComponent";


class FooterComponent extends Component{

    render(){

        return(
            <div className="wrapper">
                <div className="footer__wrap">
                    <div className="logo">
                        <a href="#">
                            <img src={footer_logo} alt=""/>
                        </a>
                    </div>
                    <FooterNavComponent />
                   <SocialListComponent />
                </div>
            </div>
        )
    }
}

export default FooterComponent;