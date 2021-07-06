import React, { Component } from 'react'
import './aboutus.css'
import about_us_img from '../icons/About us/about_us.png'
import Anup from '../icons/About us/anup_agarwal.jpg'
import Parthiban from '../icons/About us/parthiban.jpeg'
import jebanesan from '../icons/About us/jebanesan.jpg'


export default class Aboutus extends Component {

    state={
        isOpen1:false
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        document.title="EffyBuy | About Us"
    }

    openModal1 = () => this.setState({ isOpen1: true });
    closeModal1 = () => this.setState({ isOpen1: false })

    render() {
        return (
            <div>

                <div className="about_us_head">
                    About Us
                </div>

                <div className="about_us_text_and_img_div">
                    <div className="about_us_text_div">
                        EffyBuy
                        <div className="about_us_text_inner_div">

                        We Make Negotiations
                        With Suppliers and<br/>Buyers As Easy
                        As Watching YouTube
                        Videos. <br/>Literally!
                        </div>
                    </div>
                    <div className="about_us_img_div">
                        <img alt="about_us_image" src={about_us_img}></img>
                    </div>
                </div>

                <div className="about_us_why_u_need_us_div">
                    <div className="about_us_why_u_need_us_title">
                        Why Do You Need Us?
                    </div>
                    <div className="about_us_why_u_need_us_paragraphs">
                        <p>
                            Truth Be Told, most business software’s are complex, clunky expensive to procure or
                            develop and hard to implement. Even after that, you need dedicated teams or
                            outsourced professional services to manage them.
                        </p>
                        <p>
                            Moreover, most of the limelight is on Sales Software’s and HR Functions. While purchase is
                            accounted as 50-70% of overall expenditure, it doesn’t get the limelight it deserves,
                            when it comes to using modern tech tools.
                        </p>
                        <p>
                            But Most Importantly, why should the negotiation skills of your team decide the
                            company’s profitability? Wouldn’t it be ideal to add the competitive advantage of
                            10/10 Negotiations skills? 
                        </p>
                        <p>
                            Eureka! Thus, was seeded the idea of EffyBuy.com
                        </p>
                    </div>
                </div>

                <div className="about_us_our_first_believers_div">
                    <div className="about_us_our_first_believers_title">
                        Our First Believers / Early Backers
                    </div>
                    <div className="about_us_our_first_believers_ul">
                        <ul>
                            <li>
                                ‘Bull’ which belongs to 54 year old AV group which has diversified companies
                                employing more than 2000 people.
                            </li>
                            <li>
                                Bull is innovation driven organization with strong R&D team, holds many patents to
                                its credit and has been recognized by the Ministry of Science and Technology as
                                an in-house R&D company.
                            </li>
                            <li>
                                Bull is Largest selling tractor attachment manufacturer in India with World Wide
                                sales and service network of 600 plus dealers and 7 branch offices across India.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="about_us_our_guiding_force_div">
                    <div className="about_us_our_guiding_force_title">
                        Our Guiding Force
                    </div>
                    <div className="about_us_our_guiding_force_cards_div">
                        <div className="about_us_our_guiding_force_card">
                            <div className="about_us_our_guiding_force_card_image_div">
                                <img className="about_us_our_guiding_force_card_image parthiban_image" src={Parthiban} alt="first_image"></img>
                            </div>
                            <div className="about_us_our_guiding_force_card_name">
                                Parthiban V
                            </div>
                            <div className="about_us_our_guiding_force_card_desc">
                                Successfully build in-house
                                & from scratch India’s
                                Largest Tractor Attachment
                                business and one of the Top
                                4 CE business. Currently
                                Owns & Leads a 500Cr
                                Corporate Business House.
                            </div>
                            <div className="about_us_our_guiding_force_card_position">
                                Chairman & Director
                            </div>
                            <div className="about_us_our_guiding_force_card_social">
                                {/* <IconButton>

                                <Fab color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                                </IconButton> */}
                                <div>
                                    {/* <a href="/EffyBuy/about_us" rel="noreferrer" target="_blank">
                                        <button type="button" class="btn btn-li"><i class="fa fa-linkedin"></i></button>
                                    </a> */}
                                    {/* <a href="https://www.linkedin.com/in/anup-agarwal/" rel="noreferrer" target="_blank">
                                        <button type="button" class="btn btn-li"><i class="fa fa-linkedin"></i></button>
                                    </a> */}
                                </div>
                                <div>
                                    <a href="mailto:admin@bizgam.com">
                                        <button type="button" class="btn btn-email"><i class="fa fa-envelope"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="about_us_our_guiding_force_card">
                        <div className="about_us_our_guiding_force_card_image_div">
                                <img className="about_us_our_guiding_force_card_image" src={Anup} alt="Anup_Agarwal"></img>
                            </div>
                            <div className="about_us_our_guiding_force_card_name">
                                Anup Agarwal
                            </div>
                            <div className="about_us_our_guiding_force_card_desc">
                                Professional Career of 12
                                Years advising large
                                businesses & MNCs on their
                                organic and inorganic growth
                                plans. Also, built and
                                launched India’s 1st online
                                catering platform.
                            </div>
                            <div className="about_us_our_guiding_force_card_position">
                                Director
                            </div>
                            <div className="about_us_our_guiding_force_card_social">
                                {/* <IconButton>

                                <Fab color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                                </IconButton> */}
                                <div>
                                    <a href="https://www.linkedin.com/in/anup-agarwal/" rel="noreferrer" target="_blank">
                                        <button type="button" class="btn btn-li"><i class="fa fa-linkedin"></i></button>
                                    </a>

                                </div>
                                <div>
                                <a href="mailto:anup@bizgam.com">
                                    <button type="button" class="btn btn-email"><i class="fa fa-envelope"></i></button>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="about_us_our_guiding_force_card">
                        <div className="about_us_our_guiding_force_card_image_div">
                                <img className="about_us_our_guiding_force_card_image" src={jebanesan} alt="first_image"></img>
                            </div>
                            <div className="about_us_our_guiding_force_card_name">
                                Jebanesan Croos
                            </div>
                            <div className="about_us_our_guiding_force_card_desc">
                            Three decades of Hands on Experience in designing, 
                            building and implementing world class ERP and Cloud 
                            based products using Open Source Technologies across leading 
                            corporate brands like ELGI and Murugappa Group.
                            </div>
                            <div className="about_us_our_guiding_force_card_position">
                                Director & CTO
                            </div>
                            <div className="about_us_our_guiding_force_card_social">
                                {/* <IconButton>

                                <Fab color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                                </IconButton> */}
                                <div>
                                <a href="https://www.linkedin.com/in/jebanesan-croos-77373723/" rel="noreferrer" target="_blank">
                                        <button type="button" class="btn btn-li"><i class="fa fa-linkedin"></i></button>
                                    </a>

                                </div>
                                <div>
                                    <a href="mailto:admin@bizgam.com">
                                        <button type="button" class="btn btn-email"><i class="fa fa-envelope"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
