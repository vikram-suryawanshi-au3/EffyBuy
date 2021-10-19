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
                            <Modal.Body className="vvvvvv">
                                {/* <svg width="100%" style={{"position":"absolute","top":"0"}} height="100%" id="svg" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,233 0,233 C 45.77577319587628,278.56222385861565 91.55154639175257,324.12444771723125 148,313 C 204.44845360824743,301.87555228276875 271.56958762886603,234.06443298969074 335,233 C 398.43041237113397,231.93556701030926 458.1701030927835,297.61782032400583 527,309 C 595.8298969072165,320.38217967599417 673.75,277.4642857142857 741,274 C 808.25,270.5357142857143 864.8298969072165,306.5250368188512 924,290 C 983.1701030927835,273.4749631811488 1044.930412371134,204.4355670103093 1095,207 C 1145.069587628866,209.5644329896907 1183.4484536082475,283.73269513991164 1239,300 C 1294.5515463917525,316.26730486008836 1367.2757731958764,274.6336524300442 1440,233 C 1440,233 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,466 0,466 C 63.02301178203241,483.87076583210603 126.04602356406482,501.7415316642121 181,500 C 235.95397643593518,498.2584683357879 282.8389175257731,476.9046391752577 349,469 C 415.1610824742269,461.0953608247423 500.5983063328425,466.63991163475697 557,484 C 613.4016936671575,501.36008836524303 640.7678571428571,530.5357142857142 705,515 C 769.2321428571429,499.4642857142857 870.3302650957289,439.21723122238586 929,420 C 987.6697349042711,400.78276877761414 1003.911082474227,422.5953608247422 1058,456 C 1112.088917525773,489.4046391752578 1204.0254050073638,534.401325478645 1274,538 C 1343.9745949926362,541.598674521355 1391.9872974963182,503.7993372606775 1440,466 C 1440,466 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 350)"></path></svg> */}
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
