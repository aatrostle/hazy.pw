import React from "react"
import MessageComponent from "./message_component"

module.exports = React.createClass({
  render: function() {
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
