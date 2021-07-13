import React, { Component } from 'react'
import 'swiper/swiper-bundle.css';
import './HomepageContent.css'
import ProblemsWeSolve from './Homepage/ProblemsWeSolve'
// import Calculations from './Homepage/Calculations'
import Calc from './Homepage/calc'
// import ThreeCards from './Homepage/ThreeCards'
// import HowWeWork from './Homepage/HowWeWork'
import HowEffybuyWork from './Homepage/HowEffybuyWork'
import Chatbot from './Homepage/Chatbot.js'
import Whyus from './Homepage/Whyus'
import Graph from './Homepage/Graph'
import Video from './Homepage/Video'
import DataSecurity from './Homepage/DataSecurity'
import Swiper, { Navigation }  from 'swiper'
import $ from "jquery"
import banner from '../icons/Banner_final.webp'
import res_banner from '../icons/Banner_1.webp'
// import rightLeaf from '../icons/right_leaf.png'
// import LeftLeaf from '../icons/left_leaf.png'
import MRP from '../icons/Customer reviews/MRP.jpeg'
import Kondaas from '../icons/Customer reviews/kondaas.jpeg'
import minutes from '../icons/saving2.svg'
import huge_cost from '../icons/setting3.svg'
import ROI from '../icons/Rupee1.svg'
import StarRatings from 'react-star-ratings';
// import { Modal, Button } from "react-bootstrap";
// import Typing from 'react-typing-animation';
const infos = ["$","₹","€","¥"];

Swiper.use([Navigation])

export default class HomapageContent extends Component {
    state = {
        tmp:0,
        tmp1:0,
        edit:true,
        isOpen:false,
        symbol:'$',
        currentIndex:0,
        customer_saving:''
    }

    updateDisplayedInfo = () => {
        let addInd = this.state.currentIndex + 1
        this.setState({ currentIndex: this.state.currentIndex === 3 ? 0 : addInd });
      };

