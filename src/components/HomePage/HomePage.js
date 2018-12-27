import React, {Component} from 'react';
import img_header from "../../assets/img/Header.png";
import video1 from "../../assets/img/video/Header.mp4";
import video2 from "../../assets/img/video/Header.webm";
import SocialListComponent from "../CommonElements/SocialList/SocialListComponent";
import img_video from "../../assets/img/img_video.jpg";
import small_video_1 from "../../assets/img/img_small_video_1.jpg";
import small_video_2 from "../../assets/img/img_small_video_2.jpg";
import newsImg1 from "../../assets/img/news-img_1.png";
import newsImg2 from "../../assets/img/news-img_2.png";
import newsImg3 from "../../assets/img/news-img_3.png";
import newsImg4 from "../../assets/img/news-img_4.png";
import table_icon_1 from "../../assets/img/table_icon_1.png";
import powerledgerlogo from "../../assets/img/powerledgerlogo-icon.jpg";
import wepower from "../../assets/img/wepower-logo.jpg";
import electrifyasia from "../../assets/img/electrifyasia-logo.jpg";
import fundsRaised from "../../assets/img/funds-raised.png";
import video_large from "../../assets/img/img_video_large.jpg";
import partnersImg1 from "../../assets/img/partners-img_1.svg";
import partnersImg2 from "../../assets/img/partners-img_2.svg";
import partnersImg3 from "../../assets/img/partners-img_3.svg";
import partnersImg4 from "../../assets/img/partners-img_4.svg";
import partnersImg5 from "../../assets/img/partners-img_5.svg";
import partnersImg6 from "../../assets/img/partners-img_6.svg";
import DocsInfoComponent from "../CommonElements/DocsInfo/DocsInfoComponent";
import TimerComponent from "../CommonElements/Timer/TimerComponent";
import Lottie from 'react-lottie';
import AnimationBlock1 from '../../assets/animations/1/data.json'
import AnimationBlock2 from '../../assets/animations/2/data.json'
import AnimationBlock3 from '../../assets/animations/3/data.json'

