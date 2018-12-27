import React, {Component} from 'react';

import stackImg from "../../assets/img/mvp-stack_1.png";
import stackImg2 from '../../assets/img/mvp-stack_2.png';
import energyImg from "../../assets/img/Energy.gif";
import farmingImg from "../../assets/img/Farming.gif";
import transportImg from "../../assets/img/Transportation.gif";
import diagramImg from "../../assets/img/diagram.png";
import blockchainImg from "../../assets/img/blockchain-functionality.png";
import DocsInfoComponent from "../CommonElements/DocsInfo/DocsInfoComponent";
import TimerComponent from "../CommonElements/Timer/TimerComponent";


class PlatformPage extends Component{

    render(){
        return(

            <main className={'content'}>
                <section className="platform-main">
                    <div className="wrapper">
                        <div className="platform-main__box">
                            <div className="platform-main__info">
                                <h1>A <span className="text-bg text-bg__big wow">differentiated model </span><br/>built on
                                    Blockchain <br/> Technology
                                </h1>
                                <p>
                                    Transcendence is a platform to facilitate project development in a structured
                                    environment and connect multiple parties across the globe through the power of
                                    decentralized ledger applications and smart contract.
                                </p>
                                <a target="_blank" href="https://tsd.network/whitelist" className="button">JOIN THE
                                    WHITELIST</a>
                            </div>
                            <div className="platform-main__img">
                                <img src={stackImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="platform-mvp">
                    <div className="wrapper">
                        <div className="platform-mvp__wrap">
                            <div className="platform-mvp__img">
                                <img src={stackImg2} alt=""/>
                            </div>
                            <div className="platform-mvp__desc">
                                <div className="subtitle">A sneak peek at our work</div>
                                <h2>Platform <span className="text-bg text-bg__small wow">MVP. </span></h2>
                                <p>We have been very busy focusing on developing the Transcendence platform - concentrating
                                    on user research, interviews, validation, developing personas, user journeys and flows,
                                    sketching and initial wireframes.</p><p>We plan to regularly release new features to the
                                MVP where it will then lead us to a first alpha release of the platform as detailed in our
                                roadmap.</p>
                                <p>Currently, the Transcendence MVP demonstrates how a land owner, developer and investor
                                    may use the Transcendence market place.</p>
                                <a href="#" className="button">GO TO MVP</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="platform-applications text-center">
                    <div className="wrapper">
                        <div className="platform-applications__text">
                            <div className="subtitle">Platform features</div>
                            <h2>A platform <span className="text-bg text-bg__small wow">for all</span> sustainability <br/>projects.
                            </h2>
                            <p>Our core expertise is in renewables, but the Transcendence platform is build to support all
                                types of sustainable infrastructure projects.</p>
                        </div>
                        <div className="platform-applications-list__wrap">
                            <ul className="platform-applications-list">
                                <li className="platform-applications-list__item">
                                    <div className="platform-applications-list__img">
                                        <img src={energyImg} alt=""/>
                                    </div>
                                    <h3>Sustainable energy</h3>
                                    <p>Solar farm, Wind turbine, Hydroelectric power, Biomass and Geothermal based
                                        projects.</p>
                                </li>
                                <li className="platform-applications-list__item">
                                    <div className="platform-applications-list__img">
                                        <img src={farmingImg} alt=""/>
                                    </div>
                                    <h3>Sustainable agriculture</h3>
                                    <p>Permaculture, Biodynamics, Hydroponics and Urban agriculture projects.</p>
                                </li>
                                <li className="platform-applications-list__item">
                                    <div className="platform-applications-list__img">
                                        <img src={transportImg} alt=""/>
                                    </div>
                                    <h3>Sustainable transportation</h3>
                                    <p>Greenways, Foreshoreways, Bikeways, Busways and Railways projects.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="platform-ecosystem">
                    <div className="wrapper">
                        <div className="platform-ecosystem__text">
                            <div className="subtitle">How does it work?</div>
                            <h2>The project <span className="text-bg text-bg__small wow">ecosystem.</span></h2>
                            <p>The TSD Platform includes a nomber of modules designed to manage all aspects of the project
                                development cycle. The diagram below shows the interactions of the key elements of the
                                ecosystem and the platform modules. </p>
                        </div>
                        <div className="platform-ecosystem__img-wrap">
                            <div className="platform-ecosystem__img">
                                <img src={diagramImg} alt=""/>
                            </div>
                        </div>
                        <div className="journey-info__icon">
                            <i className="icon-arr_slide_left"></i>
                            <i className="icon-arr_slide_left right"></i>
                        </div>
                        <div className="journey-info__icon2">
                            <i className="icon-hand"></i>
                        </div>
                    </div>
                </section>
                <section className="platform-functionality">
                    <div className="wrapper">
                        <div className="platform-functionality__wrap">

                            <div className="platform-functionality__img-wrap">
                                <div className="platform-functionality__img">
                                    <img src={blockchainImg} alt=""/>
                                </div>
                            </div>
                            <div className="platform-functionality__desc">
                                <div className="subtitle">How does it work?</div>
                                <h2>Blockchain <span className="text-bg text-bg__small wow">functionality. </span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum suscipit lectus
                                    ut bibendum. Pellentesque ut orci odio. Phasellus at elementum erat, et gravida eros.
                                    Maecenas quis sagittis nisi, ac ultrices massa. Donec a malesuada leo. Proin vel gravida
                                    orci. Cras rhoncus quis neque vel mattis. Sed eget venenatis ipsum.</p>
                            </div>
                            <div className="journey-info__icon">
                                <i className="icon-arr_slide_left"></i>
                                <i className="icon-arr_slide_left right"></i>
                            </div>
                            <div className="journey-info__icon2">
                                <i className="icon-hand"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="platform-journey text-center">
                    <div className="wrapper">
                        <div className="platform-journey__info">
                            <div className="subtitle">
                                Our journey
                            </div>
                            <h2>
                                Where we are, and where we are going.
                            </h2>
                            <p>
                                Our journey started many years ago, but with each milestone we are succesfully building to something more.
                            </p>
                        </div>
                        <div className="platform-journey__wrap">
                            <ul className="platform-journey-year">
                                <li className="platform-journey-year__item active"><a href="#year-2016">&gt; 2016</a></li>
                                <li className="platform-journey-year__item"><a href="#year-2017">2017</a></li>
                                <li className="platform-journey-year__item"><a href="#year-2018">2018</a></li>
                                <li className="platform-journey-year__item"><a href="#year-2019">2019</a></li>
                                <li className="platform-journey-year__item"><a href="#year-2020">2020</a></li>
                                <li className="platform-journey-year__item"><a href="#year-2021">2021</a></li>
                                <li className="platform-journey-year__item"><a href="#year-2022">2022 &gt;</a></li>
                            </ul>
                            <div className="box-tab-cont">
                                <div className="tab-cont" id="year-2016">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2009</div>
                                                <p>Retail Solar business was established and positioned as one of the first residential solar power retail companies in Australia. We sold and installed 300+ systems in NSW, Australia.</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2011</div>
                                                <p>Wholesale business arm established, one of the largest wholesalers of solar power systems in Australia within 1st year of operation.</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2013</div>
                                                <p>Won one of the first large scale solar FiT in Australia, Mugga Lane Solar Park (MLSP).</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2015</div>
                                                <p>MLSP receives development approval from Australian government and enters Grid Connection Agreement.</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2016</div>
                                                <p>Sunraysia Solar Farm (SSF) development commences to build the largest solar plant ever in Southern Hemisphere.</p>
                                                <p>MLSP is commissioned and connected to the National Electricity Market. </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-cont hide-tab" id="year-2017">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q3 2017</div>
                                                <p>SSF receives approval from Australia government and offer to connect from Transgrid</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q4 2017</div>
                                                <p>Blockchain arm Transcendence Network planning debuts</p>
                                                <p>Australia's largest solar deal is signed with the biggest energy retailer AGL.</p>
                                                <p>Australia's first corporate deal signed with UNSW and Origin Energy.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-cont hide-tab" id="year-2018">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q1 2018</div>
                                                <p>Transcendence Network is established and TGE is planned</p>
                                                <p>Founding team members and key advisors appointed</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q3 2018</div>
                                                <p>Transcendence and infrastructure development roadmap blueprint created</p>
                                                <p>SSF achieves financial close</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q4 2018</div>
                                                <p>MVP for Transcendence Platform released.</p>
                                                <p>Start alpha development of Transcendence Platform architecture and user on-boarding.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-cont hide-tab" id="year-2019">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q1 2019</div>
                                                <p>Private capital raised.</p>
                                                <p>Develop relationship with corporate partners.</p>
                                                <p>Token Sale Campaign. Public Pre-sale commence on March 15th.</p>
                                                <p>Alpha release of Transcendence Platform architecture and user on-boarding.</p>
                                                <p>Start alpha development for Transcendence Market Listing.</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q2 2019</div>
                                                <p>Establish Transcendence investment committee.</p>
                                                <p>Tokens are listed on public exchanges within 2 weeks after ICO finishes.</p>
                                                <p>Alpha Transcendence Market Listing release.</p>
                                                <p>Start Alpha Transcendence Market Place (surety bonding and project financing)</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q3 2019</div>
                                                <p>Beta release of Transcendence Market Place investment platform.</p>
                                                <p>First projects listed and funded.</p>
                                                <p>Start alpha development of Transcendence Platform token exchange mechanisms and community engagement module.</p>
                                                <p>SSF to achieve practical completion</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q3 2019</div>
                                                <p>Expand industry and corporate relationships.</p>
                                                <p>Start construction of funded projects.</p>
                                                <p>Alpha release of the Transcendence exchange module.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-cont hide-tab" id="year-2020">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q1 2020</div>
                                                <p>Transcendence marketing place investment and exchange modules fully functional.</p>
                                                <p>Alpha release of community engagement module.</p>
                                                <p>Start development of construction phase module.</p>
                                                <p>TSD Network's first community owned solar farm Midgar achieves financial close</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q2 2020</div>
                                                <p>Integration of community engagement module to the platform.</p>
                                                <p>Alpha release of construction phase module.</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q3 2020</div>
                                                <p>Construction completed on first projects.</p>
                                                <p>Start development of the Transcendence API Blockchain Interface.</p>
                                                <p>Start development of community voting.</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">Q4 2020</div>
                                                <p>Establish relationships with industry and corporate partners in other regions.</p>
                                                <p>Alpha release of the Transcendence API Blockchain interface.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-cont hide-tab" id="year-2021">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2021</div>
                                                <p>Alpha release of Transcendence community voting.</p>
                                                <p>Midgar to achieve practical completion.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-cont hide-tab" id="year-2022">
                                    <div className="frame platform-journey__slider-wrap js-platform-journey">
                                        <ul className="platform-journey__slider">
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2022 &gt;</div>
                                                <p>TSD Network to have influence over 500MW of renewable energy generation</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2023</div>
                                                <p>TSD Development Platform to support the first sustainable infrastructure development backed by EAs and community consensus</p>
                                            </li>
                                            <li className="platform-journey__item">
                                                <div className="platform-journey__year">2024</div>
                                                <p>TSD Network to have influence over 1,000MW of renewable energy generation</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="scrollbar">
                                <div className="handle">
                                    <div className="mousearea">
                                        <i className="icon-arr_slide_left"></i>
                                        <i className="icon-arr_slide_left right"></i>
                                    </div>
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

export default PlatformPage;