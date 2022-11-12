import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }

  readMessage = () => {
    this.setState({
      isRead: !this.state.isRead,
    });
  };

  render() {
    const { sender, textMessage } = this.props;
    let { isRead } = this.state;

    return (
      <div>
        <h2>Sender: {sender}</h2>
        <p>Message: {textMessage}</p>
        <button disabled={isRead} onClick={this.readMessage}>
          {isRead ? "This message has been read" : "Read this message"}
        </button>
      </div>
    );
  }
}

export default Message;
