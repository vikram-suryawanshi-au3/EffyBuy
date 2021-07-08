import React, { Component } from 'react'
import './howEffybuyWork.css'
import DefineItem from "../../icons/How effy buy works/test_one.svg"
import DefineSuppliers from "../../icons/How effy buy works/test_four.svg"
import DefineAuction from "../../icons/How effy buy works/test_five.svg"
import MonitorAuction from "../../icons/How effy buy works/test_three.svg"
import ImplementResult from "../../icons/How effy buy works/test_two.svg"
// import test1 from "../../icons/How effy buy works/test_one.svg"
// import test2 from "../../icons/How effy buy works/test_two.svg"


export default class HowEffybuyWork extends Component {
    state={
        class:"How_effybuy_works_step_div",
        margin:5,
        rfq_title:"Define Auction",
        number:5,
        description:"Create the auction <br/> and mention periodicity.",
        description2:"Analyse and implement<br/>the auction for best buy."
    }

    change(e){
        if(e.target.value === 'true'){
            this.setState({
                class:"How_effybuy_works_step_div How_effybuy_works_remove_auction_element",
                margin:7,
                rfq_title:"RFQ",
                number:4,
                description:"Create the RFQ /<br/> do initial screening.",
                description2:"Place Order Directly (OR)<br/>Initiate Auction on RFQ."
            })
            // alert(e.target.value)
        }else{
            this.setState({
                class:"How_effybuy_works_step_div",
                margin:5,
                rfq_title:"Define Auction",
                number:5,
                description:"Create the auction<br/> and mention periodicity.",
                description2:"Analyse and implement<br/>the auction for best buy."
            })
            // alert("k")
        }
    }
    render() {
        return (
            <div className="How_effybuy_works_main_div">
                <div className="How_effybuy_works_main_title">
                <h1 className="how_we_work_title" style={{marginTop:"20px"}}>How <span style={{color:"#008ed9"}}>Effybuy </span>works</h1>

                <div className="monthly_yearly" onChange={(e)=>{this.change(e)}}>
                    <input id="toggle-on" className="toggle toggle-left" name="toggle" value="false" type="radio" defaultChecked/>
                    <label htmlFor="toggle-on" className="toggle_btn toggle_btn-left">Auction Process</label>
                    <input id="toggle-off" className="toggle toggle-right" name="toggle" value="true" type="radio"/>
                    <label htmlFor="toggle-off" className="toggle_btn toggle_btn-right">RFQ Process</label>
                </div>
                </div>

                <div className="How_effybuy_works_all_steps_div">

                    <div className="How_effybuy_works_step_div">
                        <div className="How_effybuy_works_step_title">
                            STEP 1
                        </div>
                        <div className="How_effybuy_works_step_description_div">
                            <div className="How_effybuy_works_step_description_title">
                                Define Items
                            </div>
                            <div className="How_effybuy_works_step_description">
                                Create or upload<br/>your purchase items.
                            </div>
                            <div className="How_effybuy_works_step_description_image">
                                <div>
                                    <img src={DefineItem} alt="DefineItem"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="How_effybuy_works_step_div">
                        <div className="How_effybuy_works_step_title">
                            STEP 2
                        </div>
                        <div className="How_effybuy_works_step_description_div">
                            <div className="How_effybuy_works_step_description_title">
                                Define Suppliers
                            </div>
                            <div className="How_effybuy_works_step_description">
                                Create/upload supplier<br/>for bidding process.
                            </div>
                            <div className="How_effybuy_works_step_description_image">
                                <div>
                                    <img src={DefineSuppliers} alt="DefineSuppliers"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="How_effybuy_works_step_div">
                        <div className="How_effybuy_works_step_title">
                            STEP 3
                        </div>
                        <div className="How_effybuy_works_step_description_div">
                            <div className="How_effybuy_works_step_description_title">
                                {this.state.rfq_title}
                            </div>
                            {/* <div className="How_effybuy_works_step_description">
                                Create the auction and<br/>mention periodicity.
                            </div> */}
                            <div className="How_effybuy_works_step_description" dangerouslySetInnerHTML={{__html: this.state.description}}>
                            </div>
                            <div className="How_effybuy_works_step_description_image">
                                <div>
                                    <img src={DefineAuction} alt="DefineAuction"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={this.state.class}>
                        <div className="How_effybuy_works_step_title">
                            STEP 4
                        </div>
                        <div className="How_effybuy_works_step_description_div">
                            <div className="How_effybuy_works_step_description_title">
                                Monitor Auction
                            </div>
                            <div className="How_effybuy_works_step_description">
                                Monitor and control the<br/>auction-in-process.
                            </div>
                            <div className="How_effybuy_works_step_description_image">
                                <div>
                                    <img src={MonitorAuction} alt="MonitorAuction"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={this.state.class}>
                        <div className="How_effybuy_works_step_title">
                            STEP 5
                        </div>
                        <div className="How_effybuy_works_step_description_div">
                            <div className="How_effybuy_works_step_description_title">
                                Analyse Auction
                            </div>
                            <div className="How_effybuy_works_step_description">
                                Analyse the auction to<br/>identify the best buy.
                            </div>
                            <div className="How_effybuy_works_step_description_image">

                            </div>
                        </div>
                    </div> */}

                    <div className="How_effybuy_works_step_div">
                        <div className="How_effybuy_works_step_title How_effybuy_works_step_title_last">
                            STEP {this.state.number}
                        </div>
                        <div className="How_effybuy_works_step_description_div">
                            <div className="How_effybuy_works_step_description_title">
                                Implement Result
                            </div>
                            {/* <div className="How_effybuy_works_step_description">
                                Implement the Auction<br/>result/purchase orders.
                            </div> */}
                            <div className="How_effybuy_works_step_description" dangerouslySetInnerHTML={{__html: this.state.description2}}>
                            </div>
                            <div className="How_effybuy_works_step_description_image">
                                <div>
                                    <img src={ImplementResult} alt="ImplementResult"></img>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
