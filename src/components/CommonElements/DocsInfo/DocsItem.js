import React, {Component} from 'react';


class DocsItem extends Component{




    render(){

        return(
            <li className="documents-info-list__item">
                <div className="documents-info-list__img">
                    <img src={this.props.docIcon} alt=""/>
                </div>
                <div className="documents-info-list__info">
                    <div className="documents-info-list__title">{this.props.docName}</div>
                    {this.props.docLink.length ?
                        <a href={this.props.docLink} className="documents-info-list__btn">Download PDF</a>
                        : <span className="documents-info-list__res">Coming soon</span>
                    }
                </div>
            </li>
        )
    }
}

export default DocsItem;