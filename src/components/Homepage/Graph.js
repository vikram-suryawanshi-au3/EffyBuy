import React, { Component } from 'react'
import './graph.css'
import { Chart  } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
// import { HorizontalBar } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AnimatedNumber from "react-animated-numbers"
import 'chartjs-plugin-datalabels';

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
    draw() {
      const { ctx } = this._chart;
      const vm = this._view;
      let { borderWidth } = vm;

      let left; let right; let top; let bottom; let signX; let signY; let borderSkipped; let
        radius;

      // If radius is less than 0 or is large enough to cause drawing errors a max
      //      radius is imposed. If cornerRadius is not defined set it to 0.
      let { cornerRadius } = this._chart.config.options;
      if (cornerRadius < 0) { cornerRadius = 0; }

      if (typeof cornerRadius === 'undefined') { cornerRadius = 0; }

      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        const halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
        const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
        const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
        const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;

      // Corner points, from bottom-left to bottom-right clockwise
      // | 1 2 |
      // | 0 3 |
      const corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom],
      ];

      // Find first (starting) corner with fallback to 'bottom'
      const borders = ['bottom', 'left', 'top', 'right'];
      let startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      // Draw rectangle from 'startCorner'
      let corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);

      for (let i = 1; i < 4; i += 1) {
        corner = cornerAt(i);
        let nextCornerId = i + 1;
        if (nextCornerId === 4) {
          nextCornerId = 0;
        }

        const width = corners[2][0] - corners[1][0];
        const height = corners[0][1] - corners[1][1];
        const x = corners[1][0];
        const y = corners[1][1];

        radius = cornerRadius;
        // Fix radius being too large
        if (radius > Math.abs(height) / 2) {
          radius = Math.floor(Math.abs(height) / 2);
        }
        if (radius > Math.abs(width) / 2) {
          radius = Math.floor(Math.abs(width) / 2);
        }

        if (height < 0) {
          // Negative values in a standard bar chart
          const xTl = x; const xTr = x + width;
          const yTl = y + height; const yTr = y + height;

          const xBl = x; const xBr = x + width;
          const yBl = y; const yBr = y;

          // Draw
          ctx.moveTo(xBl + radius, yBl);
          ctx.lineTo(xBr - radius, yBr);
          ctx.quadraticCurveTo(xBr, yBr, xBr, yBr - radius);
          ctx.lineTo(xTr, yTr + radius);
          ctx.quadraticCurveTo(xTr, yTr, xTr - radius, yTr);
          ctx.lineTo(xTl + radius, yTl);
          ctx.quadraticCurveTo(xTl, yTl, xTl, yTl + radius);
          ctx.lineTo(xBl, yBl - radius);
          ctx.quadraticCurveTo(xBl, yBl, xBl + radius, yBl);
        } else if (width < 0) {
          // Negative values in a horizontal bar chart
          const xTl = x + width; const xTr = x;
          const yTl = y; const yTr = y;

          const xBl = x + width; const xBr = x;
          const yBl = y + height; const yBr = y + height;

          // Draw
          ctx.moveTo(xBl + radius, yBl);
          ctx.lineTo(xBr - radius, yBr);
          ctx.quadraticCurveTo(xBr, yBr, xBr, yBr - radius);
          ctx.lineTo(xTr, yTr + radius);
          ctx.quadraticCurveTo(xTr, yTr, xTr - radius, yTr);
          ctx.lineTo(xTl + radius, yTl);
          ctx.quadraticCurveTo(xTl, yTl, xTl, yTl + radius);
          ctx.lineTo(xBl, yBl - radius);
          ctx.quadraticCurveTo(xBl, yBl, xBl + radius, yBl);
        } else {
          // Positive Value
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height - radius);
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          ctx.lineTo(x + radius, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
        }
      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    },
  });


export default class Graph extends Component {
    constructor(props){
        super(props)
        this.state={
            data1:[10,10,10,10,10],
            data2:[30,7.50,5,5,2.50],
            counter : true,
            efficiency10:true,
            efficiency15:false,
            efficiency20:false,
            efficiency25:false,
            operation1:true,
            operation2:false,
            operation3:false,
            salary1:false,
            salary2:false,
            salary3:false,
            finance1:false,
            finance2:false,
            finance3:false,
            sales1:false,
            sales2:false,
            sales3:false,
            purchase1:false,
            purchase2:false,
            purchase3:false,
            value:10
        }

    }

