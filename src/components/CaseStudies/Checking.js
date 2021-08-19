import React, { Component } from 'react'

export default class Checking extends Component {
    render() {
        return (
            <div style={{"marginTop":"100px"}}>
                {this.props.data.id}
                {/* {this.props.match.params.id} */}
            </div>
        )
    }
}
