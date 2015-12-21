import React from "react"

let Message = React.createClass({
  // NOTE is this even the right way to do this
  dateHelper() {
    let mydate = new Date(this.props.message.timestamp).toLocaleTimeString()
    return mydate
  },
  render() {
    return (
      <div className="message-component">
        <div><span>{this.dateHelper()}</span> [{this.props.message.username}] {this.props.message.body}</div>
      </div>
    );
  }
});

export default Message;
