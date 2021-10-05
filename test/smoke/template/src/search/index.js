import largeNumber from "bxylarge-number-bxy";
import React from "react";
import ReactDOM from "react-dom";
import logo from "../images/logo.png";
import "./search.less";
import { a } from "./tree-shaking";

export default class Search extends React.Component {
  state = {
    Text: null,
  };

  handleClick() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    if (false) {
      a();
    }
    const { Text } = this.state;
    console.log(largeNumber("888", "1"));
    return (
      <div className="head">
        {Text ? <Text /> : null}
        <span className="text">Search Text aaaa</span>
        <img className="hi" onClick={this.handleClick.bind(this)} src={logo} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
