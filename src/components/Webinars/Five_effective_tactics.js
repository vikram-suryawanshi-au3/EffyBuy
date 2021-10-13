import React, { Component } from 'react'
import './five_effective_tactics.css'
// import dummy_image from '../../icons/Webinar/dummy_image.jpg'

export default class FiveEffectiveTactics extends Component {
    render() {
        return (
            <div className="five_effective_tactics_main_div" >
                <div className="webinar_title">
                    5 effective tactics to improve ROI<br/>
                    with automation
                </div>
                <div className="webinar_sub_title">
                    Is your purchase able to contribute to profits?
                </div>

                <div className="webinar_timing">
                    <span>Oct 27, 2021</span>|
                    <span>2:00 pm IST</span>|
                    <span>40 minutes</span>
                </div>

                <div className="webinar_content_div">
                    <div className="webinar_content" >
                        Purchases being a sub set of procurement stands at a crossroads. 
                        So how should companies respond?<br/>
                        They can carry on as normal and by the way fade into insignificance or ought to 
                        rethink how they would like to bring in some change to the processes within 
                        purchase and make difference to the profits.<br/>
                        This is our new rendezvous where we will discuss with you ‘Purchase automation’ and 
                        its value to your company, with some of the finest experts from our organization. 
                        In this exclusive webinar, we will cover:
                        <ul>
                            <li>How to beat competition?</li>
                            <li>How to unleash your buying power?</li>
                            <li>How to increase your purchase savings?</li>
                            <li>How to make contributions to profits?</li>
                            <li>How to improve your ROI?</li>
                        </ul>
                    </div>
                    <div className="webinar_form">
                    <iframe title="webinar_form" src="https://docs.google.com/forms/d/e/1FAIpQLSdTCs1x4c71tNSRxqvMQgEzX_ExErmvWqdvabe5_dXFWg1iAg/viewform?embedded=true" width="100%" height="500"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        {/* <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Example input"/>
                            </div>
                            <div class="form-group">
                                <label for="work_email">Work Email</label>
                                <input type="email" class="form-control" id="work_email" placeholder="Work Email Id"/>
                            </div>
                            <div class="form-group">
                                <label for="work_phone">Work Phone</label>
                                <input type="number" class="form-control" id="work_phone" placeholder="Work Phone No."/>
                            </div>
                            <div class="form-group">
                                <label for="company_name">Company Name</label>
                                <input type="text" class="form-control" id="company_name" placeholder="Company Name"/>
                            </div>
                            <div class="form-group">
                                <label for="designation">Designation</label>
                                <input type="text" class="form-control" id="designation" placeholder="Designation"/>
                            </div>
                            <div class="form-group">
                                <label for="country">Country</label>
                                <input type="text" class="form-control" id="country" placeholder="Country"/>
                            </div>
                            <div style={{"textAlign":"center"}}>
                                <button type="submit" className="btn btn-primary">Register Now</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        )
    }
}
