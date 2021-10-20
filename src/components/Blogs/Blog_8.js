import React, { Component } from 'react'
import './blog.css'
import Common_challenge_img from './Blog_images/common_challenges.png'
import three_simple_tips from './Blog_images/three_simple_tips.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import { Link } from "react-router-dom";
import automate_your_purchase from '../../icons/Webinar/webinar_automate_your.jpg';
// import number_one_tool from './Blog_images/number_one_tool.jpg'

// install Swiper modules
SwiperCore.use([Navigation]);


export default class Blog_6 extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="individual_blog_main_div">
                {/* <div className="individual_blog_title_div">
                    Do You know the No. #1 tool available to increase your profits?
                </div> */}
                <div className="individual_blog_date">
                    18 Oct 2021
                </div>
                <div className="individual_blog_image">
                    {/* Do You know the No. #1 tool available to increase your profits? */}
                    <img src={automate_your_purchase} alt="automate_your_purchase"/>
                </div>

                <div className="individual_blog_paragraph">
                    Procurement industry includes many tasks within the processes. Purchase being a sub 
                    set of procurement stands at a crossroads. There are lots of tasks that are been done on 
                    daily basis with minimum to no outcomes on an immediate basis.
                </div>

                <div className="individual_blog_paragraph" style={{"fontWeight":"bold"}}>
                    So what should companies do or respond? 
                </div>

                <div className="individual_blog_paragraph" >
                    <ul>
                        <li >
                            They can carry on as normal by the way of existence 
                        </li>
                        <li >
                            Or recede into insignificance <span style={{"fontWeight":"bold"}}>OR ought to rethink </span> how they would like to bring in some 
                        </li>
                        <li >
                            change to their purchase process 
                        </li>
                        <li >
                            And make a difference to their company profits
                        </li>
                    </ul>
                </div>

                <div className="individual_blog_paragraph">
                    This is our new rendezvous where we will discuss with you on how to<span style={{"fontWeight":"bold"}}> ‘Automate your purchase process to save 5-10% more’</span>, 
                    with some of the finest experts from our organization. 
                </div>

                <div className="individual_blog_paragraph">
                    Also we would like to cover following major areas concerned with Purchase process. 
                    These points can help you take further action on registration:
                </div>

                <div className="individual_blog_paragraph" >
                    <ul>
                        <li style={{"fontWeight":"bold"}}>
                            Increase purchase savings
                        </li>
                        <div>
                        Every opportunity to save time on any activity ultimately culminates and add on to the increase profits. 
                        Approx. 55% of purchase department still managing their activities using a spreadsheets. Which needs to 
                        undergo a definite change. <br/>
                            <span style={{"fontWeight":"bold","fontStyle":"italic"}}> “Anything anybody has was purchased with the currency of time.”</span>
                             —The Mountain of Ignorance

                        </div>

                        <br/>
                        <li style={{"fontWeight":"bold"}}>
                            Contribution to profits
                        </li>
                        <div>
                            You have to make purchasing experience straightforward for internal user, so that they can focus on their core activities. 
                            A tool that can make life easier for all purchases following the process thereby contributing towards overall business profits.
                        </div>

                        <br/>
                        <li style={{"fontWeight":"bold"}}>
                            Analytics
                        </li>
                        <div>
                            Basic problem procurement department around the world are struggling is to maintaining inventory cost and plan future purchases. 
                            A transformative digital technology that can dramatically support entire process by navigating through challenges
                        </div>
                    </ul>
                </div>

                <div className="individual_blog_paragraph" style={{"fontWeight":"bold"}}>
                    Do join us for the game changing webinar to know about purchase savings
                </div>

                <div className="individual_blog_paragraph" >
                    <Link to="/EffyBuy/wb">Register Now</Link>
                </div>

                <div className="individual_blog_other_blogs_main_div">

                    <Swiper navigation={true} className="mySwiper">
                        <SwiperSlide>
                            <div className="individual_blog_other_blogs_display_Div" style={{"display":"flex","justifyContent":"space-evenly","width":"100%","alignItems":"center"}}>
                                <div className="individual_div_other_blog_single" style={{"width":"40%"}}>
                                    <Link to="/EffyBuy/resources/blog/blog_1" style={{"textDecoration":"none"}}>
                                        <div className="individual_div_other_blog_single_blog_card_image">
                                            <img src={three_simple_tips} alt="three_simple_tips"/>
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_title">
                                            3 simple tips to unleash your buying power
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_desc">
                                            Today’s customer can buy almost anything at any time with a nearly unlimited number of choices, 
                                            which of course encourages people...
                                        </div>
                                    </Link>
                                </div>
                                <div className="individual_div_other_blog_single"style={{"width":"40%"}}>
                                    <Link to="/EffyBuy/resources/blog/blog_5" style={{"textDecoration":"none"}}>
                                        <div className="individual_div_other_blog_single_blog_card_image">
                                            <img src={Common_challenge_img} alt="Common_challenge_img"/>
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_title">
                                            Common Challenges & Their Solution 
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_desc">
                                            Every sale and transaction that a business deals with daily can transform the business’s 
                                            future. This makes the development of a procurement strategy...
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="individual_div_other_blog_single"style={{"width":"40%"}}>
                                    <Link to="/EffyBuy/resources/blog/blog_6" style={{"textDecoration":"none"}}>
                                        <div className="individual_div_other_blog_single_blog_card_image">
                                            <img src={number_one_tool} alt="number_one_tool"/>
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_title">
                                            Do You know the No. #1 tool available to increase your profits?
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_desc">
                                            You may be aware whether a wholesaler or retailer, direct sale or a large multilevel 
                                            chain, the need always is to build good relationships with your suppliers...
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        )
    }
}
