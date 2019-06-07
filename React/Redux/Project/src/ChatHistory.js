import React, { Component } from "react";

import { connect } from "react-redux";

import Chat from "./Chat";
import ChangeMessage from "./ChangeMessage";

import s from "./ChatHistory.module.css";

class ChatHistory extends Component {
  render() {
    return (
      <div>
        {this.props.history.map(historyposts => (
          <div
            key={historyposts.id}
            className={historyposts.id === historyposts.id ? s.red : s.green}
          >
            {historyposts.add ? (
              <ChangeMessage
                historyposts={historyposts}
                key={historyposts.id}
              />
            ) : (
              <Chat key={historyposts.id} historyposts={historyposts} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { history: state };
};

export default connect(mapStateToProps)(ChatHistory);