class HomePage extends Component{
    render(){
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: AnimationBlock1
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: AnimationBlock2
      };
      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: AnimationBlock3
      };
        return(

            <main className="content">
                <section className="main-screen">

                    <video loop muted autoPlay poster={img_header} className="main-header__video">
                        <source src={video1} type='video/mp4' className="sour1" />
                        <source src={video2} type='video/webm' className="sour2" />
                    </video>

                    <div className="wrapper">
                        <div className="main-screen__text">
                            <h1>A community platform <br /> to create <br /><span
                                className="text-bg text-bg__big wow"> sustainable&nbsp;</span> infrastructure.</h1>
                            <p>Transcendence is a blockchain-based platform for the development and management of large
                                scale sustainable and socially valuable infrastructure projects.</p>
                            <div className="box-button box-button_main-screen">
                                <a href="#" className="button">JOIN THE WHITELIST</a>
                                <ul className="whitelist-time-list">
                                    <li className="whitelist-time-list__item">
                                        <div className="whitelist-time-list__value">32</div>
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
                            <SocialListComponent />
                        </div>
                    </div>
                </section>
                <section className="box-solution">
                    <div className="wrapper wrapper_small">
                        <div className="box-solution__text">
                            <div className="subtitle">A clear alternative to investment banks</div>
                            <h2>A disruptive blockchain solution for infrastructure in <span
                                className="text-bg text-bg__small wow">renewable energy.&nbsp;</span></h2>
                            <p>Transcendence is responding to the strong demand and support for eco-friendly, renewable
                                energy projects, offering a financing model that equally benefits everyone.</p>
                            <p>We are a clear alternative to investment banks with cost effective token capital structure
                                and an open, transparent model.</p>
                            <div className="box-button"><a href="#" className="button">READ WHITEPAPER</a></div>
                        </div>
                        <div className="video">
                            <a href="#" className="video__link">
                                <img src={img_video} alt="" />
                                <span className="play-video">
                  								<span className="play-video__button">
                  									PLAY VIDEO
                  								</span>
                  							</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="platform-info">
                    <div id="section-3" className="section-nav"></div>
                    <div className="wrapper wrapper_small">
                        <div className="platform-info__item platform-info__item_1">
                            <div className="platform-info__text">
                                <div className="subtitle">Identify, originate and initiate projects</div>
                                <h2>First ever blockchain platform for <span
                                    className="text-bg text-bg__small wow">sustainable&nbsp;</span> infrastructure assets.
                                </h2>
                                <p>Made for infrastructure entrepreneurs, land owners and developers to list and promote
                                    projects at the earliest stages of inception.</p>
                                <p>The platform provides an end to end solution for all participants that want to originate,
                                    finance and develop complex infrastructure and sustainable energy projects.
                                    Decentralized ledger technology provides a solution to interact with multiple
                                    participants with certainty of contractual obligations and the ability to track every
                                    interaction.</p>
                            </div>
                            <div className="platform-info__img">
                                <div className="platform-info__img-cont cont1">
                                    <div className="platform-info__animation-block" id="js-animation-block_2"
                                    >
                                        <Lottie options={defaultOptions2}
                                          height={400}
                                          width={400}
                                          isStopped={false}
                                          isPaused={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="platform-info__item platform-info__item_right platform-info__item_2">
                            <div className="platform-info__text">
                                <div className="subtitle">Use the power of decentralized ledger technology</div>
                                <h2>A <span
                                    className="text-bg text-bg__small wow">community platform&nbsp;</span> to&nbsp;create
                                    sustainable infrastructure.</h2>
                                <p>Transcendence is a blockchain-based platform for the development and management of large
                                    scale sustainable and socially valuable infrastructure projects.</p>
                                <p>The Transcendence platform is designed to engage participants along the entire
                                    infrastructure development with a focus on providing a fairer playing field for
                                    professionals, the community and smaller participants that would normally have
                                    difficulty accessing these projects.</p>
                            </div>
                            <div className="platform-info__img">
                                <div className="platform-info__img-cont cont2">
                                    <div className="platform-info__animation-block" id="js-animation-block_3">
                                    <Lottie options={defaultOptions3}
                                      height={400}
                                      width={400}
                                      isStopped={false}
                                      isPaused={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="platform-info__item platform-info__item_3">
                            <div className="platform-info__text">
                                <div className="subtitle">Track the flow between assets and stakeholders</div>
                                <h2><span className="text-bg text-bg__small wow">Seamless tracking&nbsp;</span> and transfer
                                    of royalties, surety bonds and payments.</h2>
                                <p>Use the power of tokenization to implement secure Surety Bonds for projects,
                                    fractionalize assets and track royalty flows to all recipients and backers.</p>
                                <p>With the advent of blockchain technology and smart contracts we now have the opportunity
                                    to automate key elements in the payments cycle associated with large scale development
                                    projects. Smart contracts allow for transparency around escrow, payment triggers and
                                    flow of funds.</p>
                            </div>
                            <div className="platform-info__img">
                                <div className="platform-info__img-cont cont3">
                                    <div className="platform-info__animation-block" id="js-animation-block_1">
                                      <Lottie options={defaultOptions1}
                                        height={400}
                                        width={400}
                                        isStopped={false}
                                        isPaused={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="advantages">
                    <div className="wrapper">
                        <div className="box-advantages-list">
                            <ul className="advantages-list">
                                <li className="advantages-list__item">
                                    <div className="advantages-list__cont">
                                        <div className="advantages-list__icon">
                                            <i className="icon-icon-users"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span></i>
                                        </div>
                                        <div className="advantages-list__text">
                                            Transparency across multiple stakeholders
                                        </div>
                                    </div>
                                </li>
                                <li className="advantages-list__item">
                                    <div className="advantages-list__cont">
                                        <div className="advantages-list__icon">
                                            <i className="icon-icon-percent"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span></i>
                                        </div>
                                        <div className="advantages-list__text">
                                            Increasing opportunity for solar energy projects
                                        </div>
                                    </div>
                                </li>
                                <li className="advantages-list__item">
                                    <div className="advantages-list__cont">
                                        <div className="advantages-list__icon">
                                            <i className="icon-icon-bank"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span></i>
                                        </div>
                                        <div className="advantages-list__text">
                                            Overcoming domination by investment banks
                                        </div>
                                    </div>
                                </li>
                                <li className="advantages-list__item">
                                    <div className="advantages-list__cont">
                                        <div className="advantages-list__icon">
                                            <i className="icon-icon-pie-chart"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span></i>
                                        </div>
                                        <div className="advantages-list__text">
                                            Equitable, shared distribution of project benefits
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="how-work text-center orange">
                    <div className="wrapper">
                        <div className="how-work__text">
                            <div className="subtitle">How does transendence work?</div>
                            <h2>Everyone has an opportunity to contribute <span className="text-bg text-bg__small wow">their own way.&nbsp;</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit hendrerit erat.
                                Suspendisse lobortis urna molestie quam gravida, eget blandit metus ullamcorper. </p>
                        </div>
                        <ul className="how-work-list">
                            <li className="how-work-list__item">
                                <div className="how-work-list__cont">
                                    <div className="how-work-list__icon"><i className="icon-icon_1"></i></div>
                                    <h3>Project idea and scope</h3>
                                    <p>Land listing and government approvals.</p>
                                </div>
                            </li>
                            <li className="how-work-list__item">
                                <div className="how-work-list__cont">
                                    <div className="how-work-list__icon"><i className="icon-icon_2"><span
                                        className="path1"></span><span className="path2"></span><span
                                        className="path3"></span><span className="path4"></span></i></div>
                                    <h3>Funding with TSD tokens</h3>
                                    <p>Any token holder can make <br/> investments.</p>
                                </div>
                            </li>
                            <li className="how-work-list__item">
                                <div className="how-work-list__cont">
                                    <div className="how-work-list__icon"><i className="icon-icon_3"></i></div>
                                    <h3>Building with renewable energy</h3>
                                    <p>Voting on decisions from community stakeholders</p>
                                </div>
                            </li>
                            <li className="how-work-list__item">
                                <div className="how-work-list__cont">
                                    <div className="how-work-list__icon"><i className="icon-icon_4"></i></div>
                                    <h3>Operating on our platform</h3>
                                    <p>All parties have complete transparency in future agreements</p>
                                </div>
                            </li>
                            <li className="how-work-list__item">
                                <div className="how-work-list__cont">
                                    <div className="how-work-list__icon"><i className="icon-icon_5"></i></div>
                                    <h3>Value and profits shared to token holders</h3>
                                    <p>TSD token raises in market <br/> from infrastructure value <br/> increase</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="technology-info orange">
                    <div className="wrapper wrapper_small">
                        <div className="technology-info__text">
                            <div className="subtitle">Achieving a safe client future</div>
                            <h2>Leveraging technology to help <br/>realise a sustainable and <br/><span
                                className="text-bg text-bg__small wow">prosperous future.&nbsp;</span></h2>
                            <p>Achieving a safe climate future requires a rapid shift away from fossil fuels towards clean,
                                efficient renewable energy production from new energy plants.</p>
                            <p>Building new generation infrastructure should not just be for big companies and investors,
                                Transcendence offers the capability for communities.</p>
                        </div>
                        <div className="technology-info-list__wrap">
                            <ul className="technology-info-list">
                                <li className="technology-info-list__item">
                                    <div className="technology-info-list__item-wrap">
                                        <a href="#" className="technology-info-list__img">
                                            <img src={small_video_1} alt=""/>
                                            <span className="play-video">
											<span className="play-video__button">
												PLAY VIDEO
											</span>
										</span>
                                        </a>
                                        <a href="#" className="technology-info-list__title">Mugga Lane</a>
                                        <p>First Major project, developed, owned and operated. Australia Capital Territory’s
                                            premier solar power plant. Capacity 24,500 MWh. Powering 3000+ homes.</p>
                                        <a href="#" className="technology-info-list__btn">Play video</a>
                                    </div>
                                </li>
                                <li className="technology-info-list__item">
                                    <div className="technology-info-list__item-wrap">
                                        <a href="#" className="technology-info-list__img">
                                            <img src={small_video_2} alt="" />
                                            <span className="play-video">
											<span className="play-video__button">
												PLAY VIDEO
											</span>
										</span>
                                        </a>
                                        <a href="#" className="technology-info-list__title">Sunraysia</a>
                                        <p>Newest development in construction. One of the largest <br /> in the world and
                                            biggest in Australia. Capacity 255MWDC Over 10km².</p>
                                        <a href="#" className="technology-info-list__btn">Play video</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="transcendence-info">
                    <div className="wrapper">
                        <div className="transcendence-info__wrapper">
                            <div className="transcendence-info__box transcendence-info__box-js">
                                <div className="transcendence-info__item">
                                    <div className="transcendence-info__comment">
                                        <i className="icon-quote"></i>
                                        <div className="transcendence-info__text">
                                            Transcendence is innovative and smart - with a mission to unlock the benefits of
                                            renewable energy for communities everywhere.
                                        </div>
                                        <a href="https://www.news.com.au/" className="transcendence-info__link">
                                            - SIMON CORBEL, FORMER DEPUTY CHIEF MINISTER
                                        </a>
                                    </div>
                                </div>
                                <div className="transcendence-info__item">
                                    <div className="transcendence-info__comment">
                                        <i className="icon-quote"></i>
                                        <div className="transcendence-info__text">
                                            Transcendence is innovative and smart - with a mission to unlock the benefits of
                                            renewable energy for communities everywhere.
                                        </div>
                                        <a href="https://www.news.com.au/" className="transcendence-info__link">
                                            - SIMON CORBEL, FORMER DEPUTY CHIEF MINISTER
                                        </a>
                                    </div>
                                </div>
                                <div className="transcendence-info__item">
                                    <div className="transcendence-info__comment">
                                        <i className="icon-quote"></i>
                                        <div className="transcendence-info__text">
                                            Transcendence is innovative and smart - with a mission to unlock the benefits of
                                            renewable energy for communities everywhere.
                                        </div>
                                        <a href="https://www.news.com.au/" className="transcendence-info__link">
                                            - SIMON CORBEL, FORMER DEPUTY CHIEF MINISTER
                                        </a>
                                    </div>
                                </div>
                                <div className="transcendence-info__item">
                                    <div className="transcendence-info__comment">
                                        <i className="icon-quote"></i>
                                        <div className="transcendence-info__text">
                                            Transcendence is innovative and smart - with a mission to unlock the benefits of
                                            renewable energy for communities everywhere.
                                        </div>
                                        <a href="https://www.news.com.au/" className="transcendence-info__link">
                                            - SIMON CORBEL, FORMER DEPUTY CHIEF MINISTER
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="transcendence-info__block">
                            <ul className="transcendence-info__list">
                                <li className="transcendence-info__element">
                                    <div className="transcendence-info__img">
                                        <img src={newsImg1} alt=""/>
                                    </div>
                                </li>
                                <li className="transcendence-info__element">
                                    <div className="transcendence-info__img">
                                        <img src={newsImg2} alt=""/>
                                    </div>
                                </li>
                                <li className="transcendence-info__element">
                                    <div className="transcendence-info__img">
                                        <img src={newsImg3} alt=""/>
                                    </div>
                                </li>
                                <li className="transcendence-info__element">
                                    <div className="transcendence-info__img">
                                        <img src={newsImg4} alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="journey-info">
                    <div id="section-6" className="section-nav"></div>
                    <div className="wrapper">
                        <div className="journey-info__box">
                            <div className="subtitle">Our journey</div>
                            <h2>Where we are, and <span className="text-bg text-bg__small wow">where we are going.</span>
                            </h2>
                            <p>Our journey started many years ago, but with each milestone we are succesfully building to
                                something more.</p>
                        </div>
                        <div className="wrap">
                            <div className="frame journey-info__wrapper" id="forcecentered">
                                <ul className="clearfix journey-info__slider">
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            2016
                                            <div className="journey-info__text">
                                                Retail Solar business was established and positioned as one of the first
                                                residential solar power retail companies in Australia.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            2011
                                            <div className="journey-info__text">
                                                Wholesale business arm established, one of the largest wholesalers of solar
                                                power systems in Australia within 1st year of operation.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            2016
                                            <div className="journey-info__text">
                                                The 13MW Mugga Lane Solar Park is commissioned and connected to the National
                                                Electricity Market.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            2017
                                            <div className="journey-info__text">
                                                Australia's largest solar deal is signed with the biggest energy retailer
                                                AGL. Australia's first corporate deal signed with UNSW and Origin Energy.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            2018
                                            <div className="journey-info__text">
                                                Transcendence Network is established and TGE is planned. Infrastructure
                                                development roadmap blueprint is created.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            Q4 2018
                                            <div className="journey-info__text">
                                                MVP for Transcendence Platform released. Start alpha development of the
                                                platform architecture and user on-boarding.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            Q1 2019
                                            <div className="journey-info__text">
                                                Private capital raised. Token Sale Campaign starts with Public Pre-sale on
                                                March 15th.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            Q2 2019
                                            <div className="journey-info__text">
                                                Alpha Transcendence Market Listing release. Start Alpha Transcendence Market
                                                Place (surety bonding and project financing)
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            Q3 2019
                                            <div className="journey-info__text">
                                                Beta release of Transcendence Market Place investment platform. First
                                                projects listed and funded.
                                            </div>
                                        </div>

                                    </li>
                                    <li className="journey-info__item">
                                        <div className="journey-info__num">
                                            Q4 2019
                                            <div className="journey-info__text">
                                                Start construction of funded projects. Alpha release of the Transcendence
                                                exchange module.
                                            </div>
                                        </div>

                                    </li>
                                </ul>
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
                        <div className="journey-info__icon">
                            <i className="icon-arr_slide_left"></i>
                            <i className="icon-arr_slide_left right"></i>
                        </div>
                        <div className="journey-info__icon2">
                            <i className="icon-hand"></i>
                        </div>
                        <div className="journey-info__btn">
                            <a href="#" className="button">VIEW FULL TIMELINE</a>
                        </div>
                    </div>
                </section>
                <section className="compare-info">
                    <div className="wrapper">
                        <div className="compare-info__text">
                            <div className="subtitle">How were different</div>
                            <h2>A differentiation model</h2>
                            <p>Transcendence delivers a differentiated model compared to current competitors in the
                                blockchain space. Transcendence offers a model that provides solutions for entrepreneurs and
                                sustainable energy developers along the infrastructure development value chain.</p>
                        </div>
                        <div className="compare-info-list__wrap">
                            <ul className="compare-info-list">
                                <li className="compare-info-list__item compare-info-list__header">
                                    <div className="col col1"></div>
                                    <div className="col col2">
                                        <div className="compare-info-list__img">
                                            <img src={table_icon_1} alt=""/>
                                        </div>
                                        <div className="compare-info-list__title">Transcendence</div>
                                        <div className="compare-info-list__subtitle">TSD</div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__img">
                                            <img src={powerledgerlogo} alt=""/>
                                        </div>
                                        <div className="compare-info-list__title">Powerledger</div>
                                        <div className="compare-info-list__subtitle">POWR</div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__img">
                                            <img src={wepower} alt=""/>
                                        </div>
                                        <div className="compare-info-list__title">WePower</div>
                                        <div className="compare-info-list__subtitle">WPR</div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__img">
                                            <img src={electrifyasia} alt=""/>
                                        </div>
                                        <div className="compare-info-list__title">Electrifys</div>
                                        <div className="compare-info-list__subtitle">ELEC</div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">Origination <span className="compare-info-list__info">i</span>
                                    </div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">Planning</div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">Funding</div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">Construction</div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">Operations</div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">Market operations</div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                                <li className="compare-info-list__item">
                                    <div className="col col1">End of Life <span className="compare-info-list__info">i</span>
                                    </div>
                                    <div className="col col2">
                                        <div className="compare-info-list__icon active"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col3">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col4">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                    <div className="col col5">
                                        <div className="compare-info-list__icon"><i className="icon-check"></i></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="allocation-info">
                    <div id="section-8" className="section-nav"></div>
                    <div className="wrapper">
                        <div className="allocation-info__text">
                            <div className="subtitle">Allocation of the funds</div>
                            <h2>We believe in <br/><span className="text-bg text-bg__small wow">transparency.</span></h2>
                            <p>With our Soft Cap set at $20 million, we have forecasted this to cover the necessary costs
                                needed to carry out the continual development and refining of the platform, ongoing
                                operation and most importantly, the seeding of the first real world operational asset into
                                the platform, providing the token with real world underlying value.</p>
                            <p>Any funds raised on top the softcap will be used to accelerate the development of the
                                platform, further development of new projects and seeding the platform with more real world
                                operational assets.</p>
                            <p><i>*Visualisation; figures are not final</i></p>

                        </div>
                        <div className="allocation-info__img">
                            <img src={fundsRaised} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="key-info text-center">
                    <div className="wrapper">
                        <div className="key-info-list__wrap">
                            <ul className="key-info-list">
                                <li className="key-info-list__item col1">
                                    Transcendence <br/>TGE Key <br/>Numbers
                                </li>
                                <li className="key-info-list__item col2">
                                    <div className="key-info-list__title">Hard cap</div>
                                    <div className="key-info-list__value">US $<span>80.2</span>m</div>
                                    <div className="key-info-list__title">Soft cap</div>
                                    <div className="key-info-list__value">US $<span>20</span>m</div>
                                </li>
                                <li className="key-info-list__item col3">
                                    <div className="key-info-list__title">Total supply</div>
                                    <div className="key-info-list__value"><span>250</span>m TSD</div>
                                    <div className="key-info-list__title">Available for purchase</div>
                                    <div className="key-info-list__value"><span>250</span>m TSD</div>
                                </li>
                                <li className="key-info-list__item col4">
                                    <div className="key-info-list__title">Private sale</div>
                                    <div className="key-info-list__value">15 Nov &gt; 15 Feb <br/>62.5m TSD <br/>US $0.35 /
                                        token</div>
                                </li>
                                <li className="key-info-list__item col5">
                                    <div className="key-info-list__title">Pre sale</div>
                                    <div className="key-info-list__value">15 Mar > 15 Apr <br/>62.5m TSD <br/>US $0.35 / token
                                    </div>
                                </li>
                                <li className="key-info-list__item col5">
                                    <div className="key-info-list__title">Main sale</div>
                                    <div className="key-info-list__value">22 Apr &gt; 22 May <br/>37.5m TSD<br/>US $0.50 /
                                        token</div>
                                </li>
                            </ul>
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
                <section className="team-info text-center">
                    <div className="wrapper">
                        <div className="team-info__text">
                            <div className="subtitle">Meet the team</div>
                            <h2>Where we are, and where we are going.</h2>
                            <p>Our journey started many years ago, but with each milestone we are succesfully building to
                                something more.</p>
                            <div className="video">
                                <a href="#" className="video__link">
                                    <img src={video_large} alt=""/>
                                    <span className="play-video">
									<span className="play-video__button">
										PLAY VIDEO
									</span>
								</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners-info">
                    <div id="section-10" className="section-nav"></div>
                    <div className="wrapper wrapper_small">
                        <div className="partners-info__text">
                            <div className="subtitle">We keep good company</div>
                            <h2>Meet the partners.</h2>
                            <div className="partners-info-list__wrap">
                                <ul className="partners-info-list">
                                    <li className="partners-info-list__item">
                                        <div className="partners-info-list__img">
                                            <img src={partnersImg1} alt=""/>
                                        </div>
                                        <p>Advisory business for the global energy sector. </p>
                                    </li>
                                    <li className="partners-info-list__item">
                                        <div className="partners-info-list__img">
                                            <img src={partnersImg2} alt=""/>
                                        </div>
                                        <p>VC fund and partner specialised in Blockchain projects.</p>
                                    </li>
                                    <li className="partners-info-list__item">
                                        <div className="partners-info-list__img">
                                            <img src={partnersImg3} alt=""/>
                                        </div>
                                        <p>World-class digital development partner.</p>
                                    </li>
                                    <li className="partners-info-list__item">
                                        <div className="partners-info-list__img">
                                            <img src={partnersImg4} alt=""/>
                                        </div>
                                        <p>Australian advisory and excution partner to Blockchain companies.</p>
                                    </li>
                                    <li className="partners-info-list__item">
                                        <div className="partners-info-list__img">
                                            <img src={partnersImg5} alt=""/>
                                        </div>
                                        <p>Blockchain and dApps development agency.</p>
                                    </li>
                                    <li className="partners-info-list__item">
                                        <div className="partners-info-list__img">
                                            <img src={partnersImg6} alt=""/>
                                        </div>
                                        <p>Brand identity, creative UX and product design studio. </p>
                                    </li>
                                </ul>
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

export default HomePage;