    componentDidMount(){

        this.setState({
            edit:true
        })

        let url2 = 'https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1'
        fetch(url2).then(res => res.json()).then(res=>{
            if(res.country_code === 'IN'){
                this.setState({
                    customer_saving: '10 Cr'
                })
            }else{
                this.setState({
                    customer_saving: '1M $'
                })
            }
        })
        this.swiper=new Swiper('.swiper-container',{
            
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        })

        window.scrollTo(0, 0)

        this.currancy = setInterval(()=>{
            let addInd = this.state.currentIndex + 1
            this.setState({ currentIndex: this.state.currentIndex === 3 ? 0 : addInd });
        },2000)

        // let location = this.props.location
        // $(document).ready(function() {


            // alert(typeof(location))
            // let tmp = this.state.tmp
            // let tmp2 = this.state.tmp1
            let edit = this.state.edit
            let THIS = this

            if(this.state.edit){
            let typing = (index, text) => {
    
                var textIndex = 1;
    
                // tmp = setInterval(function() {
                THIS.tmp = setInterval(function() {
                    if (textIndex < text[index].length + 1) {
                        $('.typewriter-text').text(text[index].substr(0, textIndex));
                        textIndex++;
                    } else {
                        if(edit){

                            setTimeout(() => {
                                deleting(index, text)
                            }, 500);
                        }
                        // clearInterval(tmp);
                        clearInterval(THIS.tmp);
                    }
    
                }, 100);
            }
    
            let deleting = (index, text) => {
                var textIndex = text[index].length;
                // tmp2 = setInterval(function() {
                THIS.tmp2 = setInterval(() => {
                    if (textIndex + 1 > 0) {
                        $('.typewriter-text').text(text[index].substr(0, textIndex));
                        textIndex--;
                    } else {
                        index++;
                        if (index === text.length) {
                            index = 0;
                        }
                        if(edit){

                            typing(index, text);
                        }
                        // clearInterval(tmp2);
                        clearInterval(THIS.tmp2);
                    }
                }, 40) 
            }
            typing(0, $('.typewriter-text').data('text'));
        }else{
            alert(this.tmp)
            alert(this.tmp2)
        }
    
        // });

        document.title="EffyBuy"

    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false })

    componentWillUnmount(){
        this.setState({
            edit:false
        })
        clearInterval(this.state.tmp)
        clearInterval(this.state.tmp1)
        clearInterval(this.currancy)
    }

    

    render() {
        return (
            <div>
                <div className="image_content">
                    
                    <div>

                    <img className="background_image desktop_banner" src={banner} alt="background_image"></img>
                    <div id="typing">
                        <p className='typewriter'>
                            <span className='typewriter-text' data-text='[ 
                                    "Quick Auction", 
                                    "E-Negotiations"]'></span>
                        </p>
                    </div>
                    </div>
                    <div>
                    <img className="background_image responsive_banner" src={res_banner} alt="background_image"></img>
                    </div>

                    <div className="currancy_symbol">
                        {infos[this.state.currentIndex]}
                    </div>
                    <div>
                        <h1 className="text subtitle">The Ultimate Negotiation Tool</h1>
                        </div>
                                
                    
                    <div className="signup_desc_main">
                        <div>
                            <div>
                                <img src={ROI} alt="Left_leaf"></img>
                            </div>
                            <div className="signup_desc_sub">
                                {/* <div className="signup_desc_sub_number">100 +</div> */}
                                <div><span style={{fontWeight:"bold"}}>ROI</span><br/>In 1st Week</div>
                            </div>
                        </div>
                            {/* <img src={rightLeaf} alt="Right_leaf"></img> */}
                        <div>
                            <div>
                                <img src={minutes} alt="Left_leaf"></img>
                            </div>
                            <div className="signup_desc_sub">
                                {/* <div className="signup_desc_sub_number">{this.state.customer_saving} +</div> */}
                                <div><span style={{fontWeight:"bold"}}>10 Minutes</span><br/>Setup</div>
                            </div>
                        </div>
                            {/* <img src={rightLeaf} alt="Right_leaf"></img> */}
                        <div>
                            <div>
                                <img src={huge_cost} alt="Left_leaf"></img>
                            </div>
                            <div className="signup_desc_sub">
                                {/* <div className="signup_desc_sub_number">1000 +</div> */}
                                <div><span style={{fontWeight:"bold"}}>Huge</span><br/>Cost Savings</div>
                            </div>
                        </div>
                            {/* <img src={rightLeaf} alt="Right_leaf"></img> */}
                    </div>

                </div>

                <Chatbot/>

                <Video/>

                <Graph/>

                {/* <Calculations/> */}
                <Calc/>

                <Whyus/>

                {/* <HowWeWork/> */}

                <HowEffybuyWork/>

                <ProblemsWeSolve style={{marginBottom:"50px"}}/>

                {/* three cards */}

                {/* <ThreeCards/> */}

                <div className="customer_main">
                    {/* <div className="customer_que" >
                        <h1 style={{textAlign:"center"}} className="title">

                        What Customers 
                        <br/>
                        Say About Us
                        </h1>
                    </div> */}
                    <div>

                    <h1 className="customer_review_title">What Customers Say <span style={{color:"#008ed9"}}>About Us</span></h1>
                    </div>
                    <br/>
                    <div className="swiper-container">
                        
                        {/* slider start */}
                        <div className="swiper-wrapper">


                            <div className="swiper-slide">
                                {/* <div className="inverted">
                                    <i className="fa fa-quote-left fa-4x" style={{color:"#008ed9"}} aria-hidden="true"></i> 
                                </div> */}
                                
                                <div className="swiper-slide-contents">
                                    {/* <div className="elementor-slide-heading">
                                        "EffyBuy allows easy integration with portals.
                                        It has easy to implement use cases and the guided workflows function 
                                        smoothly. Their cloud solution and latest interface is amazing."
                                    </div>
                                    
                                    <br/>
                            
                                    <div className="elementor-slide-description">
                                        <b>Mangesh K - Systems Executive</b> 
                                        <p style={{fontSize: "14px"}}>Enterprise 5001-10,000 employees</p>
                                    </div> */}

<div className="customer_review_sub">
                                        <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                        {/* <br/> */}
                                        EffyBuy allows easy integration and powerful automation which resulted in huge savings for us. 
                                        We strongly recommend the use of 
                                        this tool if you want to automate your procurement negotiations.
                                        </div>
                                        <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={Kondaas} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Sanjay
                                            </div>
                                            <div className="customer_review_company"> 
                                                Kondaas automation Pvt Ltd.
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                //   changeRating={(rating)=>{changeRating(rating)}}
                                                numberOfStars={5}
                                                name='rating'
                                                //   starHoverColor="#FDCC0D"
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div>
                                    </div>

                                    <div className="customer_review_sub">
                                    {/* <div className="inverted"> */}
                                    {/* </div> */}
                                    {/* <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                        We need to automate our current buying process and introduce auctions to 
                                        both increase participation of suppliers and reduce our purchases cost. 
                                        EffyBuy solved the problem for us in a hassle free way.
                                        
                                    </div> */}

                                    {/* <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={MRP} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Mr. Nikhil Sunil
                                            </div>
                                            <div className="customer_review_company"> 
                                                Madras Radiators And Pressing Ltd.
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div> */}





                                <div className="customer_review_sub">
                                    {/* <div className="inverted"> */}
                                    {/* </div> */}
                                    <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                        EffyBuy allows easy integration with portals.
                                        It has easy to implement use cases and the guided workflows function 
                                        smoothly. Their cloud solution and latest interface is amazing.
                                    </div>

                                    <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={'https://i.pinimg.com/564x/3a/63/da/3a63da2ce8505e5d353d6509aa3e9e2b.jpg'} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Mangesh K - Systems Executive
                                            </div>
                                            <div className="customer_review_company"> 
                                                Enterprise 5001-10,000 employees
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                //   changeRating={(rating)=>{changeRating(rating)}}
                                                numberOfStars={5}
                                                name='rating'
                                                //   starHoverColor="#FDCC0D"
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div>
                                    </div>


                                </div>

                                    
                                    
                                </div>
                            </div>
                            <div className="swiper-slide">
                                {/* <div className="inverted">
                                    <i className="fa fa-quote-left fa-4x" style={{color:"#008ed9"}} aria-hidden="true"></i> 
                                </div> */}
                                
                                <div className="swiper-slide-contents">
                                    {/* <div className="elementor-slide-heading">
                                        "EffyBuy allows easy integration with portals.
                                        It has easy to implement use cases and the guided workflows function 
                                        smoothly. Their cloud solution and latest interface is amazing."
                                    </div>
                                    
                                    <br/>
                            
                                    <div className="elementor-slide-description">
                                        <b>Mangesh K - Systems Executive</b> 
                                        <p style={{fontSize: "14px"}}>Enterprise 5001-10,000 employees</p>
                                    </div> */}

                                    <div className="customer_review_sub">
                                    {/* <div className="inverted"> */}
                                    {/* </div> */}
                                    <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                        EffyBuy allows easy integration with portals.
                                        It has easy to implement use cases and the guided workflows function 
                                        smoothly. Their cloud solution and latest interface is amazing.
                                    </div>

                                    <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={'https://i.pinimg.com/564x/3a/63/da/3a63da2ce8505e5d353d6509aa3e9e2b.jpg'} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Mangesh K - Systems Executive
                                            </div>
                                            <div className="customer_review_company"> 
                                                Enterprise 5001-10,000 employees
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                //   changeRating={(rating)=>{changeRating(rating)}}
                                                numberOfStars={5}
                                                name='rating'
                                                //   starHoverColor="#FDCC0D"
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div>
                                    </div>

                                    
                                    <div className="customer_review_sub">
                                        <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                        {/* <br/> */}
                                            EffyBuy allows easy integration with portals.
                                            It has easy to implement use cases and the guided workflows function 
                                            smoothly. Their cloud solution and latest interface is amazing.
                                        </div>
                                        <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={'https://i.pinimg.com/564x/3a/63/da/3a63da2ce8505e5d353d6509aa3e9e2b.jpg'} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Mangesh K - Systems Executive
                                            </div>
                                            <div className="customer_review_company"> 
                                                Enterprise 5001-10,000 employees
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                //   changeRating={(rating)=>{changeRating(rating)}}
                                                numberOfStars={5}
                                                name='rating'
                                                //   starHoverColor="#FDCC0D"
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div>
                                        {/* <div className="aaaa">
                                            <div className="aa">
                                                <img className="aaa" src={'https://i.pinimg.com/564x/3a/63/da/3a63da2ce8505e5d353d6509aa3e9e2b.jpg'} alt="first_image"></img>
                                            </div>
                                            <div className="bb">
                                                <div className="bba">
                                                    Mangesh K - Systems Executive
                                                </div>
                                                <div className="bbb"> 
                                                    Enterprise 5001-10,000 employees
                                                </div>
                                                <StarRatings
                                                    rating={5}
                                                    starRatedColor="#FDCC0D"
                                                    //   changeRating={(rating)=>{changeRating(rating)}}
                                                    numberOfStars={5}
                                                    name='rating'
                                                    //   starHoverColor="#FDCC0D"
                                                    starDimension="15px"
                                                    />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            {/* commented last two reviews */}

                            {/* <div className="swiper-slide">
                                
                                <div className="swiper-slide-contents">

                                    <div className="customer_review_sub">
                                    <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                        EffyBuy allows easy integration with portals.
                                        It has easy to implement use cases and the guided workflows function 
                                        smoothly. Their cloud solution and latest interface is amazing.
                                    </div>

                                    <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={'https://i.pinimg.com/564x/3a/63/da/3a63da2ce8505e5d353d6509aa3e9e2b.jpg'} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Mangesh K - Systems Executive
                                            </div>
                                            <div className="customer_review_company"> 
                                                Enterprise 5001-10,000 employees
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div>
                                    </div>

                                    
                                    <div className="customer_review_sub">
                                        <div className="customer_review_description">
                                        <div style={{textAlign:"left"}}>
                                            <i className="fa fa-quote-left fa-2x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                                        </div>
                                            EffyBuy allows easy integration with portals.
                                            It has easy to implement use cases and the guided workflows function 
                                            smoothly. Their cloud solution and latest interface is amazing.
                                        </div>
                                        <div className="customer_review_owner">
                                        <div className="customer_review_owner_image">
                                            <img className="aaa" src={'https://i.pinimg.com/564x/3a/63/da/3a63da2ce8505e5d353d6509aa3e9e2b.jpg'} alt="first_image"></img>
                                        </div>    
                                        <div className="customer_review_details">
                                            <div className="customer_review_name">
                                                Mangesh K - Systems Executive
                                            </div>
                                            <div className="customer_review_company"> 
                                                Enterprise 5001-10,000 employees
                                            </div>

                                            <StarRatings
                                                rating={5}
                                                starRatedColor="#FDCC0D"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="12px"
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="swiper-slide">
                            <div className="inverted">
                                <i className="fa fa-quote-left fa-4x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                            </div>
                            <div className="swiper-slide-contents">
                                <div className="elementor-slide-heading">
                                    "With EffyBuy we have achieved 26% increase in 
                                    the number of leads collected for our Smart Care Product"
                                </div>
                                    <br/>
                                   
                                <div className="elementor-slide-description">
                                    <b>Soumya Mishra - Brand Manager</b> 
                                    <p style={{fontSize: "14px"}}>Asian Paints 5001-10,000 employees</p>
                                    </div>
                                    </div>
                            </div>

                            <div className="swiper-slide">
                            <div className="inverted">
                                <i className="fa fa-quote-left fa-4x" style={{color:"#cccccc"}} aria-hidden="true"></i> 
                            </div>
                            <div className="swiper-slide-contents">
                                <div className="elementor-slide-heading">
                                "EffyBuy is a good platform to develop chatbot and 
                                can be integrated with a different platform. Great customer support."
                                </div>
                                    <br/>
                                   
                                <div className="elementor-slide-description">
                                    <b>Adnan F - RPA Service Delivery Manager </b>
                                    <p style={{fontSize: "14px"}}>Enterprise 10,001+ employees</p>
                                    </div>
                                    </div>
                            </div> */}
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        {/* slider end */}
                    </div>
                </div>

                <DataSecurity/>

                {/* CASE STUDY */}

                {/* <div className="case_study_background">
                    <h1 className="case_study_title">Impact of <span style={{color:"#4885ed"}}>Effybuy</span> : case studies</h1>
                    <div className="scrolling-wrapper" style={{textAlign:"center"}}>
                        <div className="case_study_card">
                            <img src="https://clareville.co.uk/wp-content/uploads/2018/03/29496893-case-study-words-stamped-in-red-ink-on-a-manila-file-folder-to-illustrate-a-good-example-or-best-pra.jpg" className="case_study_image" alt="case_study"></img>
                            <h4 className="card_title">Case study 1</h4>
                            <div style={{textAlign:"end"}}>
                                <span>Read more...</span></div>
                        </div>
                        <div className="case_study_card">
                            <img src="https://clareville.co.uk/wp-content/uploads/2018/03/29496893-case-study-words-stamped-in-red-ink-on-a-manila-file-folder-to-illustrate-a-good-example-or-best-pra.jpg" className="case_study_image" alt="case_study"></img>
                            <h4 className="card_title">Case study 2</h4>
                            <div style={{textAlign:"end"}}><span>Read more...</span></div>
                        </div>
                        <div className="case_study_card">
                            <img src="https://clareville.co.uk/wp-content/uploads/2018/03/29496893-case-study-words-stamped-in-red-ink-on-a-manila-file-folder-to-illustrate-a-good-example-or-best-pra.jpg" className="case_study_image" alt="case_study"></img>
                            <h4 className="card_title">Case study 3</h4>
                            <div style={{textAlign:"end"}}><span>Read more...</span></div>
                        </div>
                        <div className="case_study_card">
                            <img src="https://clareville.co.uk/wp-content/uploads/2018/03/29496893-case-study-words-stamped-in-red-ink-on-a-manila-file-folder-to-illustrate-a-good-example-or-best-pra.jpg" className="case_study_image" alt="case_study"></img>
                            <h4 className="card_title">Case study 4</h4>
                            <div style={{textAlign:"end"}}><span>Read more...</span></div>
                        </div>
                        <div className="case_study_card">
                            <img src="https://clareville.co.uk/wp-content/uploads/2018/03/29496893-case-study-words-stamped-in-red-ink-on-a-manila-file-folder-to-illustrate-a-good-example-or-best-pra.jpg" className="case_study_image" alt="case_study"></img>
                            <h4 className="card_title">Case study 5</h4>
                            <div style={{textAlign:"end"}}><span>Read more...</span></div>
                        </div>
                    </div>
                </div> */}
                    
            </div>
        )
    }
}
