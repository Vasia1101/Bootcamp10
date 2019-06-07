import React from "react";
import SidePanel from "./SidePanel";
import { connect } from "react-redux";
import {
  allChannelActionCreator,
  addCurrentChannelActionCreator
} from "../../ChannelsReducer";

let mapStateToProps = state => {
  return {
    channels: state.channels.channels,
    // newChannelName: state.channels.newChannelName,
    // newCreaterText: state.channels.newCreaterText,
    // newDetailsText: state.channels.newDetailsText,
    userName: state.channels.userName,
    currentUser: state.user.currentUser,
    currentChannel: state.channels.currentChannel
  };
};

let mapDispatchToProps = dispatch => {
  return {
    allChannels: loadedChannels => {
      dispatch(allChannelActionCreator(loadedChannels));
    },
    // updateChannels: (name, creater, details) => {
    //   dispatch(updateChannelsActionCreator(name, creater, details));
    // },
    addCurrentChannel: activeChannel => {
      dispatch(addCurrentChannelActionCreator(activeChannel));
    }
  };
};

const SidePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel);

export default SidePanelContainer;
