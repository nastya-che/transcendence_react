import React, {Component} from 'react';

class SideBarComponent extends Component{

    constructor(){
        super();
        this.shadow = React.createRef();
    }

    onBlurFunc(){
        let activeCl = 'active';
        let elCl = this.shadow.current.classList;
        elCl.contains(activeCl) ? elCl.remove(activeCl) : elCl.add(activeCl);
    }

    render(){

        return(
            <div>
                <div className="sidebar-nav-list__wrap"
                     onMouseOut={this.onBlurFunc.bind(this)}
                     onMouseOver={this.onBlurFunc.bind(this)}
                >
                    <ul className="sidebar-nav-list" id="js-sidebar-nav-list">
                        <li className="sidebar-nav-list__item">
                            <a href="#section-1" className="sidebar-nav-list__link">Introduction video</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-2" className="sidebar-nav-list__link">What is TSD</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-3" className="sidebar-nav-list__link">Our platform</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-4" className="sidebar-nav-list__link">Our track record</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-5" className="sidebar-nav-list__link">What they say about us</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-6" className="sidebar-nav-list__link">Our roadmap</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-7" className="sidebar-nav-list__link">How were different</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-8" className="sidebar-nav-list__link">Allocation of the funds</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-9" className="sidebar-nav-list__link">Meet the team</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-10" className="sidebar-nav-list__link">Meet the partners</a>
                        </li>
                        <li className="sidebar-nav-list__item">
                            <a href="#section-11" className="sidebar-nav-list__link">Resources</a>
                        </li>
                    </ul>
                </div>
                <div className="overlay" ref={this.shadow}></div>
            </div>
        )
    }
}

export default SideBarComponent;