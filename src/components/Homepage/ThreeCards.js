import React, { Component } from 'react'
import './threeCards.css'
import $ from "jquery"

export default class ThreeCards extends Component {
    state={
        a:0,
        animate:true
    }

    

    componentDidMount(){
        if(this.state.animate){
            this.three_card_animation = setInterval(() => {
                $(".three_steps_main").animate({scrollLeft: 330}, 4000);
                $(".three_steps_main").animate({scrollLeft: 700}, 4000);
                $(".three_steps_main").animate({scrollLeft: 330}, 4000);
                $(".three_steps_main").animate({scrollLeft: 0}, 4000);
                },16000) 
        }else{
            clearInterval(this.three_card_animation)
        }

        let a = setInterval(()=>{
            // $('.three_steps_sub').addClass('automatic')
            // $('.three_steps_sub').toggleClass('automatic')
            $('.three_steps_sub').each(function(i, el) {
                setTimeout(function() {
                   $(el).addClass('automatic');
                   
                },i * 1000);
                setTimeout(function() {
                   $(el).removeClass('automatic');
                },((i * 1000)+1000));
             });
            
        },3000)

        

        this.setState({
            a:a
        })
        // let a = setInterval(function(event){
        //     $('.three_steps_sub').addClass('automatic')}, 1000);

        //     setInterval(function(event){
        //     $('.three_steps_sub').removeClass('automatic')}, 2000);

            
        let interval = this.state.a
        $('.main_div_full_width').hover(function(ev){
            ev.preventDefault()
            $('.three_steps_sub').removeClass('automatic')
            clearInterval(interval);
        });
        
    }
    componentWillUnmount(){
        clearInterval(this.state.a)
        clearInterval(this.three_card_animation)
        this.setState({
            animate:false
        })
    }

