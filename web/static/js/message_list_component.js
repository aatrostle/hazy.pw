import React from "react"
import MessageComponent from "./message_component"

let MessageList = React.createClass({
  // var messagesContainerScrollHeight = messagesContainer[0].scrollHeight
  // messagesContainer.scrollTop(messagesContainerScrollHeight)

  render() {
    var rows = []
    this.props.messages.forEach(function(message) {
      rows.push(<MessageComponent key={message.id} message={message} />)
    });

    return (
      <div className="message-list-component">
        {rows}
      </div>
    );
  }
});

export default MessageList;
