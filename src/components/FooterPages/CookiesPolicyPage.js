import React, {Component} from 'react';
import DocsInfoComponent from "../CommonElements/DocsInfo/DocsInfoComponent";
import TimerComponent from "../CommonElements/Timer/TimerComponent";

class CookiesPolicyPage extends Component{

    render(){

        return(
            <main className={'content cookies'}>
                <section className="cookies-main">
                    <div className="wrapper">
                        <h1>Cookies Policy</h1>
                        <p>By using our website (https://tsd.network/) and the Transcendence Platform (collectively, the
                            Website), you consent to the use of cookies in accordance with this Cookies Policy by
                            Transcendence, together with other members of its group (Transcendence, we/us/our). You will
                            have seen a pop up to this effect on your first visit to this website; although it will not
                            usually appear on subsequent visits you may withdraw your consent at any time by following
                            the instructions below.</p>
                        <h6>Disabling cookies</h6>
                        <p>If you do not agree to the use of these cookies please disable them by following the
                            instructions for your browser Please note that some of the services will not function so
                            well if cookies are disabled.</p>
                        <p>Where the organisation setting the cookie provides an automated disabling tool in respect of
                            its cookie(s) we list the name of that organisation, the category of cookies it sets
                            together with a link to its automated disabling tool. In all other cases, we list the names
                            of the cookies themselves and their source at the date of this Cookies policy so that you
                            can easily identify and disable them if you want through your browser controls.</p>
                        <p>Some browsers make it possible for you to signal that you do not want your internet browsing
                            activity to be tracked. Disabling tracking may interfere with some uses of the Website and
                            the services provided on the Website.</p>
                        <p>After your initial visit to the Website we may change the cookies we use. This cookies policy
                            will always allow you to know who is placing cookies, for what purpose and give you the
                            means to disable them so you should check it from time to time.</p>
                        <h6>What are cookies?</h6>
                        <p>Cookies are text files containing small amounts of information which are downloaded to your
                            device when you visit a website. Cookies are then sent back to the originating web domain on
                            your subsequent visits to that domain. Most web pages contain elements from multiple web
                            domains so when you visit the Website, your browser may receive cookies from several
                            sources.</p>
                        <p>Cookies are useful because they allow a website to recognise a user’s device. Cookies allow
                            you to navigate between pages efficiently, remember preferences and generally improve the
                            user experience. They can also be used to tailor advertising to your interests through
                            tracking your browsing across websites.</p>
                        <p>Session cookies are deleted automatically when you close your browser and persistent cookies
                            remain on your device after the browser is closed (for example to remember your user
                            preferences when you return to the site).</p>
                        <h6>What types of cookies does Transcendence use?</h6>
                        <p>We describe the categories of cookies Transcendence and its affiliates and its contractors
                            use below.</p>
                        <h6>Performance Cookies</h6>
                        <p>We make use of analytic cookies to analyse how our visitors use our Website and to monitor
                            Website performance. This allows us to provide a high-quality experience by customising our
                            offering and quickly identifying and fixing any issues that arise. For example, we might use
                            performance cookies to keep track of which pages are most popular, which method of linking
                            between pages is most effective, and to determine why some pages are receiving error
                            messages. We might also use these cookies to highlight articles or site services that we
                            think will be of interest to you based on your usage of the website. The information
                            collected by these cookies is not associated with your personal information by us or by our
                            contractors.</p>
                        <h6>The Website currently uses the following analytic cookies:</h6>
                        <div className="cookies-list__wrap">
                            <ul className="cookies-list">
                                <li className="cookies-list__header">
                                    <div className="col col1">Cookie Name</div>
                                    <div className="col col2">Source</div>
                                    <div className="col col3">Purpose</div>
                                    <div className="col col4">Further Information</div>
                                </li>
                                <li className="cookies-list__item">
                                    <div className="col col1">VisitorStatus</div>
                                    <div className="col col2">Transcendence</div>
                                    <div className="col col3">Indicates if the visitor is new or returning. Used for
                                        tracking the visitors statistic in Web analytics.
                                    </div>
                                    <div className="col col4">Persistent cookie <br/>First party</div>
                                </li>
                                <li className="cookies-list__item">
                                    <div className="col col1">Source</div>
                                    <div className="col col2">Transcendence</div>
                                    <div className="col col3">Stores the channel from which the visitor arrived as part
                                        of a campaign (e.g., email, Facebook, Twitter, etc.). Based on the utm_source
                                        query string parameter.
                                    </div>
                                    <div className="col col4">Session cookie <br/>First party</div>
                                </li>
                                <li className="cookies-list__item">
                                    <div className="col col1">Google Analytics (GA)</div>
                                    <div className="col col2">Google Analytics</div>
                                    <div className="col col3">These cookies are used by Google Analytics to collect
                                        information about how visitors use our website. We use the information to
                                        compile reports and to help us improve the website. The cookies collect
                                        information in an anonymous form, including the number of visitors to the
                                        website, where visitors have come to the website from and the pages they
                                        visited. We do not use any of the information that is provided to Google
                                        Analytics to identify visitors to our website.
                                    </div>
                                    <div className="col col4">Persistent cookies. <br/>Third party <br/>Click here for
                                        Google’s privacy policy in respect of Google
                                        Analytics <br/>https://policies.google.com/privacy <br/>You may opt out of
                                        tracking by Google Analytics by visiting this link.
                                    </div>
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
                        <h6>Use of IP addresses and web logs</h6>
                        <p>We may also use your IP address and browser type to help diagnose problems with our server,
                            to administer our Website and to improve the service we offer to you. An IP address is a
                            numeric code that identifies your computer on the internet. Your IP address might also be
                            used to gather broad demographic information.</p>
                        <p>We may perform IP lookups to determine which domain you are coming from (e.g. google.com) to
                            more accurately gauge our users’ demographics.</p>
                        <h6>Cookies policy does not cover third party websites</h6>
                        <p>Please note that this cookies policy does not apply to, and we are not responsible for, the
                            privacy practices of third-party websites which may be linked to this Website.</p>
                        <h6>Changes to the Cookies Policy</h6>
                        <p>We may update this cookies policy and we would encourage you to review the policy from time
                            to time to stay informed of how we are using cookies. This cookies policy was last updated
                            on 21st August 2018.</p>
                    </div>
                    <div className="cookies-bg"></div>
                </section>
                <DocsInfoComponent />
                <TimerComponent />
            </main>
        )
    }
}

export default CookiesPolicyPage;