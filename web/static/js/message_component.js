import React from "react"

module.exports = React.createClass({
  render: function() {
    return (
      <div className="message-component">
        <div><span>timestamp</span> [{this.props.message.username}] {this.props.message.body}</div>
      </div>
    );
  }
});
