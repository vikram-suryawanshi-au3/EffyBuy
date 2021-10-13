import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../icons/Logo_finalll.png'
import effybuy_logo from '../icons/Logo_icon192.jpg'
import $ from 'jquery'
import Resources from './Resources/Resource'



export default class Navbar extends Component {
    componentDidMount(){
        $(document).ready(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 5) {
                  $(".navbar").css("borderBottom" , "1px solid rgb(212, 212, 212)");
                }
          
                else{
                    $(".navbar").css("borderBottom" , "1px solid white");	
                }
            })
          })
    }
    render() {
        return (
       
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                <Link to="/EffyBuy">

                <div className="logo_title">
                <img src={logo} className="logo" alt="logo"></img>
                {/* <span className="navbar-brand">EffyBuy</span> */}
                </div>
                </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapse_target">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to='#'
                        data-target="dropdown-target" aria-haspopup="true" aria-expanded="false">Products
                        </Link>
                        <div className="dropdown-menu animate navbar_products" aria-labelledby="dropdown-target" data-dropdown-in="fadeInDown" data-dropdown-out="fadeOutUp">
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">
                                <div className="individual_products">
                                    <div className="individual_products_logo">
                                        <i className="far fa-sticky-note"></i>
                                    </div>
                                    <div className="individual_products_details">
                                        <div className="individual_products_title">
                                            RFP | RFQ
                                        </div>
                                        <div className="individula_products_desc">
                                            {/* Buyer's requirements and asks vendors<br/> to respond */}
                                            Learn about automated requests for<br/>quotation and proposals
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">
                                <div className="individual_products">
                                    <div className="individual_products_logo">
                                        <i className="fas fa-hammer"></i>
                                    </div>
                                    <div className="individual_products_details">
                                        <div className="individual_products_title">
                                            QUICK AUCTION
                                        </div>
                                        <div className="individula_products_desc">
                                            {/* Take a look at our Quick Auction */}
                                            Faster method to launch an auction<br/>without any set up
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">
                                <div className="individual_products">
                                    <div className="individual_products_logo">
                                        <i className="fas fa-redo"></i>
                                    </div>
                                    <div className="individual_products_details">
                                        <div className="individual_products_title">
                                            FORWARD AUCTION
                                        </div>
                                        <div className="individula_products_desc">
                                        Create auction for selling items at<br/>best price with EffyBuy
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">Reverse Auction</Link> */}
                            <Link className="dropdown-item" to='/EffyBuy/logistics' data-toggle="collapse" data-target=".navbar-collapse.show">
                                <div className="individual_products">
                                    <div className="individual_products_logo">
                                        <i className="fas fa-shipping-fast"></i>
                                    </div>
                                    <div className="individual_products_details">
                                        <div className="individual_products_title">
                                            LOGISTICS
                                        </div>
                                        <div className="individula_products_desc">
                                            {/* Take a look at our Logistics */}
                                            Learn about on time logistic with<br/>EffyBuy automated tool
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="dropdown-item" to='/EffyBuy/ReverseAuction' data-toggle="collapse" data-target=".navbar-collapse.show">
                                <div className="individual_products">
                                    <div className="individual_products_logo">
                                        <i className="fas fa-undo"></i>
                                    </div>
                                    <div className="individual_products_details">
                                        <div className="individual_products_title">
                                            REVERSE AUCTION
                                        </div>
                                        <div className="individula_products_desc">
                                            {/* Take a look at our Logistics */}
                                            Get real-time bidding with suppliers<br/>online with our tool
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* <Link className="dropdown-item" to='/EffyBuy/shipment' data-toggle="collapse" data-target=".navbar-collapse.show">Logistics</Link> */}
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to='#'
                        data-target="dropdown-target" aria-haspopup="true" aria-expanded="false" >Resources
                        </Link>
                        <div className="dropdown-menu animate " aria-labelledby="dropdown-target" data-dropdown-in="fadeInDown" 
                        data-dropdown-out="fadeOutUp" >
                            {/* <Link className="dropdown-item" to='/EffyBuy/resources/blog'>Blog</Link>
                            <Link className="dropdown-item" to='/EffyBuy/resources/case_study'>Case Studies</Link>
                            <Link className="dropdown-item" to='/EffyBuy/resources/knowledge_source'>Knowledge Source</Link> */}
                            <Resources/>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to='#'
                        data-target="dropdown-target" >Pricing
                        </Link>
                        <div className="dropdown-menu navbar_pricing" aria-labelledby="dropdown-target">
                            <Link className="dropdown-item" to='/EffyBuy/pricing/effybuy' data-toggle="collapse" data-target=".navbar-collapse.show">
                                <div className="individual_products">
                                    <div className="individual_products_logo">
                                        <img src={effybuy_logo} alt="effybuy_logo"/>
                                    </div>
                                    <div className="individual_products_details">
                                        <div className="individual_products_title">
                                            EFFYBUY
                                        </div>
                                        <div className="individula_products_desc">
                                            Take a look at effybuy pricing
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </li>

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/career">Career</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup" data-toggle="collapse" data-target=".navbar-collapse.show">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" data-toggle="collapse" data-target=".navbar-collapse.show">Login</Link>
                    </li>
                    
                </ul>
                <div  >
                </div>
            </div>

        </nav>
        )
    }
}
