import React, { createContext, useContext, useEffect, useState } from "react";
import UserProvider from "./UserProvider";

const context = createContext(null);

const ReposProvider = ({ children }) => {
  const userData = useContext(UserProvider.context);
  const baseUrl = userData._json;
  const [repos] = useState("");
  for (let prop in baseUrl) {
    if (prop === "repos_url") {
      repos = baseUrl["repos_url"];
    }
  }

  return <context.Provider value={repos}>{children}</context.Provider>;
};
ReposProvider.context = context;

export default ReposProvider;

// const userData = useContext(UserProvider.context);
//     const baseUrl = userData._json;
//     let linkGetRepo;
//     for (let prop in baseUrl) {
//       if (prop === "repos_url") {
//         linkGetRepo = baseUrl["repos_url"];
//       }
//     }
//     console.log(linkGetRepo);
//     let reqvest = new Request(linkGetRepo);
//     const repositories = [];
//     useEffect(() => {
//       fetch(reqvest)
//         .then(res => res.json())
//         .then(res => repositories.push(...res))
//         .catch(err => {
//           console.log(err);
//         });
//     });
//     console.log(repositories);
//     const reposi = JSON.stringify(repositories);
//     console.log(reposi);
