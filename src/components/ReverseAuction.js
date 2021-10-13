import React, { Component } from 'react'
import './reverseAuction.css'
// import Video from './Homepage/Video'
// import { Stepper, Step } from 'react-form-stepper';
import Stepper from 'react-stepper-horizontal'

export default class ReverseAuction extends Component {
    state={
        color:"red",
        step:1,
        imageText:"Sign up"
    }

    changeStep(val,text){
        // alert("hoi")
        this.setState({
            step:val,
            imageText: text
        })
    }
    changeColor(e){
        this.setState({
            color:e.target.id
        })
    }
    render() {
        return (
            <div className="Reverse_auction_main_div">
                <div className="Reverse_auction_banner">
                    <div className="Reverse_auction_banner_text">
                        Always buy right.
                    </div>
                    <div className="Reverse_auction_banner_sub_text">
                        With Effybuy's state-of-the-art purchasing platform with automated reverse auction and RFQ.
                    </div>
                </div>

                {/* <div className="Reverse_auction_video">
                    <Video/>
                </div> */}

                <div className="reverse_auction_second_slide">
                    <div className="reverse_auction_second_slide_image">
                        image_here
                    </div>
                    <div className="reverse_auction_second_slide_desc">
                        <div className="reverse_auction_second_slide_desc_title">
                            Instantly automate all your purchases
                        </div>
                        <div className="reverse_auction_second_slide_desc_details">
                            With 2 purchase options, RFQ and reverse auction, all your purchasing 
                            activities can be automated.
                        </div>
                        <div className="reverse_auction_second_slide_desc_buttons">
                            <button className="btn btn-primary">Learn more about RFQ</button>
                            <button className="btn btn-primary">Learn more about Reverse auction</button>
                        </div>
                    </div>
                </div>


                <div className="reverse_auction_third_slide">
                    <div className="reverse_auction_third_slide_desc">
                        <div className="reverse_auction_third_slide_desc_title">
                            Get on-boarded in less than 10 minutes
                        </div>
                        <div className="reverse_auction_third_slide_desc_details">
                            EffyBuy is extremely easy to sign-up and use. You can set it p on your own in less than 
                            half an hour, or if you're a little low techie, you can always set it up with the help 
                            of your customer support team via an online meeting. 
                        </div>
                    </div>
                    <div className="reverse_auction_third_slide_image">
                        image_here
                    </div>
                </div>

                <div className="reverse_auction_four_step_div">
                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_image">
                            <img src="https://credflow.in/assets/images/2.png" alt=""></img>
                        </div>
                        <div className="reverse_auction_step_text">
                            <div className="reverse_auction_step_text_title">      
                                Powerful Automation
                            </div>
                            <div className="reverse_auction_step_text_desc">
                                Instantly set-up reverse auctions with our easy 
                                to use reverse auction platform
                            </div>
                            <div className="reverse_auction_step_text_points">
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Automated Payment Reminders on SMS, Email, Call
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Auto sharing of Invoices with Debtors
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Autoallocation of Payments to Invoices
                                    </div>
                            </div>
                        </div>
                    </div>
{/* TWO */}
                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_text">
                            <div className="reverse_auction_step_text_title">      
                                Understand Your Finance
                            </div>
                            <div className="reverse_auction_step_text_desc">
                                Hassle free and free on-boarding
                            </div>
                            <div className="reverse_auction_step_text_points">
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Ageing Analysis of Debtors
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Avg Collection Periods, Debtor behavior
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Projected Cashflows
                                    </div>
                            </div>
                        </div>
                        <div className="reverse_auction_step_image">
                            <img src="https://credflow.in/assets/images/3.svg" alt=""></img>
                        </div>
                    </div>
                    {/* THREE */}
                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_image">
                            <img src="https://credflow.in/assets/images/4.png" alt=""></img>
                        </div>
                        <div className="reverse_auction_step_text">
                            <div className="reverse_auction_step_text_title">      
                                Seamless Team Collaboration
                            </div>
                            <div className="reverse_auction_step_text_desc">
                                You don't have to break the bank with our very affordable pricing
                            </div>
                            <div className="reverse_auction_step_text_points">
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Give Access to Users Anywhere
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        One Tap sharing of Information with Customers
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Create and manage task in CRM
                                    </div>
                                    {/* <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Track History of Communications with Customers
                                    </div> */}
                            </div>
                        </div>
                    </div>
{/* FOUR */}
                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_text">
                            <div className="reverse_auction_step_text_title">      
                                Powerful Cashflow Management
                            </div>
                            <div className="reverse_auction_step_text_desc">
                                Promote transparency within the Organisation
                            </div>
                            <div className="reverse_auction_step_text_points">
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Create incentive scheme for Debtors
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Control credit extended and avoid bad debts
                                    </div>
                                    <div>
                                        <img src="https://credflow.in/assets/images/check.svg" alt=""></img>
                                        Auto generated business reports for Promoters
                                    </div>
                            </div>
                        </div>
                        <div className="reverse_auction_step_image">
                            <img src="https://credflow.in/assets/images/5.png" alt=""></img>
                        </div>
                    </div>

                </div>

                <div className="reverse_auction_salient_features_div">
                    <div className="reverse_auction_salient_features_title">
                        Salient features
                    </div>
                    <div className="reverse_auction_salient_features_steps_div">
                    <div >
                        <div>
                            <span id="red" onClick={(e)=>{this.changeColor(e)}}>
                                Easy to use, both for buyer and seller
                            </span>
                        </div>
                        <div>
                            <span id="blue" onClick={(e)=>{this.changeColor(e)}}>
                                Simple on-boarding process
                            </span>
                        </div>
                        <div>
                            <span id="green" onClick={(e)=>{this.changeColor(e)}}>
                                Affordable pricing
                            </span>
                        </div>
                        <div>
                            <span id="grey" onClick={(e)=>{this.changeColor(e)}}>
                                1 Week ROI Guarentee
                            </span>
                        </div>

                    </div>
                    <div className="reverse_auction_salient_features_images_div" style={{backgroundColor:this.state.color}}>
                        image_here
                    </div>
                    </div>
                </div>

                <div className="reverse_auction_how_it_works_div">
                    <div className="reverse_auction_how_it_works_title">
                        How it works?
                    </div>

                    <div className="reverse_auction_how_it_works_image">
                        {this.state.imageText}
                    </div>

                    <div className="reverse_auction_how_it_works_radio_buttons">
                    {/* <Stepper activeStep={this.state.step} activeColor="#008ed9">
                        <Step label="Children Step 1" id="1" onClick={(e)=>{this.changeStep(e)}}/>
                        <Step label="Children Step 2" id="2" onClick={(e)=>{this.changeStep(e)}}/>
                        <Step label="Children Step 3" id="3" onClick={(e)=>{this.changeStep(e)}}/>
                        <Step label="Children Step 4" id="4" onClick={(e)=>{this.changeStep(e)}}/>
                    </Stepper> */}
                    <Stepper completeColor="#008ed9" activeColor="#cccccc" defaultColor="#cccccc" 
                        completeTitleColor="#008ed9" activeTitleColor="#cccccc" defaultTitleColor="#cccccc" 
                        defaultBarColor="#cccccc" completeBarColor="#008ed9" 
                        steps={ [{title: 'Sign up',onClick:()=>{(this.changeStep(1,'Sign up'))}}, 
                                {title: 'Integrate',onClick:()=>{this.changeStep(2,'Integrate')}}, 
                                {title: 'Conduct Auction',onClick:()=>{this.changeStep(3,'Conduct Auction')}}, 
                                {title: 'Increase Profit',onClick:()=>{this.changeStep(4,'Increase Profit')}}] } 
                        activeStep={ this.state.step } />
                    </div>
                </div>

                <div className="reverse_auction_industries_div">
                    <div className="reverse_auction_industries_div_title">

                    </div>
                    <div className="reverse_auction_industries">

                    </div>
                    <div className="reverse_auction_industry">
                        <div className="reverse_auction_industry_icon">

                        </div>
                        <div className="reverse_auction_industry_title">
                            
                        </div>
                    </div>

                    <div className="reverse_auction_industry">
                        <div className="reverse_auction_industry_icon">

                        </div>
                        <div className="reverse_auction_industry_title">

                        </div>
                    </div>

                    <div className="reverse_auction_industry">
                        <div className="reverse_auction_industry_icon">

                        </div>
                        <div className="reverse_auction_industry_title">

                        </div>
                    </div>

                    <div className="reverse_auction_industry">
                        <div className="reverse_auction_industry_icon">

                        </div>
                        <div className="reverse_auction_industry_title">

                        </div>
                    </div>

                </div>

                <div className="reverse_auction_stories_div">
                    <div className="reverse_auction_story">
                        <div className="reverse_auction_story_image">
                            image_here
                        </div>
                        <div className="reverse_auction_story_description_div">
                            <div className="reverse_auction_story_description_title">
                                Save upto 10% on your purchasing
                            </div>
                            <div className="reverse_auction_story_description_details">
                                Using our state of the art forward auction tool that has the best features, etc. 
                            </div>
                        </div>
                    </div>

                    <div className="reverse_auction_story">
                        <div className="reverse_auction_story_description_div">
                            <div className="reverse_auction_story_description_title">
                                Know your suppliers
                            </div>
                            <div className="reverse_auction_story_description_details">
                                Using our state of the art forward auction tool that has the best features, etc. 
                            </div>
                        </div>
                        <div className="reverse_auction_story_image">
                            image_here
                        </div>
                    </div>

                    <div className="reverse_auction_story">
                        <div className="reverse_auction_story_image">
                            image_here
                        </div>
                        <div className="reverse_auction_story_description_div">
                            <div className="reverse_auction_story_description_title">
                                Learn unimaginable insights of your selling patterns
                            </div>
                            <div className="reverse_auction_story_description_details">
                                Using our state of the art forward auction tool that has the best features, etc.
                            </div>
                        </div>
                    </div>

                    <div className="reverse_auction_story">
                        <div className="reverse_auction_story_description_div">
                            <div className="reverse_auction_story_description_title">
                                How does reverse auction help you and your Organisation?
                            </div>
                            <div className="reverse_auction_story_description_details">

                            </div>
                        </div>
                        <div className="reverse_auction_story_image">
                            image_here
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
