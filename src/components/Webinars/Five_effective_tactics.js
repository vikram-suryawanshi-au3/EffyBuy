import React, { Component } from 'react'
import './five_effective_tactics.css'
import banner_image from '../../icons/Webinar/webinar_automate_your.jpg'

export default class FiveEffectiveTactics extends Component {
    state={
        submited : false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submited: true,
        });
      };


    render() {
        return (
            <div className="five_effective_tactics_main_div" >
                <div className="webinar_image">
                    <img src={banner_image} alt="AutomateYourPurchaseProcessBanner"/>
                </div>
                {/* <div className="webinar_title">
                    Automate Your Purchase Process<br/><span>Save 5-10% More</span>
                </div>
                <div className="webinar_sub_title">
                    Is your purchase able to contribute to profits?
                </div>

                <div className="webinar_timing">
                    <span>Oct 27, 2021</span>|
                    <span>2:00 pm IST</span>|
                    <span>40 minutes</span>
                </div> */}

                <div className="webinar_content_div">
                    <div className="webinar_content" >
                        {/* Purchases being a sub set of procurement stands at a crossroads. 
                        So how should companies respond?<br/>
                        They can carry on as normal and by the way fade into insignificance or ought to 
                        rethink how they would like to bring in some change to the processes within 
                        purchase and make difference to the profits.<br/>
                        This is our new rendezvous where we will discuss with you ‘Purchase automation’ and 
                        its value to your company, with some of the finest experts from our organization.  */}
                        This is our new rendezvous where we will discuss with you on how to ‘Automate your purchase 
                        process to save 5-10% more’, with some of the finest experts from our organization. 
                        <ul>
                            <div>
                                In this exclusive webinar, we will cover: 
                            </div>
                            <br/>
                            <li><i className="fas fa-hand-point-right"></i>How to increase your purchase savings? </li>
                            <li><i className="fas fa-hand-point-right"></i>How can purchase contribute to profits? </li>
                            <li><i className="fas fa-hand-point-right"></i>How to get actionable analytics for future purchases?</li>
                        </ul>
                        <div className="do_register">
                            Do register for game changing webinar for your business!
                        </div>
                    </div>
                    <div className="webinar_form"> 
                    {/* <script type="text/javascript">var submitted=false;</script> */}
{/* <iframe name="hidden_iframe" title="webinar_form" id="hidden_iframe" style={{"display":"none"}} 
onLoad="if(submitted) {window.location='thankyou.html';}"></iframe> */}
                    {/* <iframe title="webinar_form" src="https://docs.google.com/forms/d/e/1FAIpQLSdTCs1x4c71tNSRxqvMQgEzX_ExErmvWqdvabe5_dXFWg1iAg/viewform?embedded=true" width="100%" height="1000"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                        <form target="_blank" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTCs1x4c71tNSRxqvMQgEzX_ExErmvWqdvabe5_dXFWg1iAg/formResponse" method="post">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter Name" name="entry.1229557749" required/>
                            </div>
                            <div class="form-group">
                                <label for="work_email">Work Email</label>
                                <input type="email" class="form-control" id="work_email" placeholder="Work Email Id" name="entry.1462387956" required/>
                            </div>
                            <div class="form-group">
                                <label for="work_phone">Work Phone</label>
                                <input type="number" class="form-control" id="work_phone" placeholder="Work Phone No." name="entry.1417793228" required/>
                            </div>
                            <div class="form-group">
                                <label for="company_name">Company Name</label>
                                <input type="text" class="form-control" id="company_name" placeholder="Company Name" name="entry.1685260071" required/>
                            </div>
                            <div style={{"textAlign":"center"}}>
                                <button type="submit" className="btn btn-primary">Register Now</button>
                            </div>
                        </form>
                        {/* <form target="_blank" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTCs1x4c71tNSRxqvMQgEzX_ExErmvWqdvabe5_dXFWg1iAg/formResponse" method="post">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter Name" name="entry.1229557749" required/>
                            </div>
                            <div class="form-group">
                                <label for="work_email">Work Email</label>
                                <input type="email" class="form-control" id="work_email" placeholder="Work Email Id" name="entry.1462387956" required/>
                            </div>
                            <div class="form-group">
                                <label for="work_phone">Work Phone</label>
                                <input type="number" class="form-control" id="work_phone" placeholder="Work Phone No." name="entry.1417793228" required/>
                            </div>
                            <div class="form-group">
                                <label for="company_name">Company Name</label>
                                <input type="text" class="form-control" id="company_name" placeholder="Company Name" name="entry.1685260071" required/>
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
