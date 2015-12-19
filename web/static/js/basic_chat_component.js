import React from "react"
import MessageListComponent from './message_list_component'
import MessageInputComponent from './message_input_component'

module.exports = React.createClass({
  getInitialState: function() {
    return {
        messageText: '',
    };
  },
  handleUserInput: function(messageText) {
    this.setState({
      messageText: messageText
    });
  },
  render: function() {
    return (
      <div className="basic-chat-component">
        <MessageListComponent messages={this.props.messages} />
        <MessageInputComponent messageText={this.state.messageText} onUserInput={this.handleUserInput} />
      </div>
    );
  }
});
