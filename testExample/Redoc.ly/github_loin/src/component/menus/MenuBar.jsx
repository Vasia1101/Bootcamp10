import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import UserProvider from "../../context/UserProvider";
import { data } from "../../data";
import _ from "lodash";
import PassportLogo from "../../image/passport.png";

// mui
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/MeetingRoom";

const MenuBar = () => {
  const userData = useContext(UserProvider.context);
  console.log(userData);
  // const loginType = !_.isEmpty(userData)
  //   ? _.find(data, d => d.name === userData.provider)
  //   : {};

  return (
    <div className="menu-bar">
      {_.isEmpty(userData) && (
        <a href="/" className="btn menu-btn disabled">
          <img
            src={PassportLogo}
            alt="passport.js logo"
            style={{ height: 25 }}
          />
        </a>
      )}
      <Link to="/" title="Home" className="btn menu-btn">
        <HomeIcon />
      </Link>
      {!_.isEmpty(userData) && (
        <Link to="/profile" title="Profile" className="btn menu-btn">
          <AccountCircleIcon />
        </Link>
      )}
      <UserMenu />
      {!_.isEmpty(userData) && (
        <a
          href={"/auth/logout"}
          title="Logout"
          style={{ float: "right" }}
          className="btn menu-btn"
        >
          <LogoutIcon />
        </a>
      )}
    </div>
  );
};

export default MenuBar;
