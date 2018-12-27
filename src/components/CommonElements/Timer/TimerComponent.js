import React, {Component} from 'react';


class TimerComponent extends Component{

    render(){

        return(
            <section className="whitelist-info">
                    <div className="wrapper">
                    <div className="whitelist-info__wrap">
                    <div className="whitelist-info__text">
                    <h2>Stay one step ahead <br /> and whitelist now for <br /> the next round.</h2>
            <a  target="_blank" href="https://tsd.network/whitelist" className="button whitelist-info__btn">JOIN THE WHITELIST</a>
            </div>
            <div className="whitelist-info__time">
                    <div className="whitelist-info__title">Private round ends in</div>
            <ul className="whitelist-time-list">
                    <li className="whitelist-time-list__item">
                    <div className="whitelist-time-list__value">90</div>
                <div className="whitelist-time-list__type">DAYS</div>
                </li>
                <li className="whitelist-time-list__item">
                    <div className="whitelist-time-list__value">17</div>
                    <div className="whitelist-time-list__type">HRS</div>
                </li>
                <li className="whitelist-time-list__item">
                    <div className="whitelist-time-list__value">28</div>
                <div className="whitelist-time-list__type">MINS</div>
                </li>
                <li className="whitelist-time-list__item">
                    <div className="whitelist-time-list__value">56</div>
                    <div className="whitelist-time-list__type">SECS</div>
                </li>
                    </ul>
                </div>
                </div>
                </div>
            </section>
        )

    }
}


export default TimerComponent;