import React, {Component} from 'react';
import {DocsList} from "../../../DataController/DataController";
import DocsItem from './DocsItem';
import MailFormComponent from "../MailForm/MailFormComponent";
import Scrollable from'react-scrollable-anchor';

class DocsInfoComponent extends Component{

    render(){

        let items = [];

        for(let i = 0; i < DocsList.length; i++){
            let doc = DocsList[i];
            items.push(
                <DocsItem
                    key={`docs-item-${i}`}
                    docName={doc.docName}
                    docIcon={doc.docIcon}
                    docLink={doc.docLink}
                />
            )
        }

        return(
            <section className="documents-info">
                <Scrollable>
                    <div id="resources" className="section-nav"></div>
                </Scrollable>
                <div className="wrapper wrapper_small">
                    <div className="documents-info__text">
                        <div className="subtitle">Resources</div>
                        <h2>Whitepaper and documents.</h2>
                    </div>
                    <div className="documents-info-list__wrap">
                        <ul className="documents-info-list">
                            {items}

                        </ul>
                    </div>
                    <a href="#" className="documents-info__more">See more
                        <div className="documents-info__icon">
                            <i className="icon-arrow_bottom"></i>
                        </div>
                    </a>
                    <a href="https://s3-ap-southeast-2.amazonaws.com/tsd-external-assets/Downloads/Transcendence_AllDocuments.zip" className="documents-info__download">DOWNLOAD ALL DOCUMENTS</a>
                    <a className="documents-info__subscribe-btn">Subscribe to our newsletter
                        <div className="documents-info__icon">
                            <i className="icon-arrow_bottom"></i>
                        </div>
                    </a>
                </div>
                <MailFormComponent />
            </section>
        )
    }
}

export default DocsInfoComponent;