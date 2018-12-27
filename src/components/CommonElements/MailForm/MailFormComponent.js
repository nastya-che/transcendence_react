import React, {Component} from 'react';

class MailFormComponent extends Component{

    render(){

        return(
            <div className="wrapper">
                <div className="documents-info-subscribe">
                    <input type="text" className="button" placeholder="Enter email address"/>
                    <a href="#" className="button">SUBSCRIBE</a>
                </div>
            </div>
        )
    }
}

export default MailFormComponent;