import React, { Component } from 'react'
import './blog.css'
import Common_challenge_img from './Blog_images/common_challenges.png'
import three_simple_tips from './Blog_images/three_simple_tips.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import { Link } from "react-router-dom";
// import Common_challenge_img from './Blog_images/common_challenges.png';
import number_one_tool from './Blog_images/number_one_tool.jpg'

// install Swiper modules
SwiperCore.use([Navigation]);


export default class Blog_5 extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="individual_blog_main_div">
                <div className="individual_blog_title_div">
                    Common Challenges & Their Solution To Implement A Robust Procurement Processes
                </div>
                <div className="individual_blog_date">
                    16 Aug 2021
                </div>
                <div className="individual_blog_image">
                    <img src={Common_challenge_img} alt="Common_challenge_img"/>
                </div>

                <div className="individual_blog_paragraph">
                    {/* Every sale and transaction that a business deals with daily can transform the business’s 
                    future. This makes the development of a procurement strategy a 
                    must to have better business and purchasing processes.  */}
                    Although it is a known fact given all the challenges within procurment one has to abide by all 
                    the rules and regulations, also adhereing to corporate responsibilties.
                    <br/>
                    There are wholly of challenges that procurement team and leadership has to undergo. 
                    These are based on the size, type, products, area and others. But there are some common 
                    challenges that all procurement would have to face, irrespective of above mentioned 
                    patterns.
                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                    What is procurement? 
                    </div>
                    Procurement is the obtaining of the best products and services at the best possible 
                    price in a series of steps that are important for any organization or business. 
                </div>

                <div className="individual_blog_paragraph">
                    Traditional procurement is identified by manual events like calling the vendors and 
                    buyers, approvals, writing RFX’s, negotiations, etc. that include repetitive 
                    and small tasks. However, these processes are not very 
                    efficient or accurate and thus require many follow-ups.   
                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        Challenges in procurement and their solutions 
                    </div>
                    With an understanding of the best features, policies, and benefits while abiding by 
                    social and corporate responsibilities, 
                    one needs to understand the prevalent challenges in procurement.  
                </div>

                <div className="individual_blog_paragraph">
                    Procurement processes are riddled with challenges and difficulties and the 
                    leaders have an array of responsibilities to handle. These challenges are 
                    based on the organization’s line of work, size, 
                    etc, however, some of the common challenges and the ways to overcome them are - 
                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        #1 Risk mitigation
                    </div>
                    <div style={{"fontWeight":"bold"}}>Problem</div>

                    {/* Risks are involved in every aspect of the business and supply risks, market risks, 
                    frauds, cost, quality, etc, comprise the most common risks that are involved in the procurement process. 
                    Additionally, risks like anti-corruption and policy adherence are also involved. 
                    <br/>
                    These risks can be fatal for the complete cycle of the supply chain process 
                    and thus it becomes significant to understand these risks. 
                    <br/>
                    <br/>
                    <div style={{"fontWeight":"bold"}}>Solution</div>
                    Active and extensive information search, substantial conflict and political 
                    bargaining, preference for formal decision rules, emphasis on strong buyer 
                    relationships, and established and enhanced communication networks can help 
                    mitigate the risks involved.  */}
                    There is risk involved in all types and varities of business world, amongst theose, some 
                    can be named as supply risks, market risks, cost, quality, frauds and others.
                    There are some newly identified risks like anti-corruption and following laws / rules. 
                    These are relevant for the entire procurement cycle, hence it has to be given due 
                    importance and not possible to be ignored.
                    <br/>
                    <div>

                    </div>
                    Extensive secondary research, political bargaining, strong long term supplier realtionships, 
                    and better communication involved internally and externally can help reduce or mitigatge 
                    risks.
                    
                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        #2 Lack of understanding supplier capabilities before purchase
                    </div>
                    <div style={{"fontWeight":"bold"}}>Problem</div>

                    {/* Finding the right supplier that understands the importance of quality and 
                    delivers in time can keep any dissatisfaction related to the procurement processes away. 
                    Having high expectations from a supplier for the completion of a procurement 
                    deal beyond their capabilities can be disastrous in the end.  */}
                    Identifying supplier that can meet up with quality and timely delivery of product requirement 
                    can sort many of the hassels into the procurement cycle. Maintaining a pool few suppliers and 
                    getting quotes from them versus just one supplier can create demand versus supply deficiet at 
                    times or even some other issues might occur. 

                    <br/>
                    {/* The best solution to this is regular evaluation and continuous monitoring. 
                    Supplier performance can be monitored by ensuring that delivery demands 
                    and standards are met. A good supplier relationship
                     is important for the smooth functioning of the procurement process.  */}
                     The best solution to this is regular evaluation and continuous monitoring. Supplier performance 
                     can be monitored by ensuring that delivery demands and standards are met. A good supplier 
                     relationship is important for the smooth functioning of the procurement process.
 
                    <br/>
                    <br/>
                    <div style={{"fontWeight":"bold"}}>Solution</div>
                    {/* Holding a regular supply review, discussing key performance KPI, and agreeing on 
                    improvement and action ideas can also help overcome this challenge.  */}
                    Conducting regular suppliers meeting and discussing goals along with KPIs working to 
                    improve on time, price or any terms from the procurement team will make the procurement 
                    process smooth.

                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        #3 Lack of transparency and trust
                    </div>
                    <div style={{"fontWeight":"bold"}}>Problem</div>

                    {/* Withholding of important information by the organizations tends to create procurement 
                    problems as it limits the suppliers from offering the best and jam-packed deals to the 
                    clients. Also, organizations usually keep the suppliers at arm’s length and this 
                    treatment is similar to the one filled with zero confidence. */}
                    Not sharing of important information or delivery details or any other specifications can 
                    create issues in procurment cycle. Also companies tend to not involved suppliers during 
                    any initial or goal setting aspects, which can create confusion and thereby considered to 
                    be mistrust issues.
                    <br/>
                    <br/>
                    <div style={{"fontWeight":"bold"}}>Solution</div>
                    {/* To avoid these, ask for supplier’s demands and details in advance to offer quality 
                    services. Also, keep a request line open to ensure that any updates and changes 
                    about these can be included. Having some trust towards your key 
                    suppliers can yield your problem-solving methods and give positive improvements.  */}
                    It is essential to consider suppliers as a part of your organisation hence can give them 
                    demand related / futuristic view and also visions details. This can create a harmonious 
                    relationship between suppliers and the procurment team which can deliver outcome more 
                    than defined - as in positive improvements.

                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        #4 Inaccurate data
                    </div>
                    <div style={{"fontWeight":"bold"}}>Problem</div>

                    {/* Inaccurate data can lead to ill-informed or bad decisions which can ultimately 
                    reflect as loss in the business cycle. Access to accurate data is important as it 
                    helps to put up a strong front in the front of management or the decision 
                    makers and it helps slim the chance of being unsuccessful.  */}
                    Bad data can lead to wrong decisions and thereby incurring loss due to procurement 
                    activities that hamper entire business profits. Thus access to right kind of data is 
                    highly required, to be provided to leadership and management. So this makes it possible 
                    to get into win scenario for the business.

                    <br/>
                    <br/>
                    <div style={{"fontWeight":"bold"}}>Solution</div>
                    {/* The only solution to this is to make purchases and related decisions based on accurate and reliable data.  */}
                    The one best solution could be for good purchase is based on right / appropriate data base. 
                    Given this challenge organisation tend to incur losses operationally and financially. 
                    Procurement on a whole is strategic process and nothing that wokrs on gut feel or instincts. 
                    Implementation of the best procurement process includes integrating different measures and 
                    high performance tasks to solve the above challenge. 

                    <br/>
                    These challenges in procurement hinder the growth of the business and create room 
                    for financial and operational losses. However, procurement should 
                    be a strategic and insightful process rather than based on instincts. 
                    <br/>
                    Procurement is the entire process of sourcing, negotiating, imperative and strategic selections, 
                    and many other steps. The implementation of the best procurement processes will 
                    help seek a comprehensive approach and integrate different measures and 
                    high-performance processes to solve these problems. 
                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        EffyBuy - Make Businesses more Efficient 
                    </div>

                    EffyBuy is one such tool that helps to carry out the systematic procurement 
                    process with risk calculations and insights. This in-depth tool helps achieve 
                    your business goals with analyzed and researched resources and solutions. 
                    It provides a unified platform for controlling numerous procurement functions 
                    and also enables automated document generation. The appropriate use of this 
                    tool will help your business stay ahead of the competition and meet your 
                    procurement goals. 

                </div>

                <div className="individual_blog_paragraph">
                    <div className="individual_blog_point">
                        Tap into the EffyBuy negotiation tool
                    </div>

                    {/* Effy Buy is a fully automated purchase negotiating tool that enables you to become a 
                    master negotiator and achieve win-win results. Get the best package tools to negotiate 
                    both the price and terms of your purchase transaction so you may not only save a lot of money, 
                    but also have the power of a 10/10 negotiation. */}
                    Effy Buy is a fully automated purchase negotiating tool that enables you to become a 
                    master negotiator and achieve win-win results. Get the best package tools to negotiate 
                    both the price and terms of your purchase transaction so you may not only save a lot of 
                    money, but also have the power of a 10/10 negotiation.


                </div>

                <div className="other_blogs_title">
                        Our Other Blogs
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
                                            which of course encourages people to shop...
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="individual_div_other_blog_single"style={{"width":"40%"}}>
                                    <Link to="/EffyBuy/resources/blog/blog_5" style={{"textDecoration":"none"}}>
                                        <div className="individual_div_other_blog_single_blog_card_image">
                                            <img src={Common_challenge_img} alt="Common_challenge_img"/>
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_title">
                                            Common Challenges & Their Solution To Implement A Robust Procurement Processes
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_desc">
                                            Every sale and transaction that a business deals with daily can transform the business’s 
                                            future. This makes the development of a procurement strategy...
                                        </div>
                                    </Link>
                                </div> */}
                                <div className="individual_div_other_blog_single"style={{"width":"40%"}}>
                                    <Link to="/EffyBuy/resources/blog/blog_6" style={{"textDecoration":"none"}}>
                                        <div className="individual_div_other_blog_single_blog_card_image">
                                            <img src={number_one_tool} alt="number_one_tool"/>
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_title">
                                            Do You know the No. #1 tool available to increase your profits?
                                        </div>
                                        <div className="individual_div_other_blog_single_blog_card_desc">
                                            You may be aware whether a wholesaler or retailer, direct sale or a large multilevel 
                                            chain, the need always is to build good...
                                        </div>
                                    </Link>
                                </div>
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
