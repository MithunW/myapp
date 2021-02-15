import React, { Component } from 'react'

export class Classcomponents extends Component {
    
    render() {
        return (
            <div>
              <h1>This is a class component</h1>
              <h1>{this.props.name}</h1>
              <h2>{this.props.age}</h2>  
            </div>
        )
    }
}

export default Classcomponents
