import React from "react";
import { render } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };
  render() {
    return <div></div>;
  }
}
