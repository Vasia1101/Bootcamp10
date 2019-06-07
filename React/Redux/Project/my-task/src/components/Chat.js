import React, { Component } from "react";
import Time from "react-time";
import { Button, Popup, Container, Image } from "semantic-ui-react";
import s from "./ChatHistory.module.css";
import { connect } from "react-redux";

class Chat extends Component {
  state = {};

  render() {
    const time = new Date();
    return (
      <div>
        {/* {console.log(this.props.user.displayName)} */}
        <ul className={s.collection}>
          <li className={s.changeImg}>
            <Image src={this.props.user.photoURL} alt="107378" avatar />
            <span>{this.props.user.displayName} send: </span>
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
                      id: this.props.historyposts.id
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
