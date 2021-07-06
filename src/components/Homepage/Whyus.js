import React, { Component } from 'react'
import './whyus.css'
import Descover_the_Right_Supplier from '../../icons/Why Us Icons/Negotiation icon.png'
import Practical_Pricing from '../../icons/Why Us Icons/Practical Pricing.png'
// import Analytics_Tracking from '../../icons/Why Us Icons/analytics and tracking.png'
// import Sustanable_Solutions from '../../icons/Why Us Icons/Sustain-solution.png'
// import Simply_Documentation from '../../icons/Why Us Icons/Simply Documentation.png'
import Adequate_Profit from '../../icons/Why Us Icons/Adequate Profit.png'
import $ from 'jquery'

export default class Whyus extends Component {
    state={
        animate:true
    }
    componentDidMount(){

        if(this.state.animate){
            this.why_us_animation = setInterval(() => {
                $(".why_us_main").animate({scrollLeft: 200}, 2000);
                $(".why_us_main").animate({scrollLeft: 200}, 2000);
                $(".why_us_main").animate({scrollLeft: 460}, 2000);
                $(".why_us_main").animate({scrollLeft: 460}, 2000);
                $(".why_us_main").animate({scrollLeft: 0}, 2000);
                $(".why_us_main").animate({scrollLeft: 0}, 2000);
                },12000)
        }else{
            clearInterval(this.why_us_animation)
        }
        
    }

    stopAnimate(e){
        clearInterval(this.why_us_animation)
        this.setState({
            animate:false
        })
    }

    componentWillMount(){
        clearInterval(this.why_us_animation)
    }
    render() {
        return (
            <div className="why_effybuy_main_div">

                <h1 className="why_effybuy_title">Why <span style={{color:"#008ed9"}}>EffyBuy</span></h1>
            <div className="why_us_main" onClick={(e)=>{this.stopAnimate(e)}}>
                <div className="why_us_sub" onClick={(e)=>{this.stopAnimate(e)}}>
                    <div className="why_us_icon">
                        <img src={Descover_the_Right_Supplier} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Automate<br/>Supplier Selection
                    </div>
                    <div className="why_us_description">
                        Automate supplier selection from master/plugin
                    </div>
                </div>
                
                <div className="why_us_sub">
                    <div className="why_us_icon">
                        <img src={Practical_Pricing} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Automate<br/>Negotiations	
                        {/* Practical <br/> Pricing */}
                    </div>
                    <div className="why_us_description">
                        {/* Optimize your costs 2-5% through manufacturers bidding */}
                        Save yourself from trouble<br/>of incompetent negotiations
                    </div>
                </div>

                {/* <div className="why_us_sub">
                    <div className="why_us_icon">
                        <img src={Analytics_Tracking} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Analytics & Tracking
                    </div>
                    <div className="why_us_description">
                        Analysis and track your purchases with regular updates
                    </div>
                </div> */}

                {/* <div className="why_us_sub">
                    <div className="why_us_icon">
                        <img src={Sustanable_Solutions} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Sustainable Solutions
                    </div>
                    <div className="why_us_description">
                        Get a complete view of the end to end procurement tool
                    </div>
                </div> */}

                {/* <div className="why_us_sub">
                    <div className="why_us_icon">
                        <img src={Simply_Documentation} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Simple Documentation
                    </div>
                    <div className="why_us_description">
                        Fewer calls and emails, but easy and impactful action
                    </div>
                </div> */}

                {/* <div className="why_us_sub">
                    <div className="why_us_icon">
                        <img src={Adequate_Profit} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Adequate <br/> Profit
                    </div>
                    <div className="why_us_description">
                        Increase your Profit through purchase by 20 to 30%
                    </div>
                </div> */}

                <div className="why_us_sub">
                    <div className="why_us_icon">
                        <img src={Adequate_Profit} alt="Descover the Right Supplier"></img>
                    </div>
                    <div className="why_us_title">
                        Increased<br/>Profit
                        {/* Adequate <br/> Profit */}
                    </div>
                    <div className="why_us_description">
                        Increase profit substantially thorugh efficent purchase	
                        {/* Increase your Profit through purchase by 20 to 30% */}
                    </div>
                </div>

                </div>

            </div>
        )
    }
}
