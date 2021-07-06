import React, { Component } from 'react'
import './dataSecurity.css'

export default class DataSecurity extends Component {
    render() {
        return (
            <div className="data_security_main_div">
                <div className="data_security_title_div">
                    <div className="data_security_title">
                        Your Data is 100% Secure
                    </div>
                    <div className="data_security_subtitle">
                        We understand you are concerned about your data privacy <br/>
                        thats why we have Multi-layer security
                    </div>
                </div>
                <div className="data_security_points_div">
                        <div>
                            <div>
                                <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                            </div>
                            <div className="data_security_points_individual_point">
                                Hosted on Tier IV SSAE 16<br className="data_security_break"/> Type II Data Centre
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                            </div>
                            <div>
                                End-to-End<br className="data_security_break"/> Encryption
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                            </div>
                            <div>
                                Multi-level authentication<br className="data_security_break"/> for data access
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                            </div>
                            <div>
                                Additional Safety<br className="data_security_break"/> of AWS Cloud
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
