import React from "react"

module.exports = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.messageTextInput.value
    );
  },
  render: function() {
    return (
      <div>
        <input
          type="text"
          ref="messageTextInput"
          placeholder="Send something..."
          onChange={this.handleChange}
          value={this.props.messageText} />
      </div>
    );
  }
});
