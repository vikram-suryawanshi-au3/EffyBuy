import React, { Component } from 'react'
import './chatbot.css'
import { Modal, Button } from "react-bootstrap";

export default class Chatbot extends Component {
    state={
        isOpen:false
    }

    openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false })

    render() {
        return (
            <div className="chatbot_main_div">
                <div className="chatbot_whatsapp_div">
                    <button>
                        <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=917875757799&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?" className="whatsapp" target="_blank" title="WhatsApp us" async>
                            <span>Whatsapp </span>
                            <i className="fa fa-whatsapp fa-lg"></i>
                        </a> 
                    </button>
                </div>

                <div className="chatbot_requestdemo_div">
                <Button className="footer_subscribe_button" variant="primary" onClick={this.openModal}>
                                    {/* <img alt="" src={mail} className="social_icon mail"></img> */}
                                    Request Demo
                                        </Button>

                                        <Modal show={this.state.isOpen} onHide={this.closeModal} animation={false} 
                                            backdrop="static" dialogClassName="modal-60w">
                                        <Modal.Header closeButton className="close_button_request_demo">
                                            <Modal.Title>Request Demo</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <input className="input" placeholder="Business email address to start saving"></input>
                                            {/* <input className="input" type="area" placeholder="Enter you"></input> */}
                                            <Button variant="primary" className="modal_buttons modal_submit_button">
                                                Submit
                                            </Button>
                                        </Modal.Body>
                                    </Modal>
                </div>
            </div>
        )
    }
}
