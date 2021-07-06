import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './calc.css'
import StarRatings from 'react-star-ratings';
// import Button from '@material-ui/core/Button';


// const useStyles = makeStyles({
//   root: {
//     width: 500,
//     marginTop:100
//   },
// });

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function RangeSlider() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState([2, 4]);
  // const [value1, setValue1] = React.useState([4, 5]);
  // const [value2, setValue2] = React.useState([6, 10]);
  // const [value3, setValue3] = React.useState([11, 15]);
  // const [checked1, setChecked1] = React.useState(false);
  // const [checked2, setChecked2] = React.useState(false);
  // const [checked3, setChecked3] = React.useState(false);

  // const classes = useStyles();
  const [value, setValue] = React.useState([6, 10]);
  const [result, setResult] = React.useState([42, 70]);
  const [value1] = React.useState([4, 5]);
  const [value2] = React.useState([6, 10]);
  const [value3] = React.useState([11, 15]);
  const [setChecked1] = React.useState(false);
  const [setChecked2] = React.useState(false);
  const [setChecked3] = React.useState(false);
  const [rating,setRating] = React.useState(5);
  const [saving,setSaving] = React.useState('You might be loosing');



  const [crore, setCrore] = React.useState("Cr");
  const [lakh, setLakh] = React.useState("lakh");
  const [currancy, setCurrancy] = React.useState("₹");

  const handleChange = (event, newValue) => {
    if(newValue===[4,5]){
      setChecked1(true)
      setChecked2(false)
      setChecked3(false)
    }else if(newValue===[6,10]){
      setChecked1(false)
      setChecked2(true)
      setChecked3(false)
    }else if(newValue===[11,15]){
      setChecked1(false)
      setChecked2(false)
      setChecked3(true)
    }
    setValue(newValue);
    // alert(value)
  };
  const changeValue1 = (event) => {
    setValue(value1);
  };
  const changeValue2 = (event) => {
    setValue(value2);
  };
  const changeValue3 = (event) => {
    setValue(value3);
  };
  const currancyChangeinr = (event) => {
    // console.log(event)
    setCurrancy("₹");
    setCrore("Cr")
    setLakh("lakh")

    if(currancy === "₹") {
      let oneres = result[0]
      let twores = result[1]
      // alert(oneres, twores)
      // alert(typeof(oneres))
      if(rating === 10){
        let res1 = [(oneres * 1).toFixed(2), (twores * 1).toFixed(2)]
        setResult(res1)
        
      }else{
        let res1 = [(oneres * 1).toFixed(0), (twores * 1).toFixed(0)]
        setResult(res1)
      }
    }else{

    
    if(rating === 10){
      let firstVal = value[0]
    let secondVal = value[1]

    let reduction_value1 = (firstVal * 3)/100
        let reduction_value2 = (secondVal * 3)/100

      let result1 = reduction_value1 - (reduction_value1/100)
      let result2 = reduction_value2 - (reduction_value2/100)

      let ans = [(result1 * 100).toFixed(2),(result2 * 100).toFixed(2)]
    setResult(ans)
    }else{
      let res1 = [(result[0] * 100).toFixed(0), (result[1] *100).toFixed(0)]
      setResult(res1)
    }
    }
    
  };
  const currancyChangedollar = (event) => {
    // console.log(event)
    setCurrancy("$");
    setCrore("m")
    setLakh("m")
    if(currancy === "$") {
      let res1 = [result[0], result[1]]
      setResult(res1)
    }else{
    if(rating === 10){
      let firstVal = value[0]
    let secondVal = value[1]

    let reduction_value1 = (firstVal * 3)/100
        let reduction_value2 = (secondVal * 3)/100

      let result1 = reduction_value1 - (reduction_value1/100)
      let result2 = reduction_value2 - (reduction_value2/100)

      let ans = [result1.toFixed(3),result2.toFixed(3)]
    setResult(ans)
  }else{
      let res1 = [(result[0] * 0.01).toFixed(2), (result[1] *0.01).toFixed(2)]
      setResult(res1)

    }
    }
    // setResult(res1)
  };
  const changeRating = (newRating) => {
    // console.log(newRating)
    setRating(newRating);
  };
  const calculate = () => {
    // console.log(newRating)
    // setRating(newRating);
    let firstVal = value[0]
    let secondVal = value[1]

    let result1
    let result2

    let percentage = [-10,-8,-6,-5,-4,-3,-2,-1,1,3]
        // let {rating} = this.state
        let reduction_value1 = (firstVal * 3)/100
        let reduction_value2 = (secondVal * 3)/100
        if(rating === 9){
            // this.setState({
            //   result:this.numberWithCommas(Math.floor(reduction_value))
            // })
            result1 = reduction_value1
            result2 = reduction_value2
            // alert(result1)
            // alert(result2)
            let ans = [result1.toFixed(2),result2.toFixed(2)]
            if(currancy === "₹"){
              ans = [(result1 * 100).toFixed(0) ,(result2*100).toFixed(0) ]
              setResult(ans)
            }else{
              setResult(ans)
            }
            setSaving("You might be loosing")
            // alert(reduction_value1)
        }else if(rating === 10){
          // this.setState({
          //   result:this.numberWithCommas(Math.floor(reduction_value - (reduction_value/100)))
          // })
          result1 = reduction_value1 - (reduction_value1/100)
          result2 = reduction_value2 - (reduction_value2/100)
          // alert(result1)
          //   alert(result2)
          let ans = [result1.toFixed(3),result2.toFixed(3)]
          if(currancy === "₹"){
            ans = [(result1 * 100).toFixed(2) ,(result2*100).toFixed(2)]
            setResult(ans)
          }else{
            setResult(ans)
          }
            setSaving("Your estimated savings are")
          // alert(reduction_value - (reduction_value/100))
        }else{
            let percentageSaving1 = (firstVal * percentage[rating - 1]) / 100
            let percentageSaving2 = (secondVal * percentage[rating - 1]) / 100
            // this.setState({
            //   result:this.numberWithCommas(Math.floor(-(percentageSaving-reduction_value)))
            // })
            result1 = -(percentageSaving1-reduction_value1)
            result2 = -(percentageSaving2-reduction_value2)
            // alert(result1)
            // alert(result2)
            let ans = [result1.toFixed(2),result2.toFixed(2)]
            if(currancy === "₹"){
              ans = [(result1 * 100).toFixed(0),(result2 * 100).toFixed(0)]
              setResult(ans)
            }else{
              setResult(ans)
            }
            setSaving("You might be loosing")
            // alert(-(percentageSaving-reduction_value))
        }
    
    // alert(-(percentageSaving-reduction_value))
    
  };

  return (
      <div>
        <h1 className="skill_vs_loss_title"><span style={{color:"#008ed9"}}>Skill </span>v/s Loss</h1>
      <div className="calc_head">

        <div className="typography">
        <div className="typography_title_slider">
        <Typography id="range-slider" gutterBottom>
            What is your annual procurement value ?
        </Typography>
        <div className="calculations_range_buttons">
            <input type="radio" className="btn-check" name="options-outlined" id="one-outlined" autoComplete="off" defaultChecked/>
            <label className="btn btn-outline-dark btn-sm" htmlFor="one-outlined" asd="crore ₹" onClick={(e)=>{(currancyChangeinr(e))}}>₹</label>

            <input type="radio" className="btn-check" name="options-outlined" id="two-outlined" autoComplete="off" value="m $"/>
            <label className="btn btn-outline-dark btn-sm" htmlFor="two-outlined" asd="m $" onClick={(e)=>{(currancyChangedollar(e))}}>$</label>

            {/* <input type="radio" className="btn-check" name="options-outlined" id="three-outlined" autoComplete="off" defaultChecked ={checked3}/>
            <label className="btn btn-outline-dark btn-sm" htmlFor="three-outlined" onClick={()=>{(changeValue3())}}>11 core - 15 core</label> */}
        </div>
        <br/>
        <br/>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            // getAriaValueText={valuetext}
            max={15}
            />
        </div>
        <div className="calculations_range_buttons">
            <button type="button" className="btn btn-outline-secondary btn-sm range_button" onClick={()=>{(changeValue1())}}>{currancy} 4 {crore} - {currancy}  5 {crore}</button>
            <button type="button" className="btn btn-outline-secondary btn-sm range_button" onClick={()=>{(changeValue2())}}>{currancy}  6 {crore} - {currancy}  10 {crore}</button>
            <button type="button" className="btn btn-outline-secondary btn-sm range_button" onClick={()=>{(changeValue3())}}>{currancy}  11 {crore} - {currancy}  15 {crore}</button>
        </div>
        </div>

        <div className="calculation_calculate_button_div">
          <div>
            <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
          </div>
          <br className="calculation_break"/>
          <br className="calculation_break"/>
          <div className="desktop_calculation_button">
          <button type="button" className="btn btn-outline-secondary calculate_button" onClick={()=>{(calculate())}}>Calculate</button>
          </div>
        </div>


        <div className="rating_div">
          <div className="rating_div_first">
            <div className="rating_title">Rate your eNegotiation skill</div>
            <div>(Your or your SCM team)</div>
          </div>
          <div>
            <br className="calculation_break"/>
            <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
            <br className="calculation_break"/>
            <br className="calculation_break"/>
            
          </div>
          <div className="rating_star_and_count">
            <StarRatings
              rating={rating}
              starRatedColor="#FDCC0D"
              changeRating={(rating)=>{changeRating(rating)}}
              numberOfStars={10}
              name='rating'
              starHoverColor="#FDCC0D"
              starDimension="20px"
            />
            <span className="rating_count">{rating}/10</span>
          </div>
        </div>
        <div className="responsive_calculate_button">
          <button type="button" className="btn btn-outline-secondary calculate_button" onClick={()=>{(calculate())}}>Calculate</button>
        </div>
        </div>


        <div className="calculation_result_div">
             {saving} {currancy} {result[0]} {lakh} - {currancy} {result[1]} {lakh} per year
        </div>
        <div className="excel_calculations">
                  <a href="https://docs.google.com/spreadsheets/d/1DQw0gvx2TWiKzwKO5rn7wSwZG0jOW7r1NzgphN8drg0/edit?usp=sharing" rel="noreferrer"  target="_blank">Click Here For Calculation</a>
                </div>
        </div>
  );
}
