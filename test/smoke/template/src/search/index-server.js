const largeNumber = require("bxylarge-number-bxy");
const React = require("react");
const logo = require("../images/logo.png");
const s = require("./search.less");

class Search extends React.Component {
  state = {
    Text: null,
  };

  handleClick = () => {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  };

  hello = () => {
    console.log("hello");
  };
  render() {
    const { Text } = this.state;
    console.log(largeNumber("888", "1"), Text);
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        <span onClick={this.hello}>Search Text aabb</span>
        <img onClick={this.handleClick} src={logo} />
      </div>
    );
  }
}

module.exports = <Search />;
