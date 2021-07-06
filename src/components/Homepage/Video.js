import React, { Component } from 'react'
import './video.css'
import ReactPlayer from 'react-player/youtube'
// import videoo from '../../video/EffyBuy.mp4'
import { Modal, Button } from "react-bootstrap";


export default class Video extends Component {
    state={
      isOpen:false
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false })
    render() {
        return (
              <div className="video_main_div">

<div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/embed/xpwm75uZQBs'
                    width='80%'
                    height='112%'
                    controls={true}
                    />
                  {/* <iframe style={{width:'100%',height:'50%'}} src="https://www.youtube.com/embed/xpwm75uZQBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                {/* </div> */}
                </div>

                  <div className="signup">
                    <Button className="modal_buttons modal_request_demo_button" variant="primary" onClick={this.openModal}>
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
                    </Modal>
                    </div>
                    {/* <div> */}
                      
                    

                
              </div>
        )
    }
}
