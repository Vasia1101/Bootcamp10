import React, { Component } from "react";
import Time from "react-time";
import { Button, Popup, Container, Image } from "semantic-ui-react";
import s from "./CSS/ChatHistory.module.css";
import { connect } from "react-redux";

class Chat extends Component {
  state = {
    // upDate: "D"
  };
  render() {
    const time = new Date();

    return (
      <div>
        <ul>
          <li className={s.changeImg}>
            <Image
              src="https://placeimg.com/50/50/people"
              alt="107378"
              avatar
            />
            <span>Vasia send: </span>
            <span className={s.flexin}>{this.props.historyposts.message}</span>
            <Container textAlign="right">
              <p>
                {this.props.historyposts.upDate}
                <Time value={time} format="HH:mm" />
              </p>

              <Popup wide trigger={<Button content="..." />} on="click">
                <button
                  onClick={() =>
                    this.props.dispatch({
                      type: "CHANGE_MESSAGE",
                      id: this.props.historyposts.id,
                      upDate: this.props.historyposts.upDate
                    })
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    this.props.dispatch({
                      type: "DELETE_MESSAGE",
                      id: this.props.historyposts.id
                    })
                  }
                >
                  Del
                </button>
              </Popup>
            </Container>
          </li>
        </ul>
      </div>
    );
  }
}
export default connect()(Chat);
