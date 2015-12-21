import React from "react"

let UsernameInput = React.createClass({
  handleChange() {
    this.props.onUserInput(this.refs.usernameTextInput.value);
  },
  render() {
    return (
      <input type="text" className="username-input" ref="usernameTextInput" placeholder="u/n"
        onChange={this.handleChange} value={this.props.usernameText} />
    )
  }
});

export default UsernameInput;
