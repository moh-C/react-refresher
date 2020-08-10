import React from "react";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  }
}

export { HelloWorld };
