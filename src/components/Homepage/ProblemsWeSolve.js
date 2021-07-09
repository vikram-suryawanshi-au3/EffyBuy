import React, { Component } from 'react'
import './problemsWeSolve.css'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

// import IconButton from "@material-ui/core/IconButton";
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import AddToQueueIcon from '@material-ui/icons/AddToQueue';
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import BeenhereIcon from '@material-ui/icons/Beenhere';

// import ArchiveIcon from '@material-ui/icons/Archive';

import Efficient_buying_process from '../../icons/Problems we solve/Efficient_buying_process.svg'
import Expensive_procurement_tools from '../../icons/Problems we solve/Expensive_procurement_tools.svg'
import Invisibility_Department from '../../icons/Problems we solve/Invisibility_Department.svg'
import Negotiation_skills from '../../icons/Problems we solve/Negotiation_skills.svg'
import Reducing_buying_cost from '../../icons/Problems we solve/Reducing_buying_cost.svg'

// import Efficient_buying_process_img from '../../icons/Illustrator/Effecient_buying_process.png'
// import Expensive_procurement_tools_img from '../../icons/Illustrator/Expensive_procurement_tools.png'
// import Invisibility_Department_img from '../../icons/Illustrator/Lack_of_visibility_in_sourcing_department.png'
// import Negotiation_skills_img from '../../icons/Illustrator/Negotation_skill.png'
// import Reducing_buying_cost_img from '../../icons/Illustrator/Reduce_buying_cost.png'

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([EffectCoverflow]);

