import React, { Component } from 'react'
import './chatbot.css'
// import { Modal, Button } from "react-bootstrap";
import { PopupWidget } from "react-calendly";

export default class Chatbot extends Component {
    // state={
    //     isOpen:false
    // }

    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    

    // openModal = () => this.setState({ isOpen: true });
    //   closeModal = () => this.setState({ isOpen: false })

    render() {
        return (
            <div className="chatbot_main_div">
                <div className="chatbot_whatsapp_div">
                    <button>
                        <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=917538801133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?" className="whatsapp" target="_blank" title="WhatsApp us" async>
                            <i className="fab fa-whatsapp fa-2x"></i>
                        </a> 
                    </button>
                </div>

                <div className="chatbot_requestdemo_div">
                                    {/* <Button className="footer_subscribe_button" variant="primary" onClick={this.openModal}>
                                        Request Demo
                                    </Button>

                                    <Modal show={this.state.isOpen} onHide={this.closeModal} animation={false} 
                                            backdrop="static" dialogClassName="modal-60w">
                                        <Modal.Header closeButton className="close_button_request_demo">
                                            <Modal.Title>Request Demo</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <input className="input" placeholder="Business email address to start saving"></input>
                                            <Button variant="primary" className="modal_buttons modal_submit_button">
                                                Submit
                                            </Button>
                                        </Modal.Body>
                                    </Modal> */}
                                    <PopupWidget  url="https://calendly.com/bizgamsupport/effybuy"
                                      text="Request Demo"
                                      pageSettings={{
                                        backgroundColor: 'ffffff',
                                        hideEventTypeDetails: false,
                                        hideLandingPageDetails: false,
                                        primaryColor: '008ed9',
                                        textColor: '4d5055'
                                      }}
                                    //   color="red"
                                       />



                                    
                </div>
            </div>
        )
    }
}
