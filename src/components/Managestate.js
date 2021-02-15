import React, { Component } from "react";

class Managestate extends Component {
    constructor() {
        super();
        this.state = {
            name: "Ironaman",
            age: "40",
            power: "500",
            flag: true,
        };
    }

    changeData = () => {
        const flag = this.state.flag;
        if (flag === true) {
            this.setState({ name: "Hulk", age: "60", power: "1000", flag: !flag });
        } else {
            this.setState({ name: "Ironman", age: "40", power: "500", flag: !flag });
        }
    };

    render() {
        return (
            <div>
                <h1>Managing State in classComponent</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>
                <h2>{this.state.power}</h2>
                <button onClick={this.changeData}>Change Data</button>
            </div>
        );
    }
}

export default Managestate;
