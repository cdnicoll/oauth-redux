import React from 'react';
import { connect } from 'react-redux';

class LoggedIn extends React.Component {
  render () {
    return <div>Hey! You're logged In!</div>
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  {  },
)(LoggedIn);