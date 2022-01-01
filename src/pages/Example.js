import React, { Component } from "react";
import { InputDate } from "elements/Form";
export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputDate
              max={30}
              suffix={" night"}
              isSuffixPlural
              name="value"
              onChange={this.handleChange}
              value={this.state.value}
            ></InputDate>
          </div>
        </div>
      </div>
    );
  }
}
