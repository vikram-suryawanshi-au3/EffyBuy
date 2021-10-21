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
{/* <iframe title="webinar_form" width="360" height="240" src="https://meeting.zoho.in/meeting/register/embed?sessionId=1385422878" frameborder="0"> </iframe> */}
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

<form action='https://meeting.zoho.in/meeting/WebForm' name="WebForm308248000000013022" method='POST' 
		                    accept-charset='UTF-8' target="_blank">
                            <input type='text' style={{'display':'none'}} name='xnQsjsdp' value='3fef1381d1076883454f9b8f5f77f108014feb7d2538303befa77e76ba211ff4' /> 
                            <input type='hidden' name='zc_gad' id='zc_gad' value='' /> 
                            <input type='text' style={{'display':'none'}} name='xmIwtLD' value='ac97d0c0ecb4151dfcfbab686950dab8daad6b926382f2eb178fd2774915828a' /> 
                            <input type='text'  style={{'display':'none'}} name='actionType' value='UmVnaXN0cmF0aW9ucw==' /> 
                            <input type='text' style={{'display':'none'}} name='returnURL' value='https://meeting.zoho.in/postregister' /> 
                            <input type='text' style={{'display':'none'}} name='sysId' value='308248000000013008' /> 
                            <input type='text' style={{'display':'none'}} name='isEmbedForm' value='true' />

                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type='text'class="form-control" name='NAME' placeholder="Enter Name" required/>
                            </div>
                            <div class="form-group">
                                <label for="name">Last Name</label>
                                <input type='text'class="form-control" name='REGISTRATIONCF1' placeholder="Enter Last Name" required/>
                            </div>
                            <div class="form-group">
                                <label for="work_email">Work Email</label>
                                <input type="email" class="form-control" id="work_email" placeholder="Enter Work Email Id" name='EMAIL' required/>
                            </div>
                            <div class="form-group">
                                <label for="work_phone">Work Phone</label>
                                <input type="number" class="form-control" id="work_phone" placeholder="Enter Work Phone No."name='REGISTRATIONCF7' required/>
                            </div>
                            <div class="form-group">
                                <label for="organization">Organization</label>
                                <input type="text" class="form-control" id="organization" placeholder="Enter Organization" name='REGISTRATIONCF8' required/>
                            </div>
                            <div style={{"textAlign":"center"}}>
                                {/* <button type="submit" className="btn btn-primary">Register Now</button> */}
                                <input type='submit' name='save' value='Register Now' className="btn btn-primary" style={{"margin":"5px 20px"}}></input> 
                                <input type='reset' name='reset' value='Reset' className="btn btn-primary" style={{"margin":"5px 20px"}}></input> 
                            </div>
                        </form>
                        
                    </div>

                </div>
            </div>
        )
    }
}
