import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions';

class OAuth extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return <div>oAuth</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut },
)(OAuth);
