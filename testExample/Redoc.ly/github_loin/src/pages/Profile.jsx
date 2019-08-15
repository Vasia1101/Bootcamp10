import React, { Component } from "react";
import axios from "axios";

export default class Profile extends Component {
  state = { repositories: [], link: "" };
  componentDidMount() {
    axios
      .get("/user")
      .then(res => {
        const use = res.data;
        const getLinlToRepos = use._json.repos_url;
        this.setState({ link: getLinlToRepos });
        axios
          .get(getLinlToRepos)
          .then(res => {
            const getArrRepos = res.data;
            this.setState({ repositories: getArrRepos });
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Reposetories</h1>
        <ul style={{ listStyle: "none" }}>
          {this.state.repositories.map(repos => (
            <li key={repos.id} style={{ listStyle: "none" }}>
              {repos.name}: <a href={repos.html_url}>Link:{repos.html_url}</a>
            </li>
          ))}
          <li />
        </ul>
      </div>
    );
  }
}
