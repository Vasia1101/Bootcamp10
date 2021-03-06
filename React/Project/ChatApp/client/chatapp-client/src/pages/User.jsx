import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Scream from "../components/scream/Scream";
import StaticProfile from "../components/profile/StaticProfile";
import ScreamSkeletron from "../util/ScreamSkeletron";
import ProfileSkeletron from "../util/ProfileSkeletron";

// Mui stuff
import Grid from "@material-ui/core/Grid";

// Redux stuff
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class User extends Component {
  state = {
    profile: null,
    screamIdParams: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;
    if (screamId) this.setState({ screamIdParams: screamId });
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({ profile: res.data.user });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    const { screamIdParams } = this.state;
    const screamsMarkup = loading ? (
      <ScreamSkeletron />
    ) : screams === null ? (
      <p>No screams from this user</p>
    ) : !screamIdParams ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map(scream => {
        if (scream.screamId !== screamIdParams)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeletron />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

User.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(User);
