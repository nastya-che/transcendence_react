import React, {Component} from 'react';

class TeamItem extends Component{

    constructor(){
        super();
        this.liElement = React.createRef();
    }

    handleClick(){
        let items = document.getElementsByClassName('team-employee__item'),
            activeCl = 'active';

        for(let i = 0; i < items.length; i++){
            let item = items[i];
            item.classList.remove(activeCl);
        }

        this.liElement.current.classList.add(activeCl);
    }

    render(){

        let p = this.props;

        return(
            <li className="team-employee__item" ref={this.liElement}>
                <div className="team-employee__box">
                    <a href="#" className="team-employee__social">
                        <i className="icon-linkedin-white"></i>
                    </a>
                    <div className="team-employee__photo">
                        <img src={p.teamIcon} alt=""/>
                    </div>
                    <div className="team-employee__name">
                        {p.teamName}
                    </div>
                    <div className="team-employee__specialty">
                        {p.teamSpec}
                    </div>
                    <div className="team-employee__description">
                        {p.teamDesc}
                    </div>
                    <a className="team-employee__link"
                    onClick={this.handleClick.bind(this)}>
                        <i className="icon-preview"></i>
                        <span>View</span>
                    </a>
                </div>

            </li>

        )
    }
}

export default TeamItem;