import React, { Component } from "react";
import { Form, TextArea, Button, Icon, Popup } from "semantic-ui-react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { connect } from "react-redux";

class FormsInput extends Component {
  state = {
    text: ""
  };
  handleSendMessage = e => {
    e.preventDefault();
    const message = this.state.text;
    const data = {
      id: new Date(),
      message,
      upDate: "Send: ",
      add: false
    };
    console.log(data);
    this.props.dispatch({
      type: "ADD_MESSAGE",
      payload: { data }
    });
    this.setState({ text: "" });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };
  addEmoji = e => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach(el => codesArray.push("0x" + el));
    let emojiPic = String.fromCodePoint(...codesArray);
    this.setState({
      text: this.state.text + emojiPic
    });
  };
  render() {
    const { text } = this.state;
    return (
      <Form onSubmit={this.handleSendMessage}>
        <TextArea
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="enter your message"
        />

        <Button
          type="submit"
          inverted
          color="violet"
          disabled={!this.state.text}
        >
          Send Message
        </Button>
        <Popup
          trigger={<Icon circular name="smile" />}
          size="mini"
          inverted
          flowing
          hoverable
        >
          <span>
            <Picker onSelect={this.addEmoji} />
          </span>
        </Popup>
      </Form>
    );
  }
}

export default connect()(FormsInput);
