import React, { useContext, useEffect, useState } from "react";
import UserProvider from "../context/UserProvider";
// import _ from "lodash";

const Profile = () => {
  const [selected, setSelected] = useState("All");
  const userData = useContext(UserProvider.context);
  const baseUrl = userData._json;

  // const a = baseUrl.repos_url;
  // console.log(a);
  return <div>Profile!</div>;
};

export default Profile;
