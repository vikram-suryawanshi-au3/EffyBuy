import React from 'react'
import './calculations.css'
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'



export default class Calculations extends React.Component {
  state={
    purchase_value:20000000,
    rating:5,
    result:1400000,
    symbol:'$',
    loose_save:'loosing',
    color:'red'
  }

  componentDidMount(){
    let url2 = 'https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1'
        fetch(url2).then(res => res.json()).then(res=>{
            if(res.country_code === 'IN'){
                this.setState({
                    symbol: '₹'
                })
            }else if(res.country_code === 'JP'
            // res.country_code === 'US' || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
            // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
            ){
                    this.setState({
                        symbol: '¥'
                    })
                }
                else if(res.country_code === 'US' 
                // || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
                // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
                ){
                    this.setState({
                        symbol: '$'
                    })
                }
                else if (res.country_code === 'NL' 
                // || 'AD' || 'BE' || 'ES' || 'GP' || 'IE' || 'IT' || 'AT' || 'GR'
                // || 'CY' || 'LV' || 'LT' || 'LU' || 'MT' || 'MQ' || 'YT' || 'MC' || 'PT' || 'FR' || 'GF' || 
                // 'RE' || 'PM' || 'DE' || 'SM' || 'SK' || 'SI' || 'FI' || 'EE' || 'TF' || 'ME' || 'BL' || 
                // 'AX' || 'MF'
                ){
                        this.setState({
                            symbol: '€', // EURO
                        })
                    }else{
                        this.setState({
                    symbol: '$'
                })
            }
        })
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  handleSliderChange = name => (e, value) => {
    this.setState({
      [name]:value
    })

    let percentage = [-10,-8,-6,-5,-4,-3,-2,-1,1,3]
        let {rating} = this.state
        let reduction_value = (value * 3)/100
        if(rating === 9){
            this.setState({
              result:this.numberWithCommas(Math.floor(reduction_value))
            })
        }else if(rating === 10){
          this.setState({
            result:this.numberWithCommas(Math.floor(reduction_value - (reduction_value/100)))
          })
        }else{
            let percentageSaving = (value * percentage[rating - 1]) / 100
            this.setState({
              result:this.numberWithCommas(Math.floor(-(percentageSaving-reduction_value)))
            })
        }
  }
  handleSliderChange2 = name => (e, value) => {
    this.setState({
      [name]:value
    })
    if(value > 9){
      this.setState({
        loose_save:'saving',
        color:'green'
      })
    }else{
      this.setState({
        loose_save:'loosing',
        color:'red'
      })
    }
    let percentage = [-10,-8,-6,-5,-4,-3,-2,-1,1,3]
        let {purchase_value} = this.state
        let reduction_value = (purchase_value * 3)/100
        if(value === 9){
            this.setState({
              result:this.numberWithCommas(Math.floor(reduction_value))
            })
        }else if(value === 10){
          this.setState({
            result:this.numberWithCommas(Math.floor(reduction_value - (reduction_value/100)))
          })
        }else{
            let percentageSaving = (purchase_value * percentage[value - 1]) / 100
            this.setState({
              result:this.numberWithCommas(Math.floor(-(percentageSaving-reduction_value)))
            })
        }
  }

  inputChange = name => (e, value) => {
    if (e.target.value < 100000) {
      this.setState({
        [name]:100000
      })
    } else if (e.target.value > 50000000) {
      this.setState({
        [name]:50000000
      })
    } else {
      this.setState({
        [name]:e.target.value
      })
    }

    let percentage = [-10,-8,-6,-5,-4,-3,-2,-1,1,3]
        let {rating} = this.state
        let reduction_value = (e.target.value * 3)/100
        if(rating === 9){
            this.setState({
              result:this.numberWithCommas(Math.floor(reduction_value))
            })
        }else if(rating === 10){
          this.setState({
            result:this.numberWithCommas(Math.floor(reduction_value - (reduction_value/100)))
          })
        }else{
            let percentageSaving = (e.target.value * percentage[rating - 1]) / 100
            this.setState({
              result:this.numberWithCommas(Math.floor(-(percentageSaving-reduction_value)))
            })
        }

  }

    handleBlur = name => (e, value) => {
      if (value < 100000) {
        this.setState({
          [name]:100000
        })
      } else if (value > 5000000) {
        this.setState({
          [name]:5000000
        })
      }
    };

    calculate(){
        let percentage = [-10,-8,-6,-5,-4,-3,-2,-1,1,3]
        let {purchase_value,rating} = this.state
        let reduction_value = (purchase_value * 3)/100
        if(rating === 9){
            this.setState({
              result:Math.floor(reduction_value)
            })
        }else if(rating === 10){
          this.setState({
            result:Math.floor(reduction_value - (reduction_value/100))
          })
        }else{
            let percentageSaving = (purchase_value * percentage[rating - 1]) / 100
            this.setState({
              result:Math.floor(-(percentageSaving-reduction_value))
            })
        }
    }

  render() {
    let {purchase_value,rating,result} = this.state
        return (
          <div className="calculations_main">
            <div className="calculations_border">
            <div className="calculations">
                <div className="calculation_sub">
                  <div className="calculation_title">
                    <b>What is your procurement value ? </b>
                  </div>
                  <br className="calculation_sub_break"/>
                  <div>
                    <div style={{marginTop:"10px"}}>
                      <Slider
                      className="value_slider"
                      value={purchase_value}
                      onChange={this.handleSliderChange('purchase_value')}
                        valueLabelDisplay="on"
                        marks={[{value: 0,
                          label: 'min',
                        },
                        {
                          value: 50000000,
                          label: 'max',
                        }]}
                      min={100000}
                      max={50000000}
                      width={50}
                      />
                    </div>
                    <div className="min_max">
                      <div>

                      <TextField
                                onChange={this.inputChange('purchase_value')}
                        onBlur={this.handleBlur('purchase_value')}
                                value={purchase_value}
                                InputProps={{                        
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <EditIcon />
                                    </InputAdornment>
                                  ),
                                  
                                }}
                                inputProps={{
                                  step: 50000,
                                  min: 100000,
                                  max: 50000000,
                                  type: 'number',
                                  
                                }}
                                variant="filled"
                              />
                      
                    </div>
                    </div>
                  </div>
                </div>

                <div className="calculation_sub">
                  <div className="calculation_title">
                    <b>
                    Please rate your 
                    <br/>
                    Purchase Team Negotiation Skill ?
                    </b>
                  </div>
                  <div>
                    <Slider
                        value={rating}
                        className="rank_slider"
                        defaultValue={2}
                        onChange={this.handleSliderChange2('rating')}
                        valueLabelDisplay="auto"
                        marks={[{value: 1,
                          label: '1',
                        },
                        {
                          value: 2,
                          label: '',
                        },{
                          value: 3,
                          label: '',
                        },
                        {
                          value: 4,
                          label: '',
                        },{
                          value: 5,
                          label: '5',
                        },
                        {
                          value: 6,
                          label: '',
                        },{
                          value: 7,
                          label: '',
                        },
                        {
                          value: 8,
                          label: '',
                        },{
                          value: 9,
                          label: '',
                        },
                        {
                          value: 10,
                          label: '10',
                        }
                      ]}
                        step={1}
                        
                        min={1}
                        max={10}/>
                  </div>
                </div>

            </div>
                <div className="result">
                    You may be {this.state.loose_save} <span style={{color:`${this.state.color}`}}>{this.state.symbol} {this.numberWithCommas(result)}</span>
                </div>
                <div className="excel_calculations">
                  <a href="https://docs.google.com/spreadsheets/d/1DQw0gvx2TWiKzwKO5rn7wSwZG0jOW7r1NzgphN8drg0/edit?usp=sharing" rel="noreferrer"  target="_blank">Click Here For Calculation</a>
                </div>
            </div>
                <div className="improve">
                  <div className="improve_title">
                    Do you want to improve your <br/><b>team negotiation skills to 10/10 ?</b>
                  </div>
                  <div className="improve_button">
                    <Link to="/EffyBuy/pricing/effybuy">
                    <button className="btn" >START YOUR FREE TRIAL</button>
                    </Link>
                  </div>
                </div>
            </div>
        )
    }
}
