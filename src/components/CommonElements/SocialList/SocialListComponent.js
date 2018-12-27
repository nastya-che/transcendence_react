import React, {Component} from 'react';
import {SocialList} from "../../../DataController/DataController";


class SocialListComponent extends Component{


    render(){

        let items = [];

        for (let i = 0; i < SocialList.length; i++){
            let socItem = SocialList[i];

            items.push(
                <div className="social-list__item" key={i}>
                    <a href={socItem.socLink} className="social-list__link">
                        <i className={`icon-${socItem.socName}-white`}></i>
                    </a>
                </div>
            )
        }

        return(
            <div className="social-list">
                {items}
            </div>
        )
    }
}

export default SocialListComponent;