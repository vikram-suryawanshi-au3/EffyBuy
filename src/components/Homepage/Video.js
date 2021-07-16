import React, { Component } from 'react'
import './video.css'
import ReactPlayer from 'react-player/youtube'
// import videoo from '../../video/EffyBuy.mp4'
// import { Modal, Button } from "react-bootstrap";
import { PopupButton } from "react-calendly";


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
                    light={true}
                    />
                  {/* <iframe style={{width:'100%',height:'50%'}} src="https://www.youtube.com/embed/xpwm75uZQBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                {/* </div> */}
                </div>

                  <div className="signup">
                    <PopupButton
                      url="https://calendly.com/bizgamsupport/effybuy"
                      text="Request Demo"
                      pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '008ed9',
                        textColor: '4d5055',
                      }}
                      styles={{
                        color:"white",
                        backgroundColor: 'red',
                        border:"none",
                        // fontSize:"25px"
                        }}/>
                  </div>
                    {/* <div> */}
                      
                    

                
              </div>
        )
    }
}
