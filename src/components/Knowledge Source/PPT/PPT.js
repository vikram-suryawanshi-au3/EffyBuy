import React, { Component } from 'react'
import './ppt.css'
import { Modal, Button } from "react-bootstrap";

export default class PPT extends Component {
    state={
        show1:false,
        show2:false,
    }


    handleClose1 = () => {
        this.setState({
            show1:false
        })
    };
    handleShow1 = () => {
        this.setState({
            show1:true
        })
    };
    handleClose2 = () => {
        this.setState({
            show2:false
        })
    };
    handleShow2 = () => {
        this.setState({
            show2:true
        })
    };
    render() {
        return (
            <div className="ppt_main_div container">
                <div className="ppt_individual_card">
                    <div className="ppt_individual_card_image">
                        Cloud Communication for E-commerce & Last Mile Logistics
                    </div>
                    <div className="ppt_individual_card_title">
                        Cloud Communication for E-commerce & Last Mile Logistics
                    </div>
                    <div className="ppt_individual_card_desc">
                        With increasing costs for deliveries and logistics, cloud communication 
                        can help companies save cost and at the same time build brand loyalty. 
                        Here are some simple things your business might be overlooking now.
                    </div>
                    <div className="ppt_individual_card_download_button">
                        <Button variant="primary" onClick={this.handleShow1}>
                            Download
                        </Button>

                        <Modal
                            show={this.state.show1}
                            onHide={this.handleClose1}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title style={{"color":"#008ed9"}}>Download PPT</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="ppt_modal_description">
                                    <div className="ppt_modal_description_title">
                                        In this ppt you will discover
                                    </div>
                                    <div className="ppt_modal_description_points">
                                        <ul>
                                            <li>
                                                A background of customer support over phone calls
                                            </li>
                                            <li>
                                                Emergence of cloud telephony and how it empowers businesses today
                                            </li>
                                            <li>
                                                Features, benefits and best practices of cloud telephony for businesses
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr/>
                                <div className="ppt_modal_form">
                                    <form data-toggle="validator">
                                        <div className="form-group">
                                            {/* <label for="inputName">Name</label> */}
                                            <input type="text" data-minlength="4" className="form-control" id="inputName"
                                                data-error="Please enter atleast 4 words" placeholder="Name"
                                                 required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-3">
                                            {/* <label for="inputEmail" >Email</label> */}
                                            <input type="email" className="form-control" id="inputEmail" data-error="Please enter correct email address" 
                                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-3">
                                            {/* <label for="inputCompanyName" >Email</label> */}
                                            <input type="text" className="form-control" id="inputCompanyName" data-error="Please enter company name" 
                                                placeholder="Company Name" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        
                                        <br/>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Download</button>
                                        </div>
                                    </form>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>

                <div className="ppt_individual_card">
                    <div className="ppt_individual_card_image">
                        Cloud Communication for E-commerce & Last Mile Logistics
                    </div>
                    <div className="ppt_individual_card_title">
                        Cloud Communication for E-commerce & Last Mile Logistics
                    </div>
                    <div className="ppt_individual_card_desc">
                        With increasing costs for deliveries and logistics, cloud communication 
                        can help companies save cost and at the same time build brand loyalty. 
                        Here are some simple things your business might be overlooking now.
                    </div>
                    <div className="ppt_individual_card_download_button">
                        <Button variant="primary" onClick={this.handleShow2}>
                            Download
                        </Button>

                        <Modal
                            show={this.state.show2}
                            onHide={this.handleClose2}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title style={{"color":"#008ed9"}}>Download PPT</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="ppt_modal_description">
                                    <div className="ppt_modal_description_title">
                                        In this ppt you will discover
                                    </div>
                                    <div className="ppt_modal_description_points">
                                        <ul>
                                            <li>
                                                A background of customer support over phone calls
                                            </li>
                                            <li>
                                                Emergence of cloud telephony and how it empowers businesses today
                                            </li>
                                            <li>
                                                Features, benefits and best practices of cloud telephony for businesses
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr/>
                                <div className="ppt_modal_form">
                                    <form data-toggle="validator">
                                        <div className="form-group">
                                            {/* <label for="inputName">Name</label> */}
                                            <input type="text" data-minlength="4" className="form-control" id="inputName"
                                                data-error="Please enter atleast 4 words" placeholder="Name"
                                                 required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-3">
                                            {/* <label for="inputEmail" >Email</label> */}
                                            <input type="email" className="form-control" id="inputEmail" data-error="Please enter correct email address" 
                                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-3">
                                            {/* <label for="inputCompanyName" >Email</label> */}
                                            <input type="text" className="form-control" id="inputCompanyName" data-error="Please enter company name" 
                                                placeholder="Company Name" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        
                                        <br/>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Download</button>
                                        </div>
                                    </form>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
