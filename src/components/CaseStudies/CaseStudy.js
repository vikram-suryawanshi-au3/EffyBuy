import React, { Component } from 'react'
import './caseStudy.css'
// import ReactPlayer from 'react-player/youtube'
import AnimatedNumber from "animated-number-react";
import dominosLogo from '../../icons/caseStudy/dominos.svg'
import { PopupButton } from "react-calendly";
import { Switch, Route, Link } from "react-router-dom";
import Checking from './Checking'



export default class CaseStudy extends Component {
    state={
        one:0,
        two:0,
        three:0,
        four:0,
        activeLink:"one",
        caseStudy:[
            {
                id:1,
                companyName:"Dominos",
                type:"usecases",
                showtitle1:"How Domino’s reduced query resolution time by 70% with conversational AI powered chatbots.",
                showtitle2:"CUSTOMER SUPPORT | QSR",
                logo:dominosLogo,

            },
            {
                id:2,
                companyName:"Dominos",
                type:"usecases",
                showtitle1:"How Domino’s reduced query resolution time by 70% with conversational AI powered chatbots.",
                showtitle2:"CUSTOMER SUPPORT | QSR",
                logo:dominosLogo,

            },
            {
                id:3,
                companyName:"Dominos",
                type:"usecases",
                showtitle1:"How Domino’s reduced query resolution time by 70% with conversational AI powered chatbots.",
                showtitle2:"CUSTOMER SUPPORT | QSR",
                logo:dominosLogo,

            },
        ]
    }

    
    formatValue = (value) => value.toFixed(0);

