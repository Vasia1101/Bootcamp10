import React, { Component } from "react";
import {
  Button,
  Header,
  Container,
  MessageHeader,
  Segment,
  Comment,
  Input,
  Icon
} from "semantic-ui-react";
import moment from "moment";
import socket from "socket.io-client";
window.socket = socket(
  window.location.origin,
  {
    path: "/chat/"
  },
  { transport: ["websocket"] }
);
const socketUrl = "http://localhost:8080";

export default class Chat extends Component {
  state = { online: 0, input: "", messages: [], newMessage: true };
  componentDidMount() {
    window.socket.on("all-message", data => {
      console.log(data);
      this.setState({ message: [...data] });
    });
  }
  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  sendMessage = () => {
    let newMessage = {
      author: this.props.login,
      message: this.state.input,
      time: moment().format("LTS")
    };
    window.socket.emit("message", newMessage);
    this.setState(prev => ({
      input: "",
      messages: [...prev.messages, newMessage]
    }));
  };
  render() {
    const { input, messages, online } = this.state;

    return (
      <>
        <Container>
          <MessageHeader />
          <Segment>
            <Segment clearing="true">
              <Header fluide="true" as="h2" floated="left">
                <Header.Subheader>Online Users:{online}</Header.Subheader>
              </Header>
            </Segment>
            <Comment.Group className="message">
              {messages.map(item => (
                <Comment key={item._id}>
                  <Comment.Content>
                    <Comment.Author as="a">{item.author}</Comment.Author>
                    <Comment.Metadata>{item.time}</Comment.Metadata>
                    <Comment.Text>{item.message}</Comment.Text>
                  </Comment.Content>
                </Comment>
              ))}
            </Comment.Group>
          </Segment>
          <Segment className="messageForm">
            <Input
              fluid
              name="message"
              label={<Button icon="add" />}
              labelPosition="right"
              placeholder="write your message"
              value={input}
              onChange={this.handleChange}
            />

            <Button
              color="youtube"
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              onClick={this.sendMessage}
            />
          </Segment>
        </Container>
      </>
    );
  }
}
