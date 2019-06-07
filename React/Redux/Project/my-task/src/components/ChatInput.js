import React, { Component } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { Form, TextArea, Modal, Button, Icon, Popup } from "semantic-ui-react";
import { connect } from "react-redux";

class FormsInput extends Component {
  state = {
    text: ""
  };
  handleSendMessage = e => {
    e.preventDefault();
    const message = this.state.text;
    const data = {
      upDate: "Send: ",
      id: new Date(),
      message,
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

  // -------- upload file-------
  formSubmitFile = e => {
    e.preventDefault(); // Stop form submit
  };
  //---------------

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
          disabled={!this.state.text}
          type="submit"
          inverted
          color="violet"
        >
          Send Message
        </Button>

        <Modal
          size={"tiny"}
          trigger={
            <Button inverted color="violet">
              Upload a file
            </Button>
          }
        >
          <Modal.Header>Upload a file</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form onSubmit={this.formSubmitFile}>
                <Form.Field>
                  <input
                    type="file"
                    // hidden
                  />
                </Form.Field>
                <Button type="submit">Upload</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Popup
          trigger={<Icon size="big" name="smile outline" color="violet" />}
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
