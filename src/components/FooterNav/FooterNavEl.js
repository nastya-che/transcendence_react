import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class FooterNavEl extends Component{

    render(){

        return(
            <li className="footer-nav__item">
                <Link to={this.props.navLink}
                      className="footer-nav__link">
                    {this.props.navName}
                </Link>
            </li>
        )
    }
}

export default FooterNavEl;