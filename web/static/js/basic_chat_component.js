import '../css/app.css'
import React from "react"
import { connect } from 'react-redux'
import { addMessage } from './actions/messages'

import MessageListComponent from './message_list_component'
import UsernameInputComponent from './username_input_component'
import MessageInputComponent from './message_input_component'

// import channel from "./socket"

let BasicChatComponent = React.createClass({
  getInitialState() {
    return {
        messageText: '',
        usernameText: ''
    };
  },
  handleMessageSubmit() {
    if (this.state.usernameText !== "" && this.state.messageText !== "") {
      this.props.dispatch(addMessage(this.state.usernameText, this.state.messageText))
      // NOTE this should be handled somewhere else
      // channel.push("new_msg", {username: this.state.usernameText, body: this.state.messageText});
      this.state.messageText = "";
    }
  },
  handleUsernameInput(usernameText) {
    this.setState({
      usernameText: usernameText
    });
  },
  handleMessageInput(messageText) {
    this.setState({
      messageText: messageText
    });
  },
  render() {
    const { dispatch, messages } = this.props
    return (
      <div className="basic-chat-component">
        <h1>hazy.pw</h1>
        <MessageListComponent messages={messages} />
        <UsernameInputComponent usernameText={this.state.usernameText} onUserInput={this.handleUsernameInput} />
        <MessageInputComponent messageText={this.state.messageText} onUserInput={this.handleMessageInput} onUserSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
});

// NOTE using this bit from the redux documentation
function select(state) {
  return {
    messages: state.messages
  }
}

export default connect(select)(BasicChatComponent);
