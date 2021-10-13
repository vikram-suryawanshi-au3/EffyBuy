import React, { Component } from 'react'
import './ebooks.css'
import { Modal, Button } from "react-bootstrap";

export default class Ebooks extends Component {
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
            <div className="ebooks_main_div container">
                <div className="ebook_individual_card">
                    <div className="ebook_description">
                        <div className="ebook_description_image">
                            <img src="https://mk0exoteldmve0ui0rq.kinstacdn.com/wp-content/uploads/2020/03/Remote-working-guide-1.png" alt=""/>
                        </div>
                        <div className="ebook_description_info">
                            <div className="ebook_description_info_title">
                                Remote Working Guide
                            </div>
                            <div className="ebook_description_info_desc">
                                This ebook provides you detailed guide on simplifying negotiations can simplify your entire supply 
                                chain process. This covers how to implement steps and methods across the various activities involved 
                                into the process. Also how automating RFQs process can enable to get 100s of orders in a day. 
                                This shows how to negotiate and be on 10/10 results always with the simplified tool.  
                            </div>
                        </div>
                    </div>
                    <div className="ebook_download_button">
                        <Button variant="primary" onClick={this.handleShow1}>
                            Download
                        </Button>

                        <Modal
                            show={this.state.show1}
                            onHide={this.handleClose1}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton className="ebook_modal_header">
                            {/* <Modal.Title style={{"color":"#008ed9"}}>Download E-book</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <div className="ebook_modal_description">
                                    <div className="ebook_modal_description_title">
                                        In this ebook you will discover
                                    </div>
                                    <div className="ebook_modal_description_points">
                                        <ul>
                                            <li>
                                                Procurement leaders and experts mention that to radically simplify procurement 
                                                business models is essential and it is required now!
                                            </li>
                                            {/* <li>
                                                Emergence of cloud telephony and how it empowers businesses today
                                            </li>
                                            <li>
                                                Features, benefits and best practices of cloud telephony for businesses
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <hr/>
                                <div className="ebook_modal_form">
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

                {/* <div className="ebook_individual_card">
                    <div className="ebook_description">
                        <div className="ebook_description_image">
                            <img src="https://mk0exoteldmve0ui0rq.kinstacdn.com/wp-content/uploads/2020/03/Remote-working-guide-1.png" alt=""/>
                        </div>
                        <div className="ebook_description_info">
                            <div className="ebook_description_info_title">
                                Remote Working Guide
                            </div>
                            <div className="ebook_description_info_desc">
                                Despite its many benefits, working remotely can be especially challenging for 
                                customer-facing teams. Transitioning your support and sales team to a remote working 
                                architecture can be a nightmare without the right tools and strategy.
                            </div>
                        </div>
                    </div>
                    <div className="ebook_download_button">
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
                            <Modal.Title style={{"color":"#008ed9"}}>Download E-book</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="ebook_modal_description">
                                    <div className="ebook_modal_description_title">
                                        In this ebook you will discover
                                    </div>
                                    <div className="ebook_modal_description_points">
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
                                <div className="ebook_modal_form">
                                    <form data-toggle="validator">
                                        <div className="form-group">
                                            <input type="text" data-minlength="4" className="form-control" id="inputName"
                                                data-error="Please enter atleast 4 words" placeholder="Name"
                                                 required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" id="inputEmail" data-error="Please enter correct email address" 
                                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group mt-3">
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
                </div> */}
            </div>
        )
    }
}
