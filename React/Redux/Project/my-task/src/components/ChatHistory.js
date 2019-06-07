import React, { Component } from "react";

import { connect } from "react-redux";

import Chat from "./Chat";
import ChangeMessage from "./ChangeMessage";

class ChatHistory extends Component {
  render() {
    return (
      <div>
        {this.props.history.map(historyposts => (
          <div key={historyposts.id}>
            {historyposts.add ? (
              <ChangeMessage
                historyposts={historyposts}
                key={historyposts.id}
              />
            ) : (
              <Chat
                user={this.props.user}
                key={historyposts.id}
                historyposts={historyposts}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { history: state.message, user: state.user.currentUser };
};

export default connect(mapStateToProps)(ChatHistory);