export default class Yello extends Component {
    render() {
        return (
            <div className="problems_we_solve_main_div">

            <h1 className="problems_we_solve_title">Some problems <span style={{color:"#008ed9"}}>We Solve</span> !</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{marginTop:"100px"}}>
            <ol className="carousel-indicators">
                <div className="myyy active" data-target="#carouselExampleIndicators" data-slide-to="0">
                    <div className="carousel-indicators_li_div">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" >
                        {/* <i class="fa fa-caret-square-o-down fa-4x" aria-hidden="true"></i>*/}
                        <img alt="" className="problems_we_solve_icon" src={Reducing_buying_cost} style={{width:"70px"}}></img>
                        {/* <IconButton className="icon_btn">
                            <ArchiveIcon className="material_icon" style={{ fontSize: "40", color:"black" }}/>
                        </IconButton> */}
                        </li>
                        <div style={{textAlign:"center"}} >Reducing buying cost</div>
                    </div>
                </div>

                

                <div className="myyy" data-target="#carouselExampleIndicators" data-slide-to="1">
                    <div className="carousel-indicators_li_div">
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" >
                        {/* <i class="fa fa-caret-square-o-up fa-4x" aria-hidden="true"></i> */}
                            <img alt="" className="problems_we_solve_icon" src={Negotiation_skills} style={{width:"70px"}}></img>
                        <div>
                        </div>
                        {/* <IconButton className="icon_btn">
                            <AddToQueueIcon className="material_icon" style={{ fontSize: "40", color:"black" }}/>
                        </IconButton> */}
                        </li>
                        <div style={{textAlign:"center"}} >Improving negotiation skills</div>
                    </div>
                </div>

                <div className="myyy" data-target="#carouselExampleIndicators" data-slide-to="2">
                    <div className="carousel-indicators_li_div">
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" >
                        {/* <i class="fa fa-expand fa-4x" aria-hidden="true"></i> */}
                        <img alt="" className="problems_we_solve_icon" src={Efficient_buying_process} style={{width:"90px"}}></img>
                        {/* <IconButton className="icon_btn">
                            <BeenhereIcon className="material_icon" style={{ fontSize: "40", color:"black" }}/>
                        </IconButton> */}
                        </li>
                        <div style={{textAlign:"center"}} >Efficient buying process</div>
                    </div>
                </div>

                <div className="myyy" data-target="#carouselExampleIndicators" data-slide-to="3">
                    <div className="carousel-indicators_li_div">
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" >
                        {/* <i class="fa fa-usd fa-4x" aria-hidden="true"></i> */}
                        <img alt="" className="problems_we_solve_icon" src={Expensive_procurement_tools} style={{width:"70px"}}></img>
                        {/* <IconButton className="icon_btn">
                            <MonetizationOnIcon className="material_icon" style={{ fontSize: "40", color:"black" }}/>
                        </IconButton> */}
                        </li>
                        <div style={{textAlign:"center"}} >Expensive procurement tools</div>
                    </div>
                </div>

                

                <div className="myyy" data-target="#carouselExampleIndicators" data-slide-to="4">
                    <div className="carousel-indicators_li_div">
                        <li data-target="#carouselExampleIndicators" data-slide-to="4" >
                        {/* <i class="fa fa-low-vision fa-4x" aria-hidden="true"></i>*/}
                        <img alt="" className="problems_we_solve_icon" src={Invisibility_Department} style={{width:"70px"}}></img>
                        {/* <IconButton className="icon_btn">
                            <VisibilityOffIcon className="material_icon" style={{ fontSize: "40", color:"black" }}/>
                        </IconButton> */}
                        </li>
                        <div style={{textAlign:"center"}}>Lack of visibility in sourcing department</div>
                    </div>
                </div>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel_main">
                    <div className="carousel_img">
                        
                            <img className="carousel_image" style={{width:"600px", height:"350px"}} src="https://i.ibb.co/QnCSvMH/Reduce-buying-cost.png" alt="Second slide"/>
                        </div>
                        <div className="carousel_desc">
                            <h4 style={{fontWeight:"bold"}} >Reducing buying cost</h4>
                            <div className="carousel_paragraph"> 
                                
                                <h5 className="carousel_paragraph1">
                                Cost optimization and cost-cutting are quite different concepts. 
                                While cost-cutting is a short-term need to actualize savings, Cost Optimization 
                                or Reducing Buying Cost is a sustainable long-term strategy to increase business 
                                profitability and competitiveness. Want to reducing your buying cost up to 40%?
                                </h5>
                                <br/>
                                   
                                <div >
                                    <button className="btn btn-sm join_button"> Join Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                

                <div className="carousel-item">
                <div className="carousel_main">
                <div className="carousel_img">
                            <img style={{width:"600px", height:"350px"}} src="https://i.ibb.co/NrkTjB2/Negotation-skill.png" alt="Second slide"/>
                        </div>
                        <div className="carousel_desc">
                            <h4 style={{fontWeight:"bold"}}>Improving negotiation skills</h4>
                            <div className="carousel_paragraph"> 
                                
                                <h5 className="carousel_paragraph1">
                                Are you looking to enhance the negotiations skills of your purchase team? 
                                Do you believe if you can achieve negotiation skill of 10/10 your profitability 
                                would improve further? Look no further, our Intelligent negotiation engines ensure 
                                that your purchases happen at 10/10 negotiation skill. 
                                So, do you want give your team the power of perfect negotiation skill?
                                </h5>
                                   
                                <br/>
                                   
                                <div >
                                    <button className="btn btn-sm join_button"> Join Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel-item">
                <div className="carousel_main">
                        <div className="carousel_img">
                            <img style={{width:"600px", height:"350px"}} src="https://i.ibb.co/XZ06zBp/Effecient-buying-process.png" alt="Second slide"/>
                        </div>
                        <div className="carousel_desc">
                            <h4 style={{fontWeight:"bold"}}>Efficient buying process</h4>
                            <div className="carousel_paragraph"> 
                                
                                <h5 className="carousel_paragraph1">
                                Are you still buying products as a reaction to identified shortages? 
                                Do you have many repeat purchases which eat a lot of time and resource? 
                                Is your sourcing team overburdened or misses out on repeat purchase orders? 
                                Do you waste a lot of time, sharing purchase requirement with multiple suppliers? 
                                Do you want to automate your negotiations? 
                                Do you want to make the entire procurement process more efficient?
                                </h5>
                                   
                                <br/>
                                   
                                <div>
                                    <button className="btn btn-sm join_button"> Join Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel-item">
                <div className="carousel_main">
                <div className="carousel_img">
                            <img style={{width:"600px", height:"350px"}} src="https://i.ibb.co/nR5Q4MD/Expensive-procurement-tools.png" alt="Second slide"/>
                        </div>
                        <div className="carousel_desc">
                            <h4 style={{fontWeight:"bold"}}>Expensive procurement tools</h4>
                            <div className="carousel_paragraph"> 
                                
                                <h5 className="carousel_paragraph1">
                                Do you want to use procurement software in your sourcing department 
                                but the costs are prohibitive? A great procurement software not just improves 
                                the reporting and data management for your sourcing department but also makes 
                                your sourcing team more efficient. 
                                Do you want to try our procurement tool for free?
                                </h5>
                                   
                                <br/>
                                   
                                <div>
                                    <button className="btn btn-sm join_button"> Join Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel-item">
                <div className="carousel_main">
                <div className="carousel_img">
                            <img style={{width:"600px", height:"350px"}} src="https://i.ibb.co/xq6mnVK/Lack-of-visibility-in-sourcing-department.png" alt="Second slide"/>
                        </div>
                        <div className="carousel_desc">
                            <h4 style={{fontWeight:"bold"}}>Lack of visibility in sourcing department</h4>
                            <div className="carousel_paragraph"> 
                                
                                <h5 className="carousel_paragraph1">
                                Souring department is responsible for all your cost controls and 
                                take the lion share of all business activities compared to financials mapping. 
                                However, unlike Sales (CRM tools) and HR (HRMS tools) the Sourcing department doesn’t
                                 get the visibility at times due to non-availability of proper reporting / efficiency enhancing tools. 
                                Do you want more visibility in your sourcing process?
                                </h5>
                                   
                                <br/>
                                   
                                <div >
                                    <button className="btn btn-sm join_button"> Join Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
</div>


            </div>
        )
    }
}
