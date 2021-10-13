import React, { Component } from 'react'
import './profitability_challenge.css'
import company_saves from '../../icons/profitability challange/company_saves.png'
import new_laptop from '../../icons/profitability challange/new_laptop.png'
import profitability_banner from '../../icons/profitability challange/profitability_banner.jpg'
import { PopupButton } from "react-calendly";

export default class Profitability_challenge extends Component {
    render() {
        return (
            <div className="profitability_challenge_main_div">
                <div className="profitability_challenge_main_banner">
                    <img src={profitability_banner} alt="profitability_banner"/>
                </div>

                <div className="profitability_challenge_second_div">
                    <div className="first_title">
                        Here is the challenge !
                    </div>
                    <div className="second_title">
                        We commit to save  ₹1- 10 lakh<br/>
                        on your next purchase using this tool
                    </div>
                </div>

                <div className="profitability_challenge_third_div">
                    <div className="desc_div">
                        If We Loose<br/> 
                        THE CHALLENGE
                    </div>
                    <div className="image_div">
                        <div className="your_company">
                            YOUR COMPANY GETS
                        </div>
                        <div>
                            <img src={new_laptop} alt="new_laptop"/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="profitability_challenge_third_div">
                    <div className="desc_div">
                        If We Win<br/> 
                        THE CHALLENGE
                    </div>
                    <div className="image_div">
                        <div>
                            <img src={company_saves} alt="company_saves"/>
                        </div>
                        <div className="subscribe">
                            Now You can Subscribe EFFYBUY
                            <div className="software">
                                Software for ₹ 4,999/-
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profitability_challenge_three_steps_main_div">
                    <div className="three_steps_title">
                        3 Simple Steps to Participate
                    </div>
                    <div className="three_steps">
                        <div className="ind_step">
                            <div className="step_number">
                                1
                            </div>
                            <div className="step_desc">
                                Sign up for Demo<br/>
                                to activate Challenge
                            </div>
                        </div>

                        <div className="ind_step">
                            <div className="step_number">
                                2
                            </div>
                            <div className="step_desc">
                                Our Team Will Setup<br/>
                                & Go Live in 10 Mins<br/>
                                & Hand Hold You for a<br/>
                                Purchase Pilot Run
                            </div>
                        </div>

                        <div className="ind_step">
                            <div className="step_number">
                                3
                            </div>
                            <div className="step_desc">
                                Save ₹ 1- 10 Lakh<br/>
                                (or)<br/>
                                Get a Free Laptop
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* <button type="button" class="btn btn-dark">SIGNUP FOR DEMO</button> */}
                        
                  {/* <div className="signup"> */}
                    <PopupButton
                      url="https://calendly.com/bizgamsupport/effybuy"
                      text="SIGNUP FOR DEMO"
                      pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '008ed9',
                        textColor: '4d5055',
                      }}
                      styles={{
                        color:"white",
                        backgroundColor: '#212529',
                        border:"none",
                        fontSize:"25px",
                        borderRadius:"6px",
                        padding:"5px 20px"
                        }}/>
                  {/* </div> */}
                    </div>
                    
                    <div className="so_basically">
                        So Basically,<br/>
                        Head You Win and Tail You Win, BEAT THAT!<br/>
                        Are you up for the challenge ?
                    </div>
                </div>



            </div>
        )
    }
}
