import React, { Component } from "react";
import css from "./Channels.module.css";
import FormCreater from "./formCreater/FormCreater";
import ChannelsList from "./channelsList/ChannelsList";
import firebase from "../../../firebase";

export default class Channels extends Component {
  state = {
    activeChannel: "",
    user: this.props.currentUser,
    channel: null,
    channels: [],
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels"),
    messagesRef: firebase.database().ref("messages"),
    notifications: [],
    modal: false,
    firstLoad: true
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners = () => {
    let loadedChannels = [];
    this.state.channelsRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels });
      this.props.allChannels(loadedChannels);
      // this.addNotificationListener(snap.key);
    });
  };

  // addNotificationListener = channelId => {
  //   this.state.messagesRef.child(channelId).on("value", snap => {
  //     if (this.state.channel) {
  //       this.handleNotifications(
  //         channelId,
  //         this.state.channel.id,
  //         this.state.notifications,
  //         snap
  //       );
  //     }
  //   });
  // };

  // handleNotifications = (channelId, currentChannelId, notifications, snap) => {
  //   let lastTotal = 0;

  //   let index = notifications.findIndex(
  //     notification => notification.id === channelId
  //   );

  //   if (index !== -1) {
  //     if (channelId !== currentChannelId) {
  //       lastTotal = notifications[index].total;

  //       if (snap.numChildren() - lastTotal > 0) {
  //         notifications[index].count = snap.numChildren() - lastTotal;
  //       }
  //     }
  //     notifications[index].lastKnownTotal = snap.numChildren();
  //   } else {
  //     notifications.push({
  //       id: channelId,
  //       total: snap.numChildren(),
  //       lastKnownTotal: snap.numChildren(),
  //       count: 0
  //     });
  //   }

  //   this.setState({ notifications });
  // };

  removeListeners = () => {
    this.state.channelsRef.off();
  };

  // setFirstChannel = () => {
  //   const firstChannel = this.state.channels[0];
  //   if (this.state.firstLoad && this.state.channels.length > 0) {
  //     this.props.setCurrentChannel(firstChannel);
  //     this.setActiveChannel(firstChannel);
  //     this.setState({ channel: firstChannel });
  //   }
  //   this.setState({ firstLoad: false });
  // };

  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state;

    const key = channelsRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDetails: "" });
        console.log("channel added");
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.addChannel();
    // this.props.addChannel();
  };

  handleChange = (name, details) => {
    this.setState({
      channelName: name,
      channelDetails: details
    });
  };
  // [event.target.name]: event.target.value

  changeChannel = channel => {
    this.setActiveChannel(channel);
    // this.clearNotifications();
    this.props.addCurrentChannel(channel);
    // this.props.setPrivateChannel(false);
    this.setState({ channel });
  };

  // clearNotifications = () => {
  //   let index = this.state.notifications.findIndex(
  //     notification => notification.id === this.state.channel.id
  //   );

  //   if (index !== -1) {
  //     let updatedNotifications = [...this.state.notifications];
  //     updatedNotifications[index].total = this.state.notifications[
  //       index
  //     ].lastKnownTotal;
  //     updatedNotifications[index].count = 0;
  //     this.setState({ notifications: updatedNotifications });
  //   }
  // };

  setActiveChannel = channel => {
    this.setState({ activeChannel: channel.id });
  };

  // getNotificationCount = channel => {
  //   let count = 0;

  //   this.state.notifications.forEach(notification => {
  //     if (notification.id === channel.id) {
  //       count = notification.count;
  //     }
  //   });

  //   if (count > 0) return count;
  // };

  // displayChannels = channels =>
  //   channels.length > 0 &&
  //   channels.map(channel => (
  //     <Menu.Item
  //       key={channel.id}
  //       onClick={() => this.changeChannel(channel)}
  //       name={channel.name}
  //       style={{ opacity: 0.7 }}
  //       active={channel.id === this.state.activeChannel}
  //     >
  //       {this.getNotificationCount(channel) && (
  //         <Label color="red">{this.getNotificationCount(channel)}</Label>
  //       )}
  //       # {channel.name}
  //     </Menu.Item>
  //   ));

  // openModal = () => this.setState({ modal: true });

  // closeModal = () => this.setState({ modal: false });

  render() {
    return (
      <div className={css.channelsWrapper}>
        <div className={css.addChannelsWrapper}>
          <p className={css.paragraph}>Channels</p>
          <FormCreater
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            channels={this.props.channels}
            // addChannel={this.props.addChannel}
            // updateChannels={this.props.updateChannels}
            // newChannelName={this.props.newChannelName}
            // newCreaterText={this.props.newCreaterText}
            // newDetailsText={this.props.newDetailsText}
          />
        </div>

        <ChannelsList
          channels={this.props.channels}
          // currentChannel={this.changeChannel}
          changeChannel={this.changeChannel}
        />
      </div>
    );
  }
}
