import React, { Component } from 'react'
import './pricing.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Brand_promise from '../../icons/1621436901571.png'
// import { Link } from 'react-router-dom'
import PricingTable from './PricingTable'

export default class Pricing extends Component {
    constructor(props){
        super(props);
        this.state={
                symbol: '$',
                startup : [125,50],
                professional : [200,100]
            }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        document.title="EffyBuy | Pricing"
        // let url = 'https://extreme-ip-lookup.com/json/'
        let url2 = 'https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1'
        fetch(url2).then(res => res.json()).then(res=>{
            if(res.country_code === 'IN'){
                this.setState({
                    symbol: '₹',
                    startup : [5000,1999],
                    professional : [10000,4999]
                })
            }else if(res.country_code === 'JP'
            // res.country_code === 'US' || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
            // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
            ){
                    this.setState({
                        symbol: '¥',
                        startup : [13750,5499],
                        professional : [27500,13749]
                    })
                }
                else if(res.country_code === 'US' 
                // || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
                // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
                ){
                    this.setState({
                        symbol: '$',
                        startup : [125,50],
                        professional : [200,100]
                    })
                }
                else if (res.country_code === 'NL' 
                // || 'AD' || 'BE' || 'ES' || 'GP' || 'IE' || 'IT' || 'AT' || 'GR'
                // || 'CY' || 'LV' || 'LT' || 'LU' || 'MT' || 'MQ' || 'YT' || 'MC' || 'PT' || 'FR' || 'GF' || 
                // 'RE' || 'PM' || 'DE' || 'SM' || 'SK' || 'SI' || 'FI' || 'EE' || 'TF' || 'ME' || 'BL' || 
                // 'AX' || 'MF'
                ){
                        this.setState({
                            symbol: '€', // EURO
                            startup : [321,127],
                            professional : [642,321]
                        })
                    }else{
                        this.setState({
                    symbol: '$',
                    startup : [125,50],
                    professional : [200,100]
                })
            }
        })
        
    }

    change(e){
        if(e.target.value === 'true'){
            // yearly
            if(this.state.symbol === '₹'){
                this.setState({
                    startup : [2500,999],
                    professional : [5000,2499]
                })
            }else if(this.state.symbol === '¥'){
                this.setState({
                    startup : [6800,2719],
                    professional : [13750,6874]
                })
            }else if(this.state.symbol === '€'){
                this.setState({
                    startup : [500,199],
                    professional : [1000,499]
                })
            }else{
                this.setState({
                    startup : [62,25],
                    professional : [125,62]
                })
            }
        }else{
            if(this.state.symbol === '₹'){
                this.setState({
                    startup : [5000,1999],
                    professional : [10000,4999]
                })
            }else if(this.state.symbol === '¥'){
                this.setState({
                    startup : [13750,5499],
                    professional : [27500,13749]
                })
            }else if(this.state.symbol === '€'){
                this.setState({
                    startup : [321,127],
                    professional : [642,321]
                })
            }else{
                this.setState({
                    startup : [125,50],
                    professional : [250,125]
                })
            }
        }
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    render() {
        return (
            <div ref={this.myRef} className="pricing_main_div">
                
                <div className="pricing_title_div" >
                    <div className="title" >
                        Saving money while procurement is just few clicks away
                    </div>
                    <ul className="title_list">
                        <li>
                            <CheckCircleIcon className="list_icon"/>
                            Forever free plans
                        </li>
                        <li>
                            <CheckCircleIcon className="list_icon"/>
                            Cancel or Switch plan anytime
                        </li>
                    </ul>
                </div>

                <div className="pricing_brand_promise_logo">
                    <img alt="brand_promise_logo" src={Brand_promise}></img>
                </div>


                <div className="pricing_cards_div">
                <div className="monthly_yearly" onChange={(e)=>{this.change(e)}}>
                    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" defaultChecked/>
                    <label htmlFor="toggle-on" className="toggle_btn toggle_btn-left">Monthly</label>
                    <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio"/>
                    <label htmlFor="toggle-off" className="toggle_btn toggle_btn-right">Yearly</label>
                </div>
                <div className="pricing_cards_main_div">

                    <div className="pricing_card">
                        <div className="card_top">
                            <div className="card_top_title without_discount">
                                FREE
                            </div>
                            <div className="card_top_price">
                                {this.state.symbol} 0
                            </div>
                            <div className="card_top_suitedfor">
                                Good for trial
                            </div>
                            <div className="card_top_button">
                                <button className="btn btn-sm">START FREE TRIAL</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="card_bottom_main_div">
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_info">
                                    Enjoy your <b>free trial</b>
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Quick Auction Setup
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    {/* Live Monitoring Of Auction */}
                                    Video Tutorials
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Email Notifications
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Trial Support
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Savings Dashboard
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STARTUP */}

                    <div className="pricing_card">
                        <div className="card_top">
                            <div className="card_top_title">
                                STARTUP
                            </div>
                            <div className="card_top_discount">
                                <del className="card_top_discount_number">{this.state.symbol}{this.numberWithCommas(this.state.startup[0])}</del> 
                                <span className="card_top_discount_text">60% Discount for 3 months</span>
                            </div>
                            <div className="card_top_price">
                                {this.state.symbol} {this.state.startup[1]}
                            </div>
                            {/* <div className="card_top_discount_text">
                                40% discount for three months
                                </div> */}
                            <div className="card_top_suitedfor">
                                For Individuals and Small teams
                            </div>
                            
                            <div className="card_top_button">
                                <button className="btn btn-sm">BUY NOW</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="card_bottom_main_div">
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_info">
                                    Everything in <b>FREE TRIAL +</b>
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Reverse Auction
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Live Monitoring Of Auction
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Forward Auction
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Auction OTP
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Notifications Activations
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PROFESSIONAL */}

                    <div className="pricing_card">
                        <div className="card_top">
                            <div className="card_top_title">
                                PROFESSIONAL
                            </div>
                            <div className="card_top_discount">
                                <del className="card_top_discount_number">{this.state.symbol}{this.numberWithCommas(this.state.professional[0])}</del> 
                                <span className="card_top_discount_text">50% Discount for 3 months</span>
                            </div>
                            <div className="card_top_price">
                                {this.state.symbol} {this.state.professional[1]}
                            </div>
                            <div className="card_top_suitedfor">
                                For Medium and Large businesses
                            </div>
                            <div className="card_top_button">
                                <button className="btn btn-sm">BUY NOW</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="card_bottom_main_div">
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_info">
                                    Everything in <b>STARTUP +</b>
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Live Chat With Supplier
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Auto Report Emailers
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Dedicated Account Manager
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Phone Support
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    3 Access Controls
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ENTERPRISE */}

