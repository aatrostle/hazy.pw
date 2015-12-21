import React from "react"

let UsernameInput = React.createClass({
  handleChange() {
    this.props.onUserInput(this.refs.usernameTextInput.value);
  },
  render() {
    return (
      <div>
        <input type="text" ref="usernameTextInput" placeholder="u/n"
          onChange={this.handleChange} value={this.props.usernameText} />
      </div>
    )
  }
});

export default UsernameInput;