    componentDidMount(){
        if(this.state.counter){
        this.interval = setInterval(() => {
                        if(this.state.efficiency10){
                            this.setState({
                                efficiency10:false,
                                efficiency15:true,
                                value:10,
                                data1: [10,10,10,10,10],
                                data2: [30,7.50,5,5,2.50]
                            })
                        }else if(this.state.efficiency15){
                            this.setState({
                                efficiency15:false,
                                efficiency20:true,
                                value:15,
                                data1: [15,15,15,15,15],
                                data2: [45,11.25,7.50,7.50,3.75]
                            })
                        }else if(this.state.efficiency20){
                            this.setState({
                                efficiency20:false,
                                efficiency25:true,
                                value:20,
                                data1: [20,20,20,20,20],
                                data2: [60,15,10,10,5]
                            })
                        } else if(this.state.efficiency25){
                            this.setState({
                                efficiency25:false,
                                efficiency10:true,
                                value:25,
                                data1: [25,25,25,25,25],
                                data2: [75,18.75,12.50,12.50,6.25]
                            })
                    }
                }, 2000);
            }   
    }

    componentWillUnmount(){
        // clearTimeout(this.a,this.b,this.c,this.d)
        this.setState({
            counter:false
        })
        clearInterval(this.interval)
    }

    handleChange(e,val){
        clearInterval(this.interval)
        this.setState({
            value:val,
            data1: [val,val,val,val,val],
            data2: [(val*60)/20,(val*15)/20,(val*10)/20,(val*10)/20,(val*5)/20]
        })
    }

    salaryColor(){
        if(this.state.data2[1] >= 10){
            return '#9fc5e9'
        }else{
            return '#cccccc'
        }
    }
    operationColor(){
        if(this.state.data2[2] >= 10){
            return '#9fc5e9'
        }else{
            return '#cccccc'
        }
    }
    marketingColor(){
        if(this.state.data2[3] >= 10){
            return '#9fc5e9'
        }else{
            return '#cccccc'
        }
    }