    componentDidMount(){
        this.setState({
            one:65,
            two:80,
            three:800,
            four:20
        })
    }
    render() {
        return (
            <div className="case_study_main_div">
                <div className="case_study_first">
                    <div className="case_study_first_desc">
                        <div className="case_study_first_desc_info">
                            CUSTOMER SUPPORT | WASTE MANAGEMENT
                        </div>
                        <br/>
                        <div className="case_study_first_desc_title">
                            How <span style={{"color":"#008ed9"}}>Waste Connections</span><br/>Saved $250K Per Month
                        </div>
                        <br/>
                        <div className="case_study_first_desc_information">
                            Trina supports English & French languages as a significant portion of Waste Connections' 
                            customers are native French speakers. Further, Trina will seamlessly escalate the query 
                            to a human agent wherever necessary, 
                            leading to appropriate resolutions and happier customers.
                        </div>
                        <br/>
                        <div className="case_study_first_desc_button">
                            <button className="btn btn-primary">Read full story</button>
                        </div>
                    </div>
                    <div className="case_study_first_video">
                        video_here
                    </div>
                </div>

                <div className="case_study_number_main_div">
                    <div className="case_study_number_div">
                        <div className="case_study_number">
                            <AnimatedNumber
                                value={this.state.one}
                                duration={5000}
                                formatValue={this.formatValue}
                            />%
                        </div>
                        <div className="case_study_number_desc">Reduction in CX Costs</div>
                    </div>
                    <div className="case_study_number_div">
                        <div className="case_study_number">
                            <AnimatedNumber
                                value={this.state.two}
                                duration={5000}
                                formatValue={this.formatValue}
                            />%
                        </div>
                        <div className="case_study_number_desc">Self-Serve Experience</div>
                    </div>
                    <div className="case_study_number_div">
                        <div className="case_study_number">
                            <AnimatedNumber
                                value={this.state.three}
                                duration={5000}
                                formatValue={this.formatValue}
                            />%    
                        </div>
                        <div className="case_study_number_desc">Increase in upsell revenue</div>
                    </div>
                    <div className="case_study_number_div">
                        <div className="case_study_number">
                            <AnimatedNumber
                                value={this.state.four}
                                duration={5000}
                                formatValue={this.formatValue}
                            />%
                        </div>
                        <div className="case_study_number_desc">Improvement in CSAT</div>
                    </div>
                </div>
                <div className="case_studies_all_cases container">
                    <div className="case_study_all_cases_navbar">
                        <div className={`case_study_all_cases_navbar_link ${this.state.activeLink === "one" ? "case_study_all_cases_navbar_active_link" : ""}`} onClick={()=>{this.setState({activeLink:"one"})}} >
                            All
                        </div>
                        <div className={`case_study_all_cases_navbar_link ${this.state.activeLink === "two" ? "case_study_all_cases_navbar_active_link" : ""}`} onClick={()=>{this.setState({activeLink:"two"})}}>
                            Use case
                        </div>
                        <div className={`case_study_all_cases_navbar_link ${this.state.activeLink === "three" ? "case_study_all_cases_navbar_active_link" : ""}`} onClick={()=>{this.setState({activeLink:"three"})}}>
                            Industry
                        </div>
                    </div>
                    <div className="case_studies_all_cases_main_div">
                        {this.state.caseStudy.map((item,index)=>{
                            return(
                                    <Link to={`/EffyBuy/resources/case_study/${item.id}`} style={{ textDecoration: 'none',"color":"inherit" }}>
                                <div key={item.id} className="case_studies_individual_case" style={{"width":"90%","textAlign":"center","transform":"scale(1.00)","transition":"all 0.5s"}}>
                                    <div className="case_study_company_logo" >
                                        <div>
                                            <img  src={item.logo} alt={item.companyName} style={{"width":"80%"}}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="case_study_show_title1" style={{"fontSize":"15px"}}>
                                        {item.showtitle1}
                                    </div>
                                    <br/>
                                    <div className="case_study_show_title2" style={{"fontSize":"15px","color":"#008ed9"}}>
                                        {item.showtitle2}
                                    </div>
                                    {/* {item.companyName} */}
                                </div>
                    </Link>
                            )
                        })}
                    {/* <Switch> */}
                        {/* <Route path='/EffyBuy/resources/case_study/1'>
                        <Checking data={item}/>
                        </Route> */}
                        {/* <Route path="/EffyBuy/resources/case_study/:id" component={Checking} /> */}
                    {/* </Switch> */}

                    {
               this.state.caseStudy.map((item, index) => {
                 return <Route exact key={index} path={`/EffyBuy/resources/case_study/${item.id}`} component={() => <Checking data={item} />} />
               })
             }
                    </div>
                    </div>
                    <div className="case_study_stories_of_impact">
                        <div className="case_study_stories_of_impact_title">
                            More interesting stories of<br/><div style={{"color":"#008ed9","marginTop":"-10px"}}>impact</div>
                        </div>
                        <div className="case_study_stories_of_impact_data">
                            <div className="case_study_stories_of_impact_data_left">
                                <div className="case_study_stories_of_impact_data_left_image_div">
                                    <img src="https://yellow.ai/images/customer-stories/leo-cofee.svg" alt=""/>
                                </div>
                                <br/>
                                <div className="case_study_stories_of_impact_data_left_desc_div">
                                    How Leo’s Coffee is providing exceptional customer engagement with yellow.ai
                                </div>
                                <br/>
                                <div className="case_study_stories_of_impact_data_left_button_div">
                                    <div className="case_study_stories_of_impact_data_button">
                                        <span>
                                            Read more {'>'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="case_study_stories_of_impact_data_right ">
                                
                                <div className="case_study_stories_of_impact_data_right_story">
                                    <div className="case_study_stories_of_impact_data_right_story_image_div">
                                        <img src="https://yellow.ai/images/customer-stories/spencers.svg" alt=""/>
                                    </div>
                                    <div className="case_study_stories_of_impact_data_right_story_desc_div">
                                        <div className="case_study_stories_of_impact_data_right_story_desc_div_desc">
                                            How Spencer’s built and launched the Spencer’s Grocery Assistant in just 5 days.
                                        </div>
                                        <div className="case_study_stories_of_impact_data_button">
                                            <br/>
                                        <span>
                                            Read more {'>'}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="case_study_stories_of_impact_data_right_story">
                                    <div className="case_study_stories_of_impact_data_right_story_image_div">
                                            <img src="https://yellow.ai/images/customer-stories/asian-paints.svg" alt=""/>
                                    </div>
                                    <div className="case_study_stories_of_impact_data_right_story_desc_div">
                                        <div className="case_study_stories_of_impact_data_right_story_desc_div_desc">
                                            How Asian Paints reduced support call volumes by 25% with yellow.ai.
                                        </div>
                                        <div className="case_study_stories_of_impact_data_button">
                                            <br/>
                                        <span>
                                            Read more {'>'}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="case_study_stories_of_impact_data_right_story">
                                    <div className="case_study_stories_of_impact_data_right_story_image_div">
                                            <img src="https://yellow.ai/images/customer-stories/zest.svg" alt=""/>
                                    </div>
                                    <div className="case_study_stories_of_impact_data_right_story_desc_div">
                                        <div className="case_study_stories_of_impact_data_right_story_desc_div_desc">
                                        How Zest Money reduced query handling time by 75% with our chatbots.
                                        </div>
                                        <div className="case_study_stories_of_impact_data_button">
                                            <br/>
                                        <span>
                                            Read more {'>'}
                                        </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="case_study_latest_insights_main_div container">
                        <div className="case_study_latest_insights_title">
                            Latest <span style={{"color":"#008ed9"}}>insights</span>
                        </div>
                        <div className="case_study_latest_insights_all">
                            <div className="case_study_latest_insights_individual">
                                <div className="case_study_latest_insights_individual_image">
                                    <img src="https://yellow.ai/images/yellow-ai-raises2.jpg" alt=""/>
                                </div>
                                <br/>
                                <div className="case_study_latest_insights_individual_cat">
                                    BLOG
                                </div>
                                <br/>
                                <div className="case_study_latest_insights_individual_desc">
                                    Yellow.ai raises $78.15M to deliver total CX automation
                                </div>
                            </div>
                            <div className="case_study_latest_insights_individual">
                                <div className="case_study_latest_insights_individual_image">
                                    <img src="https://yellow.ai/images/yellow-ai-raises2.jpg" alt=""/>
                                </div>
                                <br/>
                                <div className="case_study_latest_insights_individual_cat">
                                    WHITEPAPER
                                </div>
                                <br/>
                                <div className="case_study_latest_insights_individual_desc">
                                    Adopt a customer centric approach to drive CX
                                </div>
                            </div>
                            <div className="case_study_latest_insights_individual">
                                <div className="case_study_latest_insights_individual_image">
                                    <img src="https://yellow.ai/images/yellow-ai-raises2.jpg" alt=""/>
                                </div>
                                <br/>
                                <div className="case_study_latest_insights_individual_cat">
                                    WHITEPAPER
                                </div>
                                <br/>
                                <div className="case_study_latest_insights_individual_desc">
                                    How voice AI boosts customer experience & sales
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="case_study_request_demo_main_div">
                        <div className="case_study_request_demo_title">
                            Be part of our industry-leading clan of<br/>brands
                        </div>
                        <br/>
                        <br/>
                        <div className="case_study_request_demo_button">
                            <PopupButton
                            url="https://calendly.com/bizgamsupport/effybuy"
                            text="Request Demo"
                            pageSettings={{
                                backgroundColor: 'ffffff',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: '008ed9',
                                textColor: '4d5055',
                            }}
                            styles={{
                                color:"black",
                                backgroundColor: 'white',
                                border:"none",
                                fontSize:"30px",
                                borderRadius:"6px"
                                }}/>
                        </div>
                    </div>

                
            </div>
        )
    }
}
