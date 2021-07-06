import React, { Component } from 'react'
import './howWeWork.css'
import DefineItem from "../../icons/How effy buy works/Define_Items.png"
import DefineSupplier from "../../icons/How effy buy works/Layer 4.png"
import DefineAuction from "../../icons/How effy buy works/Define Auction.png"
import ImplementResult from "../../icons/How effy buy works/Implement Result.png"
import AnalyseAuction from "../../icons/How effy buy works/analytics and tracking.png"
import MonitorAuction from "../../icons/How effy buy works/Monitor the Auction.png"

export default class HowWeWork extends Component {
    state={
        class:"How_we_work_sub",
        margin:5,
        rfq_title:"Define Auction",
        number:6,
        description:"Create the auction <br/> and mention periodicity.",
        description2:"Implement the Auction<br/> result/purchase orders."
    }

    change(e){
        if(e.target.value === 'true'){
            this.setState({
                class:"How_we_work_sub remove_auction_element",
                margin:7,
                rfq_title:"RFQ",
                number:4,
                description:"Create the RFQ /<br/> do initial screening.",
                description2:"Place Order Directly (OR)<br/>Initiate Auction on RFQ."
            })
            // alert(e.target.value)
        }else{
            this.setState({
                class:"How_we_work_sub",
                margin:5,
                rfq_title:"Define Auction",
                number:6,
                description:"Create the auction<br/> and mention periodicity.",
                description2:"Implement the Auction<br/> result/purchase orders."
            })
            // alert("k")
        }
    }
    render() {
        return (
            <div className="how_we_work_main_div">
                <h1 className="how_we_work_title" style={{marginTop:"20px"}}>How <span style={{color:"#008ed9"}}>Effybuy </span>works</h1>

                <div className="monthly_yearly" onChange={(e)=>{this.change(e)}}>
                    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" defaultChecked/>
                    <label htmlFor="toggle-on" className="toggle_btn toggle_btn-left">Auction Process</label>
                    <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio"/>
                    <label htmlFor="toggle-off" className="toggle_btn toggle_btn-right">RFQ Process</label>
                </div>

            <div className="How_we_work_main">

                <div className="How_we_work_sub" style={{marginLeft:`${this.state.margin}%`,marginRight:`${this.state.margin}%`}}>
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">1.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={DefineItem} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Define Items
                    </div>
                    <div className="description_div">
                        Create or upload your<br/> purchase items.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        ITEM MASTER
                    </div>
                </div>

                {/* <svg height="250px" width="75px" className="arrows"> */}
                    {/* horizontal line */}
                    {/* <line x1="10" y1="36" x2="60" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Arrow */}
                    {/* <polyline points="60,31 65,36 60,41" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></polyline> */}
                {/* </svg>        */}
                
                <div className="How_we_work_sub" style={{marginLeft:`${this.state.margin}%`,marginRight:`${this.state.margin}%`}}>
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">2.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={DefineSupplier} className="icon" alt="Define_Items" style={{width:"40px"}}></img>
                    </div>
                    <div className="heading_div">
                        Define Suppliers
                    </div>
                    <div className="description_div">
                        Create/upload supplier<br/> for bidding process.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        SUPPLIER MASTER
                    </div>
                </div>


                {/* <div className="How_we_work_sub responsive_numbering_card">
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">2.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={DefineSupplier} className="icon" alt="Define_Items" style={{width:"40px"}}></img>
                    </div>
                    <div className="heading_div">
                        Define Suppliers
                    </div>
                    <div className="description_div">
                        Create/upload supplier<br/> for bidding process.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        SUPPLIER MASTER
                    </div>
                </div> */}

                {/* <div className="res_arrows">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div> */}

                {/* <div className="How_we_work_sub responsive_numbering_card">
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">1.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={DefineItem} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Define Items
                    </div>
                    <div className="description_div">
                        Create or upload your<br/> purchase items.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        ITEM MASTER
                    </div>
                </div> */}
                

                {/* <svg height="250px" width="75px" className="arrows"> */}
                    {/* horizontal line */}
                    {/* <line x1="10" y1="36" x2="60" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Arrow */}
                    {/* <polyline points="60,31 65,36 60,41" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></polyline> */}
                {/* </svg>    */}
                
                <div className="How_we_work_sub" style={{marginLeft:`${this.state.margin}%`,marginRight:`${this.state.margin}%`}}>
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">3.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={DefineAuction} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        {this.state.rfq_title}
                    </div>
                    {/* <div className="description_div">
                        {this.state.description}
                    </div> */}
                    <div className="description_div" dangerouslySetInnerHTML={{__html: this.state.description}}/>
                    </div> 
                    <div className="bottom_div">
                        AUCTION
                    </div>
                </div>

                {/* <svg height="250px" width="140px" className="arrows"> */}
                    {/* horizontal line */}
                    {/* <line x1="10" y1="36" x2="43" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Quarter circle */}
                    {/* <path d="M43,36 a25,25 0 0,1 25 25" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></path> */}
                    {/* Vertical line */}
                    {/* <line x1="68" y1="61" x2="68" y2="250" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* <text x="12" y="90" className="heavy">Auction Process</text> */}
                    {/* <line x1="10" y1="120" x2="100" y2="120" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* <path d="M100,120 a25,25 0 0,1 25 25" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></path> */}
                    {/* <line x1="125" y1="145" x2="125" y2="250" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}

                {/* </svg> */}

                {/* <div className="res_arrows">
                    <div style={{fontSize:"10px"}}>
                        RFQ
                    </div>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    <div style={{fontSize:"10px"}}>
                        proc.
                    </div>
                </div> */}

                <div className={this.state.class} style={{marginLeft:`${this.state.margin}%`,marginRight:`${this.state.margin}%`}}>
                    <div className="How_we_work_card" >
                    <div className="top_div">
                        <div className="top_div_numbering">4.</div>
                        <div>                    
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={MonitorAuction} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Monitor Auction
                    </div>
                    <div className="description_div">
                        Monitor and control<br/> the auction-in-process.
                    </div>
                    </div>
                    <div className="bottom_div">
                        AUCTION MONITOR
                    </div> 
                </div>

                <div className={this.state.class} style={{marginLeft:`${this.state.margin}%`,marginRight:`${this.state.margin}%`}}>
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">5.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={AnalyseAuction} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Analyse Auction
                    </div>
                    <div className="description_div">
                        Analyse the auction <br/>to identify the best buy.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        AUCTION ANALYSE
                    </div>
                </div>
                
                <div className="How_we_work_sub" style={{marginLeft:`${this.state.margin}%`,marginRight:`${this.state.margin}%`}}>
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">{this.state.number}.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={ImplementResult} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Implement Result
                    </div>

                    {/* <div className="description_div" dangerouslySetInnerHTML={{__html: this.state.description2}}/>
                    </div>  */}
                    <div className="description_div" dangerouslySetInnerHTML={{__html: this.state.description2}}>
                        {/* Implement the Auction<br/> result/purchase orders.
                        Place Order Directly (OR)<br/>Initiate Auction on RFQ. */}
                    </div>
                    </div> 
                    <div className="bottom_div">
                        DOWNLOAD RESULT
                    </div>
                </div>

                {/* <svg height="250px" width="75px" className="arrows"> */}
                    {/* horizontal line */}
                    {/* <line x1="10" y1="36" x2="60" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Arrow */}
                    {/* <polyline points="10,31 5,36 10,41" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></polyline> */}
                {/* </svg>    */}
                
                

                {/* <svg height="250px" width="75px" className="arrows"> */}
                    {/* horizontal line */}
                    {/* <line x1="10" y1="36" x2="60" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Arrow */}
                    {/* <polyline points="10,31 5,36 10,41" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></polyline> */}
                {/* </svg>   */}
                
                

                {/* <svg height="250px" width="140px" className="arrows"> */}
                    {/* Vertical line */}
                    {/* <line x1="68" y1="0" x2="68" y2="11" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Quarter circle */}
                    {/* <path d="M68,11 a25,25 0 0,1 -25 25" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></path> */}
                    {/* Horizontal line */}
                    {/* <line x1="10" y1="36" x2="43" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Arrow */}
                    {/* <polyline points="10,31 5,36 10,41" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></polyline> */}
                    
                    {/* <line x1="125" y1="0" x2="125" y2="250" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                {/* </svg> */}

                {/* <div className="How_we_work_sub responsive_numbering_card">
                        <div className="res_arrows" style={{marginBottom:"32px"}}>
                        </div>
                    <div className="How_we_work_card">
                    <div className="top_div">
                        <div className="top_div_numbering">6.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={ImplementResult} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Implement Result
                    </div>
                    <div className="description_div">
                        Implement the Auction<br/> result/purchase orders.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        DOWNLOAD RESULT
                    </div>
                </div> */}

                {/* <div className="How_we_work_sub responsive_numbering_card">
                    <i className="fa fa-arrow-down res_arrows" style={{marginBottom:"5px"}}aria-hidden="true"></i>                    
                    <div className="How_we_work_card">
                    <div style={{marginBottom:"16px"}}>
                    </div>
                    <div className="top_div">
                        <div className="top_div_numbering">4.</div>
                        <div>                    
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={MonitorAuction} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Monitor Auction
                    </div>
                    <div className="description_div">
                        Monitor and control<br/> the auction-in-process.
                    </div>
                    </div>
                    <div className="bottom_div">
                        AUCTION MONITOR
                    </div> 
                </div> */}

                {/* <div className="res_arrows">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div> */}

                {/* <div className="How_we_work_sub responsive_numbering_card">
                <i className="fa fa-arrow-up res_arrows" style={{marginBottom:"5px"}}aria-hidden="true"></i>
                    <div className="How_we_work_card">
                        <div style={{marginBottom:"16px"}}>
                        </div>
                    <div className="top_div">
                        <div className="top_div_numbering">5.</div>
                        <div>
                            <i className="fa fa-2x fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <img src={AnalyseAuction} className="icon" alt="Define_Items"></img>
                    </div>
                    <div className="heading_div">
                        Analyse Auction
                    </div>
                    <div className="description_div">
                        Analyse the auction <br/>to identify the best buy.
                    </div>
                    </div> 
                    <div className="bottom_div">
                        AUCTION ANALYSE
                    </div>
                </div> */}

                {/* <svg height="70px" width="1150px" className="arrows"> */}
                    {/* Vertical line */}
                    {/* Quarter circle */}
                    {/* <path d="M68,11 a25,25 0 0,1 -25 25" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></path> */}
                    {/* Horizontal line */}
                    {/* <line x1="10" y1="36" x2="43" y2="36" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* Arrow */}
                    
                    {/* <line x1="125" y1="0" x2="125" y2="250" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* <line x1="1055" y1="35" x2="195" y2="35" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* <line x1="1080" y1="0" x2="1080" y2="10" style={{stroke:"#4da8da", strokeWidth:"2"}}></line> */}
                    {/* <path d="M1080,10 a25,25 0 0,1 -25 25" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></path> */}
                    {/* <path d="M195,35 a25,25 0 0,1 -25 -25" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></path> */}
                    {/* <text x="600" y="30" className="heavy">RFQ Process</text> */}
                    {/* <polyline points="165,10 170,5 175,10" style={{stroke:"#4da8da", strokeWidth:"2", fill:"none"}}></polyline> */}
                {/* </svg> */}
                
            </div>
            </div>
        )
    }
}