    render() {

        return (
            <div className="chart_main">
            <h1 className="impact_title">Impact</h1>
            <div className="title_one">
                Focus On Purchase For More Profit
            </div>
            <div className="title_two">
            Profitability Impact From Different Departmental Efficiencies
            </div>
            <div className="percentage_div">
                    <div className="asd">
                        <div>
                        <AnimatedNumber
                            fontStyle={{ fontFamily: "Nunito", fontSize: 50 }}
                            animateToNumber={this.state.value}
                            config={{ tension: 89, friction: 40 }}
                            // onStart={() => console.log("onStart")}
                            // onFinish={() => console.log("onFinish")}
                            animationType={"calm"}
                            />
                        </div>
                        <div className="percentagemark">%</div>
                    </div>
                    
                    
                    
                    <Slider
                        // defaultValue={80}
                        value={this.state.value}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        // marks={marks}
                        valueLabelDisplay="on"
                        onChange={(e,val)=>{this.handleChange(e,val)}}
                        max={30}
                    />
                    

                    <Typography id="discrete-slider-always" className="typography" gutterBottom>
                        Efficiency Improvement
                    </Typography>


                </div>
            
            <div className="chart">
                
            <hr className="bar_horizontal_line"/>
                <div className="bar">
                    <div style={{textAlign:"center"}}>
                        <strong>
                            Departmental Efficiency ...
                        </strong>
                    </div>
                    <HorizontalBar
                        data={{labels: ['Purchase', 'Salary,Wages,HR','Operations',
                                        'Sales & Marketing','Finance admin'],
                                datasets:[
                                    {
                                        label:'',
                                        data:this.state.data1,
                                        backgroundColor:[
                                            '#008ed9',
                                            this.salaryColor(),
                                            this.operationColor(),
                                            this.marketingColor(),
                                            '#cccccc'
                                        ],
                                        borderColor: ['#008ed9',
                                        this.salaryColor(),
                                        this.operationColor(),
                                        this.marketingColor(),
                                        '#cccccc'],
                                        borderWidth: 3,
                                        borderSkipped:'top',
                                    }
                                ]
                        }}
                        width={500}
                        height={250}
                        // cornerRadius= {20}
                        options={{ responsive: true,
                            // maintainAspectRatio:true,
                            // maintainAspectRatio: false,
                            cornerRadius: 10,
                            // cornerRadius: 100,
                            scales: {
                                yAxes: [{stacked: true,
                                    barPercentage: 0.2,
                                    ticks: {
                                        autoSkip: false,
                                    fontSize:15,
                                    },
                                    gridLines : {
                                        display : false
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        // max:50,
                                        display:false,
                                        max: 100,
                                        beginAtZero: true,
                                    },
                                    gridLines : {
                                        display : false
                                    }
                                }],
                                
                            },
                            legend: {
                                labels: {
                                    fontSize: 0
                                }
                            },
                            
                            plugins: {
                                datalabels: {
                                    backgroundColor: function(context) {
                                    return context.dataset.backgroundColor;
                                    },
                                    borderRadius: 12,
                                    color: 'black',
                                    font: {
                                    weight: 'bold'
                                    },
                                    formatter: function(value, context) {
                                        return Math.round(value) + ' %';
                                    },
                                    padding: 6,
                                    anchor: 'end',
                                },
                            },
                        }}
                        />

                    </div>

                    <hr className="bar_horizontal_line"/>
                <div className="bar">
                    <div style={{textAlign:"center"}}>
                        <strong>
                            ... Impact on Profitability Growth %
                        </strong>
                    </div>
                    <HorizontalBar
                        data={{labels: ['Purchase', 'Salary,Wages,HR','Operations',
                                        'Sales & Marketing','Finance admin'],
                                datasets:[
                                    {
                                        label:'',
                                        data:this.state.data2,
                                        backgroundColor:[
                                            '#008ed9',
                                            this.salaryColor(),
                                            this.operationColor(),
                                            this.marketingColor(),
                                            '#cccccc',
                                        ],
                                        borderColor: ['#008ed9',
                                        this.salaryColor(),
                                        this.operationColor(),
                                        this.marketingColor(),
                                        '#cccccc'],
                                        borderWidth: 3,
                                        borderSkipped:'top',
                                    }
                                ],
                        }}
                        width={500}
                        height={250}
                        cornerRadius= {20}
                        options={{ responsive: true,
                            // maintainAspectRatio:true,
                            cornerRadius: 10,
                            
                            scales: {
                                yAxes: [{stacked: true,
                                    barPercentage: 0.2,
                                    ticks: {
                                        autoSkip: false,
                                        fontSize:15,
                                        precision: 0,
                                    },
                                    gridLines : {
                                        display : false
                                    },
                                    
                                }],
                                xAxes: [{
                                    ticks: {
                                        display:false,
                                        max: 100,
                                        beginAtZero: true,
                                    },
                                    gridLines : {
                                        display : false
                                    }
                                }],
                                
                            },
                            legend: {
                                labels: {
                                    fontSize: 0,
                                    fontColor:"red"
                                }
                            },
                            plugins: {
                                datalabels: {
                                    backgroundColor: function(context) {
                                    return context.dataset.backgroundColor;
                                    },
                                    borderRadius: 12,
                                    color: 'black',
                                    font: {
                                    weight: 'bold'
                                    },
                                    formatter: function(value, context) {
                                        return Math.round(value) + ' %';
                                    },
                                    padding: 6,
                                    anchor: 'end',
                                },
                            }
                            

                        }}
                        />

                    </div>

                    
                    
            </div>

            <div className="chart_footer_one">
                *Average profitability impact is calculated in proportion to percentage of 
                Expense saved in each department.
            </div>
            <div className="chart_footer_two">
                *Generally purchase constitutes 50 to 60% of sales, salary 10 to 15%.
                <div className="excel_calculations"> <a href="https://docs.google.com/spreadsheets/d/1yObupXbndKtsF0UFeOFI8XlvWgS8myE2k03PeP6NtNg/edit?usp=sharing" rel="noreferrer"  target="_blank">Click Here For Profitability Growth % Calculation</a></div>
            </div>
            </div>
        ) 
    }
}
