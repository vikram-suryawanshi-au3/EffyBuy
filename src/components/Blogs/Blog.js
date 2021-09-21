import React, { Component } from 'react';
import './blog.css'
import { Link } from "react-router-dom";
import Common_challenge_img from './Blog_images/common_challenges.png'
import three_simple_tips from './Blog_images/three_simple_tips.jpg'
import number_one_tool from './Blog_images/number_one_tool.jpg'
import anup_agarwal from './../../icons/About us/anup_agarwal.jpg'
import meghna_khatee from './../../icons/About us/meghna_khatee.webp'

export default class Blog extends Component {
    render() {
        return (
            <div className="blog_page_main_div container">
                <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_1" style={{"textDecoration":"none"}}>
                    <div className="blog_page_blog_card_image">
                        <img src={three_simple_tips} alt="three_simple_tips"/>
                        {/* 3 simple tips to unleash your buying power */}
                    </div>
                    <div className="blog_page_blog_card_hashtags">
                        <div>Blog</div>
                        <div>EffyBuy</div>
                        <div>BizGam</div>
                    </div>
                    <div className="blog_page_blog_card_title">
                        3 simple tips to unleash your buying power
                    </div>
                    <div className="blog_page_blog_card_desc">
                        Today’s customer can buy almost anything at any time with a nearly 
                        unlimited number of choices, which of course encourages people to shop 
                        and buy more. The entire buying process is so quick and easy with just one click. 
                        Now let us compare this with corporate purchasing process and...
                    </div>
                    <div className="blog_page_blog_card_writtenby">
                        <div className="blog_page_blog_card_writtenby_image">
                            <img src={anup_agarwal} alt="anup_agarwal"/>
                        </div>
                        <div className="blog_page_blog_card_writtenby_details">
                            <div className="blog_page_blog_card_writtenby_name">Anup Agarwal</div>
                            <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                        </div>
                    </div>
                </Link>
                </div>

                {/* <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_2" style={{"textDecoration":"none"}}>
                <div className="blog_page_blog_card_image">
                5 steps for effective procurement process
                </div>
                <div className="blog_page_blog_card_hashtags">
                <div>SupplierManagement</div>
                <div>Procurement</div>
                <div>SCM</div>
                <div>SupplyChain</div>
                <div>eNegotiation</div>
                </div>
                <div className="blog_page_blog_card_title">
                5 steps for effective procurement process
                </div>
                <div className="blog_page_blog_card_desc">
                Procurement plays a vital role in most of the organizations due to major 
                influence it has on overall cost of the business. Majority of Chief Procurement 
                Officers (CPOs) agree that cost reduction is their number one priority 
                (research by Deloitte Global, 2016) and 62% 
                expressed dissatisfaction with their respective procurement processes and...
                </div>
                    <div className="blog_page_blog_card_writtenby">
                    <div className="blog_page_blog_card_writtenby_image"></div>
                    <div className="blog_page_blog_card_writtenby_details">
                    <div className="blog_page_blog_card_writtenby_name">Anup Agarwal</div>
                    <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                    </div>
                    </div>
                    </Link>
                </div> */}

                {/* <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_3" style={{"textDecoration":"none"}}>
                <div className="blog_page_blog_card_image">
                100% transparency and immediate ROI for your procurement process
                    </div>
                    <div className="blog_page_blog_card_hashtags">
                        <div>Supply chain</div>
                        <div>EffyBuy</div>
                        <div>Procurement</div>
                        <div>Strategy and Technology</div>
                    </div>
                    <div className="blog_page_blog_card_title">
                    100% transparency and immediate ROI for your procurement process
                    </div>
                    <div className="blog_page_blog_card_desc">
                    Transparency is the most important and broadly accepted principle in today’s world 
                    of procurement system that is based on competition. Thus procurement has to be carried 
                    out in open markets with fair and transparent manner. Every CPO / leader knows that today 
                    any one can go back, review orders, 
                        spending, requests and process which can change the entire scenario of...
                    </div>
                    <div className="blog_page_blog_card_writtenby">
                    <div className="blog_page_blog_card_writtenby_image"></div>
                        <div className="blog_page_blog_card_writtenby_details">
                        <div className="blog_page_blog_card_writtenby_name">Anup Agarwal</div>
                        <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                        </div>
                        </div>
                        </Link>
                    </div> */}

                {/* <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_4" style={{"textDecoration":"none"}}>
                <div className="blog_page_blog_card_image">
                Are you struggling to bring down YOUR Purchase cost?
                </div>
                <div className="blog_page_blog_card_hashtags">
                <div>Blog</div>
                <div>EffyBuy</div>
                <div>BizGam</div>
                </div>
                <div className="blog_page_blog_card_title">
                        Are you struggling to bring down YOUR Purchase cost?
                    </div>
                    <div className="blog_page_blog_card_desc">
                    Purchases cost account for majority of costs in business environment. 
                    Most of the companies today know that reducing on procurement cost will not only 
                    contribute to their profitability; but also increase their business competitiveness. 
                    However, when questioned about this to any supplier, 
                    reduction in procurement cost is not enough. There has to be...
                    </div>
                    <div className="blog_page_blog_card_writtenby">
                    <div className="blog_page_blog_card_writtenby_image"></div>
                    <div className="blog_page_blog_card_writtenby_details">
                    <div className="blog_page_blog_card_writtenby_name">Anup Agarwal</div>
                            <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                            </div>
                            </div>
                            </Link>
                        </div> */}

                <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_5" style={{"textDecoration":"none"}}>
                    <div className="blog_page_blog_card_image">
                        <img src={Common_challenge_img} alt="Common_challenge_img"/>
                        {/* Challenges & Solution To Implement A Robust Procurement Processes */}
                    </div>
                    <div className="blog_page_blog_card_hashtags">
                        <div>Blog</div>
                        <div>EffyBuy</div>
                        <div>BizGam</div>
                    </div>
                    <div className="blog_page_blog_card_title">
                        Common Challenges & Their Solution 
                        {/* To Implement A Robust Procurement Processes */}
                    </div>
                    <div className="blog_page_blog_card_desc">
                        Every sale and transaction that a business deals with daily can 
                        transform the business’s future. This makes the development of a procurement strategy a 
                        must to have better business and purchasing processes...
                    </div>
                    <div className="blog_page_blog_card_writtenby">
                        <div className="blog_page_blog_card_writtenby_image">
                            <img src={meghna_khatee} alt="meghna_khatee"/>
                        </div>
                        <div className="blog_page_blog_card_writtenby_details">
                            <div className="blog_page_blog_card_writtenby_name">Meghna Khatee</div>
                            <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                        </div>
                    </div>
                </Link>
                </div>

                <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_6" style={{"textDecoration":"none"}}>
                    <div className="blog_page_blog_card_image">
                        {/* Do You know the No. #1 tool available to increase your profits?
                         */}
                         <img src={number_one_tool} alt="number_one_tool"/>
                    </div>
                    <div className="blog_page_blog_card_hashtags">
                        <div>Supplychain</div>
                        <div>EffyBuy</div>
                        <div>Procurement</div>
                    </div>
                    <div className="blog_page_blog_card_title">
                        Do You know the No. #1 tool available to increase your profits?
                    </div>
                    <div className="blog_page_blog_card_desc">
                        You may be aware whether a wholesaler or retailer, direct sale or a large multilevel chain, 
                        the need always is to build good relationships with your suppliers. The basic process to get 
                        this done is by a procurement manager who manages it in the system so; he is able to reduce 
                        cost and get greater ROI. 
                        Your profit margin is the metric that should be always on the radar of...
                    </div>
                    <div className="blog_page_blog_card_writtenby">
                        <div className="blog_page_blog_card_writtenby_image"></div>
                        <div className="blog_page_blog_card_writtenby_details">
                            <div className="blog_page_blog_card_writtenby_name">Anup Agarwal</div>
                            <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                        </div>
                    </div>
                </Link>
                </div>

                {/* <div className="blog_page_blog_card">
                <Link to="/EffyBuy/resources/blog/blog_7" style={{"textDecoration":"none"}}>
                    <div className="blog_page_blog_card_image">
                        Negotiation - Are you super good at it?

                    </div>
                    <div className="blog_page_blog_card_hashtags">
                        <div>Blog</div>
                        <div>EffyBuy</div>
                        <div>BizGam</div>
                    </div>
                    <div className="blog_page_blog_card_title">
                        Negotiation - Are you super good at it? Top 5 tips to get your deals always 10/10

                    </div>
                    <div className="blog_page_blog_card_desc">
                        There is a deadlock in every negotiation, and sometimes there is more than one. 
                        Don’t be afraid of it and try to blame or point someone else or yourself also for it. 
                        An easy way to deal with a deadlock is to move to the next issue on your agenda and leave 
                        the complicated ones for later. Repeat this with every hurdle point and come back to them later in 
                        the session or take some time to think about it and...
                    </div>
                    <div className="blog_page_blog_card_writtenby">
                        <div className="blog_page_blog_card_writtenby_image"></div>
                        <div className="blog_page_blog_card_writtenby_details">
                            <div className="blog_page_blog_card_writtenby_name">Anup Agarwal</div>
                            <div className="blog_page_blog_card_writtenby_date">16 Aug 2021</div>
                        </div>
                    </div>
                </Link>
                </div> */}

                <div style={{"width":"45%"}}>

                </div>
            </div>

        )
    }
}
