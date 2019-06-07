import React from "react";
import css from "./ChannelsList.module.css";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Icon,
  Modal,
  Form,
  Input,
  Button,
  Label
} from "semantic-ui-react";

const ChannelsList = props => {
  // let addCurrent = event => {
  //   event.preventDefault();
  //   props.changeChannel(event.target.name);
  //   console.log(event.target.name);
  // };
  let truncate = name => {
    return name.length > 10 ? name.slice(0, 10) + " ..." : name;
  };

  return (
    <div className={css.channelsListWrapper}>
      {console.log("ChannelsList", props)}
      {props.channels.length > 0 &&
        props.channels.map(channel => (
          <Menu.Item
            key={channel.id}
            className={css.channel}
            activeClassName={css.channelActive}
            onClick={() => props.changeChannel(channel)}
            name={channel.name}
            style={{ opacity: 0.7 }}
            // active={channel.id === this.state.activeChannel}
          >
            {/* {this.getNotificationCount(channel) && (
          <Label color="red">{this.getNotificationCount(channel)}</Label>
        )} */}
            # {channel.name}
          </Menu.Item>
        ))}

      {/* {props.channels.map(item => (
        <div>
          <NavLink
            // to={`${item.path}${item.id}`}
            className={css.channel}
            activeClassName={css.channelActive}
            onClick={addCurrent}
            name={item.channelName}
          >
            {"# " + truncate(item.channelName)}
          </NavLink>
        </div>
      ))} */}
    </div>
  );
};
export default ChannelsList;
