import React, { Component } from "react";
import { HashRouter as Router, Route, Link, StaticRouter, Switch, Redirect} from "react-router-dom";
import '../assets/scss/style.scss';

// require('../assets/js/animate-css');
// require('../assets/js/jquery.fancybox');
// require('../assets/js/jquery.formstyler');
// require('../assets/js/jquery.mCustomScrollbar');
// require('../assets/js/lottie');
// require('../assets/js/slick');
// require('../assets/js/sly-option');
// require('../assets/js/sly.min');
// require('../assets/js/wow.min');

import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";

import HomePage from './HomePage/HomePage';
import PlatformPage from './PlatformPage/PlatformPage';
import TokenPage from "./TokenPage/TokenPage";
import TeamPage from "./TeamPage/TeamPage";
import DocsInfoComponent from "./CommonElements/DocsInfo/DocsInfoComponent";
import TimerComponent from "./CommonElements/Timer/TimerComponent";
import Page404 from "./Page404/Page404";
import PrivacyPolicyPage from "./FooterPages/PrivacyPolicyPage";
import CookiesPolicyPage from "./FooterPages/CookiesPolicyPage";
import DisclaimersPage from "./FooterPages/DisclaimersPage";
import SideBarComponent from "./SideBar/SideBarComponent";


class App extends Component {

    render() {
        return (
            <Router>
                <div className={'main-wrapper'}>
                    <header className={'fixed'}>
                        <HeaderComponent />
                    </header>
                    <SideBarComponent />
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/token' component={TokenPage} />
                            <Route path="/platform" component={PlatformPage} />
                            <Route path="/team" component={TeamPage} />

                            <Route path='/privacy' component={PrivacyPolicyPage} />
                            <Route path='/cookies-policy' component={CookiesPolicyPage} />
                            <Route path='/disclaimers' component={DisclaimersPage} />

                        </Switch>

                    <footer className={'footer'}>
                        <FooterComponent />
                    </footer>
                </div>

            </Router>
        );
    }
}

export default App;