    render() {
        return (
            <div >
            <div className="three_steps_main main_div_full_width">
                    <div className="three_steps_sub">
                        <div className="step_heading">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            1. Add Supplier
                        </div>
                        <div className="borderr">
                        <div className="step_details">
                            Easily add supplier to your login you have shortlisted
                        </div>
                        <div className="step_card">
                            <div className="step_card_title">
                                supplier list to participate auction
                            </div>
                            <div className="step_card_details">
                                <div className="step_card_details_grey">
                                    <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}} defaultChecked ></input>
                                    <div className="step_card_details_two one12"></div>
                                </div>
                                <div className="step_card_details_grey">
                                    <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}} defaultChecked ></input>
                                    <div className="step_card_details_two one22"></div>
                                </div>
                                <div className="step_card_details_grey">
                                    <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}} name="1" value="1" defaultChecked />
                                    <div className="step_card_details_two one32" ></div>
                                </div>
                                <div className="step_card_details_grey">
                                    <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}}></input>
                                    <div className="step_card_details_two one42"></div>
                                </div>
                            </div>
                            <br/>
                            <div className="step_card_buttons">
                                <button className="step_button btn btn-sm">Add supplier</button>
                                <button className="step_button btn btn-sm">Remove supplier</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="three_steps_sub">
                        <div>
                        <div className="step_heading">
                            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                            2. Scheduling your Auction
                        </div>
                        <div className="borderr">
                        <div className="step_details">
                            Schedule them an auction, everyone will receive personilised 
                            invitations and timings to participate in auction.
                        </div>
                        <div className="step_card">
                            <div className="step_card_title">
                                send invitation
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div className="date">
                                    Date
                                </div>
                                <div className="time">
                                    Time
                                </div>
                            </div>
                            </div>
                            <div className="step_card_details">
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one two11"></div>
                                    <div className="step_card_details_two two21"></div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one two12"></div>
                                    <div className="step_card_details_two two22"></div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one two13"></div>
                                    <div className="step_card_details_two two23"></div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one two14"></div>
                                    <div className="step_card_details_two two24"></div>
                                </div>
                            </div>
                            <br/>
                            <div className="step_card_buttons">
                                <button className="step_button btn btn-sm">Send</button>
                                
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="three_steps_sub">
                        <div className="step_heading">
                            <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                            3. Choose your Supplier for right price
                        </div>
                        <div className="borderr">
                        <div className="step_details">
                            Once reverse auction is completed, effybuy will 
                            give you the best price among all supplier.
                            
                        </div>
                        <div className="step_card">
                            <div className="step_card_title">
                                Final supplier pricing
                            <div className="step_details_time">
                                <div className="auction_end_time">Auction end</div>
                                <div className="auction_end_date">Date</div>
                            </div>
                            <div className="step_details_price">
                                <div>Existing price</div>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                <div>Current price</div>
                            </div>
                            </div>
                            <div className="step_card_details">
                                <div className="step_card_details_grey_title">
                                    <div className="step_card_details_one_title">
                                        <div style={{marginRight:"10px"}}>Rank</div>
                                        <div>Supplier</div>
                                    </div>
                                    <div className="step_card_details_two_title"> 
                                        
                                        <div>Saving</div>
                                    </div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one three11"></div>
                                    <div className="step_card_details_two three three12"> 
                                        <div className="supplier"></div>
                                        <div>30%</div>
                                    </div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one three21"></div>
                                    <div className="step_card_details_two three three22"> 
                                        <div className="supplier"></div>
                                        <div>25%</div>
                                    </div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one three31"></div>
                                    <div className="step_card_details_two three three32"> 
                                        <div className="supplier"></div>
                                        <div>22%</div>
                                    </div>
                                </div>
                                <div className="step_card_details_grey">
                                    <div className="step_card_details_one three41"></div>
                                    <div className="step_card_details_two three three42"> 
                                        <div className="supplier"></div>
                                        <div>18%</div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="step_card_buttons">
                                <button className="step_button btn btn-sm">Send</button>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="three_steps_main main_div_responsive">
                <div className="three_steps_sub_res">
                    <div className="step_heading">
                        <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                        1. Add Supplier
                    </div>
                    <div className="borderr">
                    <div className="step_details">
                        Easily add supplier to your login you have shortlisted
                    </div>
                    <div className="step_card">
                        <div className="step_card_title">
                            supplier list to participate auction
                        </div>
                        <div className="step_card_details">
                            <div className="step_card_details_grey">
                                <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}} defaultChecked ></input>
                                <div className="step_card_details_two one12">HiTech Developers Ltd.</div>
                            </div>
                            <div className="step_card_details_grey">
                                <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}} defaultChecked ></input>
                                <div className="step_card_details_two one22">Palak Jewellers</div>
                            </div>
                            <div className="step_card_details_grey">
                                <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}} name="1" value="1" defaultChecked />
                                <div className="step_card_details_two one32" >Laxmi Organic ltd.</div>
                            </div>
                            <div className="step_card_details_grey">
                                <input type="checkbox" style={{marginTop:"5px", paddingRight:"5px"}}></input>
                                <div className="step_card_details_two one42">Micra Ltd.</div>
                            </div>
                        </div>
                        <br/>
                        <div className="step_card_buttons">
                            <button className="step_button btn btn-sm">Add supplier</button>
                            <button className="step_button btn btn-sm">Remove supplier</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="three_steps_sub_res">
                    <div>
                    <div className="step_heading">
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        2. Scheduling your Auction
                    </div>
                    <div className="borderr">
                    <div className="step_details">
                        Schedule them an auction, everyone will receive personilised 
                        invitations and timings to participate in auction.
                    </div>
                    <div className="step_card">
                        <div className="step_card_title">
                            send invitation
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div className="date">
                                Date : 20/03/2021
                            </div>
                            <div className="time">
                                Time : 01:30 pm
                            </div>
                        </div>
                        </div>
                        <div className="step_card_details">
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one two11">1</div>
                                <div className="step_card_details_two two21">Magna Industries</div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one two12">2</div>
                                <div className="step_card_details_two two22">Star Booking Ltd.</div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one two13">3</div>
                                <div className="step_card_details_two two23">Ram Chem & Fert.</div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one two14">4</div>
                                <div className="step_card_details_two two24">Laxmi Exports</div>
                            </div>
                        </div>
                        <br/>
                        <div className="step_card_buttons">
                            <button className="step_button btn btn-sm">Send</button>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="three_steps_sub_res">
                    <div className="step_heading">
                        <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                        3. Choose your Supplier for right price
                    </div>
                    <div className="borderr">
                    <div className="step_details">
                        Once reverse auction is completed, effybuy will 
                        give you the best price among all supplier.
                        
                    </div>
                    <div className="step_card">
                        <div className="step_card_title">
                            Final supplier pricing
                        <div className="step_details_time">
                            <div className="auction_end_time">Auction end : 05:00 pm</div>
                            <div className="auction_end_date">Date : 25/03/2021</div>
                        </div>
                        <div className="step_details_price">
                            <div>Existing price</div>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            <div>Current price</div>
                        </div>
                        </div>
                        <div className="step_card_details">
                            <div className="step_card_details_grey_title">
                                <div className="step_card_details_one_title">
                                    <div style={{marginRight:"10px"}}>Rank</div>
                                    <div>Supplier</div>
                                </div>
                                <div className="step_card_details_two_title"> 
                                    
                                    <div>Saving</div>
                                </div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one three11">1</div>
                                <div className="step_card_details_two three three12"> 
                                    <div className="supplier">Manju Drugs & Org.</div>
                                    <div>30%</div>
                                </div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one three21">2</div>
                                <div className="step_card_details_two three three22"> 
                                    <div className="supplier">Grand Pharma Ltd.</div>
                                    <div>25%</div>
                                </div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one three31">3</div>
                                <div className="step_card_details_two three three32"> 
                                    <div className="supplier">Lekha Infrastruct</div>
                                    <div>22%</div>
                                </div>
                            </div>
                            <div className="step_card_details_grey">
                                <div className="step_card_details_one three41">4</div>
                                <div className="step_card_details_two three three42"> 
                                    <div className="supplier">Hanumant Agro-Organics</div>
                                    <div>18%</div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="step_card_buttons">
                            <button className="step_button btn btn-sm">Send</button>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
