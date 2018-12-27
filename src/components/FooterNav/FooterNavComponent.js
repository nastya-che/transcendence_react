import React, {Component} from 'react';
import FooterNavEl from './FooterNavEl';
import {FooterNav} from '../../DataController/DataController';

class FooterNavComponent extends Component{

    render(){

        let items = [];

        for (let i = 0; i < FooterNav.length; i++){
            let item = FooterNav[i];
            items.push(
                <FooterNavEl
                    key={`footer-nav-el-${i}`}
                    navName={item.navName}
                    navLink={item.navLink}
                />
            )
        }

        return(
            <ul className="footer-nav">
                {items}
            </ul>
        )
    }
}

export default FooterNavComponent;