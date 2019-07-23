import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import ScreamSkeletron from "../util/ScreamSkeletron";

// components
import Scream from "../components/scream/Scream";
import Profile from "../components/profile/Profile";

// redux
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

class Home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let resentScreamsMarkup = !loading ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeletron />
    );

    return (
      <Grid container spacing={6}>
        <Grid item sm={8} xs={12}>
          {resentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});
export default connect(
  mapStateToProps,
  { getScreams }
)(Home);