                    <div className="pricing_card">
                        <div className="card_top">
                            <div className="card_top_title without_discount">
                            ENTERPRISE
                            </div>
                            <div className="card_top_price">
                                custom
                            </div>
                            <div className="card_top_suitedfor">
                                For Multi-National and Large Orgs.
                            </div>
                            <div className="card_top_button">
                                <button className="btn btn-sm">GET IN TOUCH</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="card_bottom_main_div">
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_info">
                                    Everything in <b>PROFESSIONAL +</b>
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Multiple Acces Control
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Custom Reports
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    3rd Party API Integration
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    ASN Integration
                                </div>
                            </div>
                            <div className="card_bottom_single_div">
                                <div className="card_bottom_icon">
                                    <CheckIcon/>
                                </div>
                                <div className="cardbottom_text">
                                    Barcode Integration
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                    <div className="local_tax_div">
                        Local taxes (VAT, GST, etc.) will be charged in addition to the prices mentioned.
                    </div>
                <div >
                    {/* <Link to='/BizGam/pricing/comparison'>
                        See our complete feature comparison
                    </Link> */}
                    <Accordion>
                            <AccordionSummary
                            // expandIcon={<ExpandMoreIcon color="primary" />}
                            // aria-controls="panel1a-content"
                            // id="panel1a-header"
                            >
                                <div className="comparison_link">
                                    See our complete feature comparison
                                </div>
                            {/* <Typography > */}
                            {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 1</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                                <PricingTable/>
                            </AccordionDetails>
                        </Accordion>
                </div>

            </div>

            <div className="Join_other_businesses">
                <div className="Join_other_businesses_title">
                    Become A More<br/>Profitable Business
                </div>
                <div className="image_button">
                <div>
                <button className="btn Join_other_businesses_button">
                    START YOUR FREE TRIAL
                </button>
                </div>
                {/* <div className="join_image">
                    <img style={{width:'90%'}} alt="" src="https://www.zohowebstatic.com/sites/default/files/crm/zpricing-brands-bg-1x.png"/>
                </div> */}
                </div>
                
            </div>
            



            <div className="faq_main">
                <div className="faq_title">
                    Frequently Asked Questions
                </div>

                <div className="faq_sub">

                    <div className="faq_sub_div">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            {/* <Typography > */}
                                <div className="faq_question">
                                Can I get a demo of EffyBuy?
                                </div>
                            {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 1</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                             Yes, we would be happy to demonstrate EffyBuy through a web-conference at your convenience.
                             The demo is a one hour session. To schedule your personal session, please contact <b>sales@bizgam.com.</b>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            {/* <Typography > */}
                                <div className="faq_question">
                                    What types of payment do you accept?
                                </div>
                            {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 2</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                We accept payment via Visa, MasterCard, American Express and PayPal. We also accept 
                                payment via bank transfer or check transfer for yearly subscriptions. 
                                For more details, please contact <b>sales@bizgam.com</b>.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            {/* <Typography > */}
                                <div className="faq_question">
                                    How long are your contracts?
                                </div>
                            {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 2</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                You are not bound by any contracts or commitments. EffyBuy is a pay-as-you-go service (monthly or yearly), 
                                so you can make changes to your plan whenever you need to.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="faq_sub_div">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            {/* <Typography > */}
                                <div className="faq_question">
                                    Can I switch plans??
                                </div>
                            {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 1</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Of course you can! Log in to bizgam, click the Upgrade link on the Home page, 
                            and follow the steps on the Subscription page to switch to a new plan.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            {/* <Typography > */}
                                <div className="faq_question">
                                    Have more questions?
                                </div>
                            {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 2</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                You can connect with us instantly through live chat (24x5) or by writing to us at <b>sales@bizgam.com</b>.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            {/* <Typography  > */}
                                <div className="faq_question">
                                    Is my data safe?
                                </div>
                                {/* </Typography> */}
                            {/* <Typography className={classes.heading}>Accordion 2</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                We’re fervent about keeping your data safe and secure. Our facilities feature 
                                stringent 24/7/365 security with video monitoring, biometric access, and advanced fire, 
                                flood, and theft monitoring systems. Our network security system employs the latest 
                                encryption and intrusion detection and prevention technologies.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>

                </div>


            </div>
        )
    }
}
