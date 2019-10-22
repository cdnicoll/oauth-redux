import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoggedIn extends React.Component {
  render() {
    if (!this.props.isSignedIn) {
      return (
        <div>
          <h2>Hey! You!</h2>
          <p>
            You shouldnt be here... Try <Link to='/'>logging in</Link> first!
          </p>
        </div>
      );
    }

    return (
      <div>
        Hey {this.props.userProfile.name}! You're logged In! It's okay to go{' '}
        <Link to='/'>back</Link> to log out
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userProfile: state.auth.userProfile,
  };
};

export default connect(
  mapStateToProps,
  {},
)(LoggedIn);
