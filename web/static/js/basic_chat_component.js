import React from "react"
import Reflux from 'reflux'
import MessageListComponent from './message_list_component'
import MessageInputComponent from './message_input_component'

import MessageStore from './message_store'

let BasicChatComponent = React.createClass({
  mixins: [Reflux.connect(MessageStore, "messages")],
  getInitialState() {
    return {
        messageText: '',
    };
  },
  handleUserInput(messageText) {
    this.setState({
      messageText: messageText
    });
  },
  render() {
    return (
      <div className="basic-chat-component">
        <h1>hazy.pw</h1>
        <MessageListComponent messages={this.state.messages} />
        <MessageInputComponent messageText={this.state.messageText} onUserInput={this.handleUserInput} />
      </div>
    );
  }
});

export default BasicChatComponent;

// <UsernameInputComponent username={this.state.username} />
