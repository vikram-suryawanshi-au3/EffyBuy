import React, { Component } from 'react'
import './shipment.css'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';


export default class Shipment extends Component {
    constructor(props) {
        super(props);
        this.state = {  val:'',
        numbers:[],
        numChildren:0,
        demoo:[],
        input:[{
            weight:'',
            length:'',
            breadth:'',
            height:'',
            value:''
        }] 
    };
    }
    
    

    change(e,index){
        const { name, value } = e.target;
        const list = [...this.state.input];
        list[index][name] = value;
        this.setState({
                input:list
            })
    }

    remove(index){
        const list = [...this.state.input];
    list.splice(index, 1);
    this.setState({
        input:list
    })
    }

    
    

    added(){
        let new_data = {
            weight:'',
            length:'',
            breadth:'',
            height:'',
            value:''
        }

        this.setState({
            input:[...this.state.input,new_data]
        })
    }
    
    render() {


        return (
            <div className="shipment_main_div">
                <div className="shipment_div">
                    <div className="shipment_details_title">
                        Shipment Details
                    </div>
                    <div className="shipment_details_subtitle">
                        Enter your pickup and delivery details
                    </div>
                    <hr/>
                    <div>
                        <div className="shipment_details">
                            <div>
                                <TextField
                                    // key={true}
                                    id="outlined-number"
                                    label="Pickup pincode"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="val"
                                    // value={this.state.val}
                                    // error={this.state.val.length !== 6}
                                    // error={text === ""}
                                    // helperText={this.state.val.length !== 6 ? 'Empty field!' : ' '}
                                    onInput = {(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                                    }}
                                    onChange={(e)=>{this.change(e)}}
                                    variant="outlined"
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
                            <div>
                            
                                <TextField
                                    id="outlined-number"
                                    label="Delivery pincode"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onInput = {(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                                    }}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Delivery address"
                                    multiline
                                    rows={4}
                                    // defaultValue="Default Value"
                                    variant="outlined"
                                    
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="package_div">
                    <div className="package_details_title">
                        Package Details
                    </div>
                    <hr/>
                    <div className="package_details">
                        <TextField id="outlined-basic" label="Product name" variant="outlined" />
                        {/* <TextField id="outlined-search" label="Search field" type="search" variant="outlined" /> */}

                        <TextField
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onInput = {(e) =>{
                                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                            }}
                            defaultValue={1}
                        />
                        {/* <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                // id="outlined-adornment-amount"
                                // value={values.amount}
                                // onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl> */}
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Goods value</InputLabel>
                            <OutlinedInput
                                // id="outlined-adornment-amount"
                                // value={values.amount}
                                // onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                labelWidth={100}
                                defaultValue={0}
                            />
                        </FormControl>
                    </div>
                    <div className="package_details_second">
                        <div>
                            <FormControl variant="outlined" style={{minWidth: 200}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Load Type</InputLabel>
                                <Select
                                native
                                label="Load Type"
                                inputProps={{
                                    name: 'load_type',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                {/* <option aria-label="None" value="" /> */}
                                <option value='part_load'>Part Load</option>
                                <option value='full_load'>Full Load</option>
                                </Select>
                            </FormControl>
                            
                        </div>
                        <div>
                        <FormControl variant="outlined" style={{minWidth: 200}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Contract Periodicity</InputLabel>
                                <Select
                                native
                                label="Contract Periodicity"
                                inputProps={{
                                    name: 'contract_periodicity',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                {/* <option aria-label="None" value="" /> */}
                                <option value='one_time'>One Time</option>
                                <option value='annual'>Annually</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="weight_div">
                    <div className="weight_title_div_with_button">
                        <div className="package_details_title">
                            Weight & Dimensions
                        </div>
                        <div>

                        <div onClick={(e)=>{this.added(e)}} className="add_remove">
                            Add item +
                        </div>
                        </div>
                    </div>
                    <hr/>

                    {/* {this.state.demoo.map((item,index)=>{
                        return(
                            <div className="weight_details" key={index}>
                                {item}
                                <div onClick={()=>{this.hello(index)}} key={index} className="remove_button">remove</div>
                            </div>
                        )
                    })} */}
                        <div>
                    {this.state.input.map((item,index) => {
                        return(
                            <div className="weight_details" key={index}>
                                {/* <Fragment> */}
                <div className="weight_detaild_sub_div weight_detaild_sub_div_weight">
                    <div>
                        Weight in kg
                    </div>
                    <FormControl variant="outlined">
                        <OutlinedInput
                        type="number"
                            id="outlined-adornment-weight"
                            // value={values.weight}
                            // onChange={handleChange('weight')}
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            onChange={(e)=>{this.change(e,index)}}
                            name='weight'
                            value={item.weight}
                            width={10}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                </div>
  
                <div className="dimensions weight_detaild_sub_div">
                    <div>
                    Dimensions (in cms)
                    </div>
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
                            onChange={(e)=>{this.change(e,index)}}
                            name='length'
                            value={item.length}
                            // style={{width:"30%"}}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Length</FormHelperText>
                    </FormControl>
                    <span>X</span>
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
                            onChange={(e)=>{this.change(e,index)}}
                            name='breadth'
                            value={item.breadth}
                            // style={{width:"30%"}}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Breadth</FormHelperText>
                    </FormControl>
                    <span>X</span>
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
                            onChange={(e)=>{this.change(e,index)}}
                            name='height'
                            value={item.height}
                            // style={{width:"30%"}}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
                    </FormControl>
                </div>

                <div className="weight_detaild_sub_div">
                    <div>
                    value of the goods
                    </div>
                    <FormControl variant="outlined">
                        <OutlinedInput
                        type="number"
                            id="outlined-adornment-weight"
                            // value={values.weight}
                            // onChange={handleChange('weight')}
                            endAdornment={<InputAdornment position="end">₹</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            onChange={(e)=>{this.change(e,index)}}
                            name='value'
                            value={item.value}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Amount</FormHelperText>
                    </FormControl>
                </div>
                <div className="weight_detaild_sub_div upload_file_button">
                <Button
                    variant="contained"
                    component="label"
                    >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </div>
        {/* <div>
          <Fab color="primary" aria-label="remove" style={{marginTop:"20px"}}>
            <RemoveIcon onClick={()=>{this.del()}}/>
          </Fab>
        </div> */}
    {/* </Fragment> */}
    {/* <i className="bi bi-file-minus"></i> */}
    <div onClick={()=>{this.remove(index)}} key={index} className="remove_button">
    <i className="fa fa-minus-circle fa-2x fontawesome_icon" aria-hidden="true"></i>

        </div>
                            </div>
                        )
                    })}
                    </div>
                    </div>
                <div style={{textAlign:"center"}}>

                <Button variant="contained" color="primary" >
                    Send To Transporters
                </Button>
                </div>
            </div>
        )
    }
}
