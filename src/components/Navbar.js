import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../icons/Logo_finalll.png'
import $ from 'jquery'


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
                        <div className="dropdown-menu animate" aria-labelledby="dropdown-target" data-dropdown-in="fadeInDown" data-dropdown-out="fadeOutUp">
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">RFP | RFQ</Link>
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">Quick Auction</Link>
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">Forward Auction</Link>
                            {/* <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">Reverse Auction</Link> */}
                            <Link className="dropdown-item" to='/EffyBuy' data-toggle="collapse" data-target=".navbar-collapse.show">Logistics</Link>
                            <Link className="dropdown-item" to='/EffyBuy/ReverseAuction' data-toggle="collapse" data-target=".navbar-collapse.show">Reverse Auction</Link>
                            {/* <Link className="dropdown-item" to='/EffyBuy/shipment' data-toggle="collapse" data-target=".navbar-collapse.show">Logistics</Link> */}
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="collapse" to='/EffyBuy/resources'
                        data-target=".navbar-collapse.show" >Resources
                        </Link>
                        {/* <div className="dropdown-menu" aria-labelledby="dropdown-target">
                            <Link className="dropdown-item" to='/EffyBuy/resources/blog'>Blog</Link>
                            <Link className="dropdown-item" to='/EffyBuy/resources/case_study'>Case Studies</Link>
                            <Link className="dropdown-item" to='/EffyBuy/resources/knowledge_source'>Knowledge Source</Link>
                        </div> */}
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to='#'
                        data-target="dropdown-target" >Pricing
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="dropdown-target">
                            <Link className="dropdown-item" to='/EffyBuy/pricing/effybuy' data-toggle="collapse" data-target=".navbar-collapse.show">EffyBuy</Link>
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
