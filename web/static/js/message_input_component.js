import React from "react"
import MessageActions from './message_actions'
import channel from "./socket"

let MessageInput = React.createClass({
  handleChange() {
    this.props.onUserInput(this.refs.messageTextInput.value);
  },
  handleChangeValue(event) {
    var text = event.target.value;
    if (event.which === 13 && text) {

      channel.push("new_msg", { username: "USER", body: text })

      event.target.value = '';
      this.handleChange();
    } else if (event.which === 27) {
      event.target.value = '';
    }
  },
  render() {
    return (
      <div>
        <input type="text" ref="messageTextInput" placeholder="Send something..."
          onChange={this.handleChange} onKeyUp={this.handleChangeValue} value={this.props.messageText} />
      </div>
    )
  }
});

export default MessageInput;
