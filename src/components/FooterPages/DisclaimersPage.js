import React, {Component} from 'react';
import DocsInfoComponent from "../CommonElements/DocsInfo/DocsInfoComponent";
import TimerComponent from "../CommonElements/Timer/TimerComponent";

class DisclaimersPage extends Component{

    render(){

        return(
            <main className={'content disclaimers'}>
                <section className="disclaimers-main">
                    <div className="wrapper">
                        <h1>Disclaimers</h1>
                        <h6>Legal Disclaimer – TSD Website</h6>
                        <p>
                            By accessing or using this website, you agree to the terms of use of our website set out
                            below. The Terms of Use include our disclaimer and our privacy policy and any other terms or
                            conditions on this website.
                        </p>
                        <p>
                            We may change the Terms of Use at our discretion and without notice. By continuing to use
                            our website you accept the Terms of Use as they apply from time to time. A copy of our
                            current Terms of Use is displayed on our website at all times. This disclaimer is in no way
                            limited or altered by any other terms or conditions on this website.
                        </p>
                        <h6>Website material for general information purposes only</h6>
                        <p>
                            This website is operated by and on behalf of Transcendence Group Singapore (Company).
                        </p>
                        <p>
                            By accessing this website and viewing the information and other material which it contains
                            or to which it provides access you agree to follow and to be bound by these terms and
                            conditions. We may, at our sole discretion, vary or modify these terms and conditions
                            without notice. Any subsequent access to, or use of, the website by you will constitute an
                            acceptance of those modifications.
                        </p>
                        <p>
                            The information contained on this website is of a general nature only and does not take into
                            account your financial circumstances, needs and objectives. All information provided on this
                            website is subject to change without notice. You should read the Company’s documents and
                            other important information available on our website and seek independent, professional tax
                            and financial advice before making any decision based on this information.
                        </p>
                        <p>
                            This information is not an offer or solicitation for the purchase of Tokens, securities,
                            units or investments, unless expressly stated otherwise. The Company does not guarantee the
                            repayment of capital or any particular return from, or any increase in, the value of any
                            products unless otherwise expressly agreed. Past performance of any product described on
                            this website is not a reliable indication of future performance.
                        </p>
                        <p>
                            This information is not an offer or solicitation for the purchase of Tokens, securities,
                            units or investments, unless expressly stated otherwise. The Company does not guarantee the
                            repayment of capital or any particular return from, or any increase in, the value of any
                            products unless otherwise expressly agreed. Past performance of any product described on
                            this website is not a reliable indication of future performance.
                        </p>
                        <p>
                            While the Company provides the information in good faith, it accepts no responsibility for
                            the accuracy, completeness or timeliness of the information. All information displayed on
                            the website, including but not limited to product and service information, is subject to
                            change without notice. The Company does not represent or warrant that this website or any
                            linked site is free from computer viruses nor does it take responsibility for any which may
                            exist, however they may be transferred or become manifest, or for any loss or damage of any
                            sort (direct or indirect) which may result. The Company disclaims any liability for loss,
                            damage, cost or other expense arising either directly or indirectly as a result of reliance
                            on, use of or inability to use any information displayed on this website, to the extent that
                            such liability is not excluded by law.
                        </p>
                        <h6>TSD Token</h6>
                        <p>
                            In accordance with laws of the jurisdiction where the TSD Tokens are being issued, the TSD
                            Token is a utility token and is not intended to be defined as a security in its jurisdiction
                            of creation, to the best of knowledge at the date of this disclaimer.
                        </p>
                        <p>
                            As part of the Know Your Customer procedure (KYC) and compliance with anti-money laundering
                            practices, anyone wishing to acquire TSD Tokens will have to provide the Company or its KYC
                            service supplier with the KYC documents and/or information requested at the dedicated Token
                            Offering website prior to purchasing TSD Tokens. The Company has final discretion on whether
                            to approve any purchaser of TSD Tokens.
                        </p>
                        <h6>Purchasing TSD Tokens</h6>
                        <p>
                            Instructions on how to purchase the TSD Tokens is subject to change and will be published on
                            the website or in the Whitepaper. To investigate purchase the Token, please access the Token
                            Sale Page form and follow the instructions. Payment must be made by transfer of Ethereum
                            (ETH) to the wallet address provided. The Company may offer facilities to pay with other
                            cryptocurrencies or FIAT. The Tokens are denominated in USD with a fixed pricing, the amount
                            of ETH that is required to purchase a TSD Token may vary each day based on the fluctuation
                            in the ETH:USD rate. The Company uses an average ETH:USD conversion rate averaged from a
                            number of providers, this rate may not match other published rates.
                        </p>
                        <p>
                            The Company may receive less than the stated hard capital due to the costs of offer,
                            brokerage, OTC and other exchange related costs. There is a conversion mechanism that
                            receives FX rate data from multiple sources and averaged. The rate used may be different
                            from the published rates due to a small percentage buffer.
                        </p>
                        <h6>Jurisdiction</h6>
                        <p>
                            The token offer is NOT open to residents or domiciliaries of the United States of America,
                            People’s Republic of China, or any other countries where token offerings are expressly
                            forbidden. The Company will not accept investments from any U.S. person and participation in
                            the potential Token offering will not be permitted for any U.S. person other than those who
                            have been specifically approved by the Company. No registration statement has been filed
                            with the United States Securities and Exchange Commission or any U.S. state securities
                            authority with respect to this token offer. None of the Tokens have been or will be
                            registered under the United States Securities Act of 1933.


                        </p>
                    </div>
                </section>
                <DocsInfoComponent />
                <TimerComponent />
            </main>
        )
    }

}

export default DisclaimersPage;