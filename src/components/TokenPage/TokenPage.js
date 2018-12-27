import React, {Component} from 'react';
import payImg from '../../assets/img/pay.png';
import DocsInfoComponent from "../CommonElements/DocsInfo/DocsInfoComponent";
import TimerComponent from "../CommonElements/Timer/TimerComponent";

class TokenPage extends Component{

    render(){
        return(
            <main className={'content'}>
                <section className="token-main">
                    <div className="wrapper">
                        <div className="token-main__box">
                            <div className="token-main__left">
                                <h1>
                                    A currency owned by the
                                    <span className="text-bg text-bg__big wow">
                                        community.&nbsp;
                                    </span>
                                </h1>
                                <p>
                                    Transcendence is a blockchain-based platform for the development and management of large scale sustainable and socially valuable infrastructure projects.
                                </p>
                                <a target="_blank" href="https://tsd.network/whitelist" className="button">JOIN THE WHITELIST</a>
                            </div>
                            <div className="token-main__right">
                                <img src={payImg} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="token-offering orange">
                    <div className="token-offering__circle">

                    </div>
                    <div className="wrapper">
                        <div className="subtitle">TSD token generation event</div>
                        <h2>Our <span className="text-bg text-bg__small wow">token offering.&nbsp;</span></h2>
                        <p>
                            Transcendence is creating a total supply of up to approximately 250 million TSD tokens with up to 200 million of those tokens available during the Inital Token Offering.
                        </p>
                        <div className="token-offering__wrap">
                            <div className="token-offering__wrap-inside">
                                <div className="token-offering__box">
                                    <table className="token-offering__table">
                                        <tr className="token-offering__tr">
                                            <th className="token-offering__th">

                                                Round
                                            </th>
                                            <th className="token-offering__th">Discount</th>
                                            <th className="token-offering__th">1 Token (USD)</th>
                                        </tr>
                                        <tr className="token-offering__tr">
                                            <td className="token-offering__td">
                                                <span className="token-offering__marker marker1"></span>
                                                Private
                                            </td>
                                            <td className="token-offering__td">30%</td>
                                            <td className="token-offering__td">$0.35</td>
                                        </tr>
                                        <tr className="token-offering__tr">
                                            <td className="token-offering__td">
                                                <span className="token-offering__marker marker2"></span>
                                                Pro Sale
                                            </td>
                                            <td className="token-offering__td">20%</td>
                                            <td className="token-offering__td">$0.40</td>
                                        </tr>
                                        <tr className="token-offering__tr">
                                            <td className="token-offering__td">
                                                <span className="token-offering__marker marker3"></span>
                                                Main
                                            </td>
                                            <td className="token-offering__td">No discount</td>
                                            <td className="token-offering__td">$0.50</td>
                                        </tr>
                                    </table>
                                    <div className="token-offering__progress">
                                        <div className="token-offering__item">
                                            <div className="token-offering__title">
                                                Private round
                                            </div>
                                            <div className="token-offering__range range1">

                                            </div>
                                        </div>
                                        <div className="token-offering__item">
                                            <div className="token-offering__title">
                                                Pre round
                                            </div>
                                            <div className="token-offering__range range2">

                                            </div>
                                        </div>
                                        <div className="token-offering__item">
                                            <div className="token-offering__title">
                                                Main round
                                            </div>
                                            <div className="token-offering__range range3">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="token-distribution">
                    <div className="wrapper">
                        <div className="token-distribution__box">
                            <div className="subtitle">
                                How are tokens distributed?
                            </div>
                            <h2>
                                Breaking down the token <br />
                                <span className="text-bg text-bg__small wow ">
								distribution.&nbsp;
							</span>
                            </h2>
                            <div className="token-distribution__statistics">
                                <ul className="token-distribution__list">
                                    <li className="token-distribution__item item1">
									<span className="token-distribution__name">
										Private round
									</span>
                                        <span className="token-distribution__num">
										40.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item2">
									<span className="token-distribution__name">
										Pre-sale round
									</span>
                                        <span className="token-distribution__num">
										25.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item3">
									<span className="token-distribution__name">
										Public round
									</span>
                                        <span className="token-distribution__num">
										15.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item4">
									<span className="token-distribution__name">
										Founders, team and advisors
									</span>
                                        <span className="token-distribution__num">
										8.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item5">
									<span className="token-distribution__name">
										Bounty and rewards
									</span>
                                        <span className="token-distribution__num">
										7.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item6">
									<span className="token-distribution__name">
										Liquidity program
									</span>
                                        <span className="token-distribution__num">
										3.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item7">
									<span className="token-distribution__name">
										Project Implementation providers
									</span>
                                        <span className="token-distribution__num">
										2.00%
									</span>
                                    </li>
                                </ul>
                                <div className="token-distribution__graph graph1" id="graph1"></div>

                            </div>
                            <div className="token-distribution__statistics stat2">
                                <ul className="token-distribution__list">
                                    <li className="token-distribution__item item8">
									<span className="token-distribution__name">
										Project development
									</span>
                                        <span className="token-distribution__num">
										62.50%
									</span>
                                    </li>
                                    <li className="token-distribution__item item9">
									<span className="token-distribution__name">
										Platform development
									</span>
                                        <span className="token-distribution__num">
										10.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item10">
									<span className="token-distribution__name">
										Contingency
									</span>
                                        <span className="token-distribution__num">
										10.00%
									</span>
                                    </li>
                                    <li className="token-distribution__item item11">
									<span className="token-distribution__name">
										Offer, liquidity and listing costs
									</span>
                                        <span className="token-distribution__num">
										6.30%
									</span>
                                    </li>
                                    <li className="token-distribution__item item12">
									<span className="token-distribution__name">
										Business development
									</span>
                                        <span className="token-distribution__num">
										6.30%
									</span>
                                    </li>
                                    <li className="token-distribution__item item13">
									<span className="token-distribution__name">
										Operational costs and overheads
									</span>
                                        <span className="token-distribution__num">
										5.00%
									</span>
                                    </li>

                                </ul>
                                <div className="token-distribution__graph graph2" id="graph2">

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <DocsInfoComponent />
                <TimerComponent />
            </main>
        )
    }
}

export default TokenPage;