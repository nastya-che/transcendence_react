import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Page404 extends Component{

    render(){


        return(
            <main className="content">
                <div className="box-error">
                    <div className="wrapper">
                        <div className="box-error__wrap">
                            <div className="box-error__title">404</div>
                            <div className="box-error__subtitle">
                                <strong>Page not found</strong><br/>
                                We can’t seem to find the page you are looking for.
                            </div>
                            <Link to="/" className="button">GO TO HOMEPAGE</Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Page404;