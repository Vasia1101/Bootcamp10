import React, { Component } from "react";
import css from "./Form.module.css";

export default class Form extends Component {
  state = {
    channelName: "",
    details: ""
  };

  // onSubmit={this.props.handleSubmit}
  // onChange={this.props.handleChange}

  addChannel = event => {
    this.props.handleSubmit(event);
    // props.addChannel();
  };

  updateChannels = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handleChange(this.state.channelName, this.state.details);
  };

  // [event.target.name]: event.target.value
  // console.log(channelName.current.value);
  // let name = channelName.current.value;
  // let details = detailsText.current.value;
  // props.handleChange(name, details);
  // props.updateChannels(name, creater, details);

  // console.log("Form", props);

  render() {
    // let channelName = React.createRef();
    // let createrText = React.createRef();
    // let detailsText = React.createRef();

    const { channelName, details } = this.state;

    return (
      <form className={css.container} onSubmit={this.addChannel}>
        <input
          placeholder="Channel name"
          className={css.inputProperty}
          // ref={channelName}
          value={channelName}
          name="channelName"
          onChange={this.updateChannels}
          // value={this.props.newChannelName}
        />
        <textarea
          placeholder="Details"
          className={css.textareaProperty}
          // ref={detailsText}
          onChange={this.updateChannels}
          value={details}
          name="details"
          // value={this.props.newDetailsText}
        />
        <div className={css.buttonArea}>
          <button className={css.buttonProperty} type="submit">
            {" "}
            Create
          </button>
        </div>
      </form>
    );
  }
}
