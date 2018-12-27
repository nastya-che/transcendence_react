import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavItem extends Component{

    constructor(){
        super();
        this.liItem = React.createRef();
    }

    componentDidMount(){
        let activeCl = 'active';
        this.props.index === 0 && this.liItem.current.classList.add(activeCl);
    }

    handleClick(){
        let activeCl = 'active';
        let navItems = document.getElementsByClassName('main-nav__item');

        for (let i = 0; i < navItems.length; i++){
            navItems[i].classList.remove(activeCl);
        }

        this.liItem.current.classList.add(activeCl);

    }

    render(){
        return(
            <li className="main-nav__item"
                ref={this.liItem}
                onClick={this.handleClick.bind(this)}
            >
                {this.props.itemName === 'Blog' ?
                    <a href={this.props.itemLink}
                    className={'main-nav__link'}>
                        {this.props.itemName}
                    </a> :

                    <Link to={this.props.itemLink}
                          disabled={this.props.itemLink.length}
                       className="main-nav__link">
                        {this.props.itemName}
                    </Link>
                }
            </li>
        )
    }

}

export default NavItem;