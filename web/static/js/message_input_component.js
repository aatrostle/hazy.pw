import React from "react"

let MessageInput = React.createClass({
  handleChange() {
    this.props.onUserInput(this.refs.messageTextInput.value);
  },
  handleKeyUp(event) {
    if (event.which === 13) {
      this.props.onUserSubmit();
    } else if (event.which === 27) {
      this.refs.messageTextInput.value = "";
    }
  },
  render() {
    return (
      <input type="text" className="chat-input" ref="messageTextInput" placeholder="Send something..."
        onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.props.messageText} />
    )
  }
});

export default MessageInput;
