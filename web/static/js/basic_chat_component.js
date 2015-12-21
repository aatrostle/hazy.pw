import '../css/app.css'
import React from "react"
import Reflux from 'reflux'
import MessageListComponent from './message_list_component'
import UsernameInputComponent from './username_input_component'
import MessageInputComponent from './message_input_component'

import MessageActions from './message_actions'
import channel from "./socket"

import MessageStore from './message_store'

let BasicChatComponent = React.createClass({
  mixins: [Reflux.connect(MessageStore, "messages")],
  getInitialState() {
    return {
        messageText: '',
        usernameText: ''
    };
  },
  handleMessageSubmit() {
    if (this.state.usernameText !== "" && this.state.messageText !== "") {
      channel.push("new_msg", {username: this.state.usernameText, body: this.state.messageText});
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
    return (
      <div className="basic-chat-component">
        <h1>hazy.pw</h1>
        <MessageListComponent messages={this.state.messages} />
        <UsernameInputComponent usernameText={this.state.usernameText} onUserInput={this.handleUsernameInput} />
        <MessageInputComponent messageText={this.state.messageText} onUserInput={this.handleMessageInput} onUserSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
});

export default BasicChatComponent;
