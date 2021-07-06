import React, { Component,Fragment } from 'react'
import './input.css'
// import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


export default class Input extends Component {
    state={
        num:0
    }
    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        // console.log(e.target.name)
        // console.log(e.target.value)
    }
    render() {
        let num = this.props.num
        let asd = this.state.num
        let valuu = `${this.state.num}weight`

        // alert(num)
        return (
            <Fragment>
                <div className="weight_detaild_sub_div weight_detaild_sub_div_weight">
                    <div>
                        Weight in kg
                    </div>
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
                            name={`${num}weight`}
                            onChange={(e)=>{this.change(e)}}
                            value={this.state[valuu]}
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
                            name={`${num}weightL`}
                            onChange={(e)=>{this.change(e)}}
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
                            name={`${num}weightB`}
                            onChange={(e)=>{this.change(e)}}
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
                            name={`${num}weightH`}
                            onChange={(e)=>{this.change(e)}}
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
                            id="outlined-adornment-weight"
                            // value={values.weight}
                            // onChange={handleChange('weight')}
                            endAdornment={<InputAdornment position="end">₹</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            name={`${num}amount`}
                            onChange={(e)=>{this.change(e)}}
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
    </Fragment>
        )
    }
}
