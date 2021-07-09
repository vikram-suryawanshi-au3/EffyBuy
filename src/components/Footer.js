import React, { Component } from 'react'
import './footer.css'
import logo from '../icons/Logo_icon192.jpg'
import mail from '../icons/Social Icons/Mail.png'
import instagram from '../icons/Social Icons/instagram.png'
import twitter from '../icons/Social Icons/twitter.png'
import youtube from '../icons/Social Icons/Utube.png'
import facebook from '../icons/Social Icons/Facebook.png'
import linkedin from '../icons/Social Icons/linkedin.png'
import { Link } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";


export default class Footer extends Component {
    state={
        isOpen:false
      }
  
      openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false })
    render() {
        return (
            <div style={{position:'relative',bottom:'0'}}>
                <hr style={{backgroundColor:"#008ed9"}}></hr>
                <div className="footer_main">
                    <div className="footer_sub">
                        <div className="footer_sub_first_title">
                            <img src={logo} className="footer_logo" alt="logo"></img>
                            <div className="footer_sub_first_title_name">EffyBuy</div>
                        </div>
                        <div className="footer_sub_first_subscribe">
                                {/* <a href="mailto:admin@bizgam.com">
                            <button className="btn subscribe" href="mailto:admin@bizgam.com">
                                <div>
                                    <img alt="" src={mail} className="social_icon mail"></img>
                                </div>
                                <div>
                                    Subscribe to our newsletter
                                </div>
                            </button>
                                    </a> */}
                                    <Button className="footer_subscribe_button" variant="primary" onClick={this.openModal}>
                                    <img alt="" src={mail} className="social_icon mail"></img>
                                            Subscribe to our newsletter
                                        </Button>

                                        <Modal show={this.state.isOpen} onHide={this.closeModal} animation={false} 
                                            backdrop="static" dialogClassName="modal-60w">
                                        <Modal.Header closeButton className="close_button_request_demo">
                                            <Modal.Title>Subscribe to our newsletter</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <input className="input" placeholder="Enter your email address"></input>
                                            {/* <input className="input" type="area" placeholder="Enter you"></input> */}
                                            <Button variant="primary" className="modal_buttons modal_submit_button">
                                                Submit
                                            </Button>
                                        </Modal.Body>
                                    </Modal>
                        </div>
                        <div className="footer_sub_first_social">
                            <div>Follow us : </div>
                            {/* <Link to='/EffyBuy/shipment'> */}
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/effybuysocial/">
                                <div>
                                    <img alt="" src={instagram} className="social_icon instagram"></img>
                                </div>
                            </a> 
                            {/* </Link> */}
                            {/* <Link to='/EffyBuy/scrap'> */}
                            
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/Effybuy1">
                                <div>
                                    <img alt="" src={twitter} className="social_icon twitter"></img>
                                </div>
                            </a>

                            {/* </Link> */}
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCRgvZs5Vc5Ij378mOSgF8Bw">
                                <div>
                                    <img alt="" src={youtube} className="social_icon youtube"></img>
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/EffyBuy/">
                                <div>
                                    <img alt="" src={facebook} className="social_icon facebook"></img>
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/effybuy">
                                <div>
                                    <img alt="" src={linkedin} className="social_icon linkedin"></img>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="footer_sub">
                        <Link to="/EffyBuy/about_us">
                            <div className="footer_sub_second">
                                About us
                            </div>
                        </Link>
                        <div className="footer_sub_second">
                            How we work
                        </div>
                        <div className="footer_sub_second">
                            Case studies
                        </div>
                        <div className="footer_sub_second">
                            Resource
                        </div>

                        <a href="mailto:hr@bizgam.com">
                            <div className="footer_sub_second">
                                    Career
                            </div>
                        </a>
                        {/* <Link to="/EffyBuy/TermsAndConditions">
                            <div className="footer_sub_second">
                                T&C
                            </div>
                        </Link>
                        <Link to="/EffyBuy/privacyPolicy" target="_blank" rel="noopener noreferrer">
                            <div className="footer_sub_second">
                                Privacy Policy
                            </div>
                        </Link> */}
                        {/* <a target='_blank' rel="noreferrer" href={this.makeHref(routeConsts.CHECK_DOMAIN, {},
                        { realm: userStore.getState().realms[0].name })}>
                                Share this link to your webmaster
                        </a> */}

                    </div>
                    <div className="footer_sub footer_sub_bottom">
                        <div className="footer_sub_third_title">
                            Contact Us
                        </div>
                        <div className="footer_sub_third_number">
                            admin@effybuy.com
                        </div>
                        {/* <div className="footer_sub_third_website">
                            www.bizgam.com
                        </div> */}
                        <div className="footer_sub_third_address">
                            BizGam AI pvt ltd,
                            <br/>
                            Vikhroli,Mumbai, 
                            <br/>
                            Maharashtra 400079
                        </div>
                        {/* <div className="footer_sub_third_direction">
                            Direction
                        </div> */}
                        <Link to="/EffyBuy/TermsAndConditions">
                            <div className="footer_sub_third_address">
                                T&C
                            </div>
                        </Link>
                        <Link to="/EffyBuy/privacyPolicy">
                        {/* <Link to="/EffyBuy/privacyPolicy" target="_blank" rel="noopener noreferrer"> */}
                            <div className="footer_sub_third_address">
                                Privacy Policy
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
