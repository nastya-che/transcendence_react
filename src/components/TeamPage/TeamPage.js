import React, {Component} from 'react';
import DocsInfoComponent from "../CommonElements/DocsInfo/DocsInfoComponent";
import video1 from '../../assets/img/img_small_video_1.jpg';
import video2 from '../../assets/img/img_small_video_2.jpg';
import teamHeaderImg from '../../assets/img/TeamHeader.jpg';
import TeamList from "./TeamList";
import AdvisoryTeam from "./AdvisoryTeam";
import TimerComponent from "../CommonElements/Timer/TimerComponent";

class TeamPage extends Component{

    render(){
        return(
            <main className={'content'}>
                <section className="team-main">
                    <div className="wrapper">
                        <div className="team-main__box">
                            <div className="team-main__left">
                                <h1>
                                    Experienced and <br/>
                                    <span className="text-bg text-bg__big wow">
									leading developer
								</span>
                                    in renewables.
                                </h1>
                                <p>
                                    Transcendence is being built by the people behind Maoneng, whose team has joint
                                    experience of delivering over 50 billion dollars worth of infrastructure projects
                                    globally.

                                </p>
                                <p>
                                    Maoneng is an experienced and leading developer in renewables, currently
                                    constructing the largest solar power plant in the Southern Hemisphere.
                                </p>
                                <a target="_blank" href="https://tsd.network/whitelist" className="button">JOIN THE
                                    WHITELIST</a>
                            </div>
                            <div className="team-main__right">
                                <a href="https://www.youtube.com/embed/jid2A7ldc_8?autoplay=1"
                                   className="team-main__photo fancybox" data-fancybox-type="iframe">
                                    <img src={teamHeaderImg} alt=""/>
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
                <section className="team-employee">
                    <div className="team-employee__circle"></div>
                    <div className="wrapper">
                        <div className="subtitle">
                            Our team
                        </div>
                        <h2>
                            Meet the
                            <span className="text-bg text-bg__small wow">
							Transcendence team.&nbsp;
						</span>
                        </h2>
                        <p>
                            A company is only as good as its people. The hard part is actually building the team that
                            will embody the vision and propel you foward. We've started the process, and improving on it
                            everyday.
                        </p>

                        <TeamList />

                        <a href="#" className="documents-info__more">See more
                            <div className="documents-info__icon">
                                <i className="icon-arrow_bottom"></i>
                            </div>
                        </a>
                    </div>
                </section>

                <section className="team-advisory orange">
                    <div className="team-advisory__circle">

                    </div>
                    <div className="wrapper">
                        <h2>
                            Meet the
                            <span className="text-bg text-bg__small wow">
							Advisory team.
						</span>
                        </h2>
                        <p>
                            With the most relevant industry advisors, less time is wasted on figuring out what could
                            work, more time working on delivering what will work.
                        </p>

                        <AdvisoryTeam />

                    </div>
                </section>
                <section className="technology-info orange">
                    <div className="wrapper wrapper_small">
                        <div className="technology-info__text">
                            <div className="subtitle">Our track record</div>
                            <h2>Transcendence, the new <br/>blockchain-arm of the <br/><span
                                className="text-bg text-bg__small wow">Maoneng Group.&nbsp;</span></h2>
                            <p>We understand the difficulties and pain points of the industry. Our team has joint
                                experience in delivering over $50 billion worth of projects globally. </p>
                            <p>Our holding company, Maoneng Group, is currently building Sunraysia Solar Farm - 255MWp,
                                the largest to be built in Australia.</p>
                        </div>
                        <div className="technology-info-list__wrap">
                            <ul className="technology-info-list">
                                <li className="technology-info-list__item">
                                    <div className="technology-info-list__item-wrap">
                                        <a href="#" className="technology-info-list__img">
                                            <img src={video1} alt=""/>
                                            <span className="play-video">
											<span className="play-video__button">
												PLAY VIDEO
											</span>
										</span>
                                        </a>
                                        <a href="#" className="technology-info-list__title">Mugga Lane</a>
                                        <p>First Major project, developed, owned and operated. Australia Capital
                                            Territory’s premier solar power plant. Capacity 24,500 MWh. Powering 3000+
                                            homes.</p>
                                        <a href="#" className="technology-info-list__btn">Play video</a>
                                    </div>
                                </li>
                                <li className="technology-info-list__item">
                                    <div className="technology-info-list__item-wrap">
                                        <a href="#" className="technology-info-list__img">
                                            <img src={video2} alt=""/>
                                            <span className="play-video">
											<span className="play-video__button">
												PLAY VIDEO
											</span>
										</span>
                                        </a>
                                        <a href="#" className="technology-info-list__title">Sunraysia</a>
                                        <p>Newest development in construction. One of the largest <br/> in the world and
                                            biggest in Australia. Capacity 255MWDC Over 10km².</p>
                                        <a href="#" className="technology-info-list__btn">Play video</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <DocsInfoComponent />
                <TimerComponent />
            </main>

        )
    }
}

export default TeamPage;