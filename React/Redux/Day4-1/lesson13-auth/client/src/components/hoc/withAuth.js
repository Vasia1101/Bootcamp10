import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = () => {
  class WithAuth extends Component {}

  return connect()(WithAuth);
};

export default withAuth;
