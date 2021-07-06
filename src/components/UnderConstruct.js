import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UnderConstruct extends Component {
    render() {
        return (
            <div style={{textAlign:"center",margin:"20%"}}>
                <div>
                    <h1>This page is under construction...</h1>
                </div>
                <Link to="/BizGam">
                    <div style={{textDecoration:"underline", color:"#0067ff"}}>Go Back To Home</div>
                </Link>
            </div>
        )
    }
}
