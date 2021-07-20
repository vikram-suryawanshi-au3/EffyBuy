import React, { Component } from 'react'
import './reverseAuction.css'
import Video from './Homepage/Video'
// import { Stepper, Step } from 'react-form-stepper';
import Stepper from 'react-stepper-horizontal'

export default class ReverseAuction extends Component {
    state={
        color:"red",
        step:3
    }

    changeStep(e){
        alert(e.target.id * 1)
        this.setState({
            step:e.target.value * 1
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
                        Get the best prices for<br/>your products with #1<br/>Reverse Auction tool.
                    </div>
                </div>

                <div className="Reverse_auction_video">
                    <Video/>
                </div>

                <div className="reverse_auction_four_step_div">
                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_image">

                        </div>
                        <div className="reverse_auction_step_text">
                            Instantly set-up reverse auctions with our easy to use reverse auction platform
                        </div>
                    </div>

                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_text">
                            Hassle free and free on-boarding
                        </div>
                        <div className="reverse_auction_step_image">
                        </div>
                    </div>

                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_image">

                        </div>
                        <div className="reverse_auction_step_text">
                            You don't have to break the bank with our very affordable pricing
                        </div>
                    </div>

                    <div className="reverse_auction_step">
                        <div className="reverse_auction_step_text">
                            Promote transparency within the Organisation
                        </div>
                        <div className="reverse_auction_step_image">

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
                        image here
                    </div>
                    </div>
                </div>

                <div className="reverse_auction_how_it_works_div">
                    <div className="reverse_auction_how_it_works_title">
                        How it works?
                    </div>

                    <div>

                    </div>

                    <div className="reverse_auction_how_it_works_radio_buttons">
                    {/* <Stepper activeStep={this.state.step} activeColor="#008ed9">
                        <Step label="Children Step 1" id="1" onClick={(e)=>{this.changeStep(e)}}/>
                        <Step label="Children Step 2" id="2" onClick={(e)=>{this.changeStep(e)}}/>
                        <Step label="Children Step 3" id="3" onClick={(e)=>{this.changeStep(e)}}/>
                        <Step label="Children Step 4" id="4" onClick={(e)=>{this.changeStep(e)}}/>
                    </Stepper> */}
                    <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ 1 } />
                    </div>

                </div>

                <div className="reverse_auction_how_it_works_div">

                </div>
                
            </div>
        )
    }
}
