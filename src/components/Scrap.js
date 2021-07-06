import React, { Component } from 'react'
import './scrap.css'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
// import RemoveIcon from '@material-ui/icons/Remove';
// import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

export default class Scrap extends Component {
    render() {
        return (
            <div className="shipment_main_div">
                <div className="shipment_div">
                    <div className="shipment_details_title">
                        Scrap Details
                    </div>
                    <div className="shipment_details_subtitle">
                        Enter your pickup details
                    </div>
                    <hr/>
                    <div>
                        <div className="shipment_details">
                            <div>
                                <TextField
                                    id="outlined-number"
                                    label="Pickup pincode"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="val"
                                    // value={this.state.val}
                                    // error={this.state.val.length !== 6}
                                    // error={text === ""}
                                    // helperText={this.state.val.length !== 6 ? 'Empty field!' : ' '}
                                    onInput = {(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                                    }}
                                    onChange={(e)=>{this.change(e)}}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Pickup address"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="weight_div">
                    <div className="weight_title_div_with_button">
                        <div className="package_details_title">
                            Product Details
                        </div>
                    </div>
                    <hr/>
                    <div className="scrap_weight_div">
                    <div>

                    <TextField id="outlined-basic" label="Product name" variant="outlined" />
                    </div>
                    <div>


                    <FormControl variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    labelWidth={0}
                    onChange={(e)=>{this.change(e)}}
                    />
                <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
            </FormControl>
                    </div>
                    </div>
                        
                    <div className="dimensions weight_detaild_sub_div">
                        <br/>
            <div>
               Dimensions (in cms)
            </div>

            <div className="scrap_dimension_div">
                <div>

                
            <FormControl variant="outlined">
                <OutlinedInput
                    type="number"
                    id="outlined-adornment-weight"
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">L</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                    labelWidth={0}
                    // style={{width:"30%"}}
                />
                <FormHelperText id="outlined-weight-helper-text">Length</FormHelperText>
            </FormControl>
            <span className="scrap_span">X</span>
            <FormControl variant="outlined">
                <OutlinedInput
                    type="number"
                    id="outlined-adornment-weight"
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">B</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                    labelWidth={0}
                    // style={{width:"30%"}}
                />
                <FormHelperText id="outlined-weight-helper-text">Breadth</FormHelperText>
            </FormControl>
                        <span className="scrap_span">X</span>
            <FormControl variant="outlined">
                <OutlinedInput
                    type="number"
                    id="outlined-adornment-weight"
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">H</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                    labelWidth={0}
                    // style={{width:"30%"}}
                />
                <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
            </FormControl>

            </div>
            </div>
        </div>
                    </div>
                <div style={{textAlign:"center"}}>

                <Button variant="contained" color="primary" >
                    Send To Scrap Dealer
                </Button>
                </div>
            </div>
        )
    }
}
