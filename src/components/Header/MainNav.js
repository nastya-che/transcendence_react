import React, {Component} from 'react';
import {MainNav} from "../../DataController/DataController";
import NavItem from './NavItem';


class HeaderComponent extends Component{

    render(){

        let items = [];

        for (let i = 0; i < MainNav.length; i++){
            let item = MainNav[i];
            items.push(
                <NavItem
                    key={`nav-item${i}`}
                    index={i}
                    itemName={item.itemName}
                    itemLink={item.itemLink}
                />
            )
        }

        return(
            <ul className="main-nav">
                {items}
            </ul>
        )
    }
}

export default HeaderComponent;