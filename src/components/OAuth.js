import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions';
import GoogleSignedInCard from './GoogleSignedInCard';
import GoogleSignedOutCard from './GoogleSignedOutCard';

class OAuth extends React.Component {
  componentDidMount() {
    const clientId =
      '14697403525-oo0fe2e1em4422fcocgnptnt1is5c1n8.apps.googleusercontent.com';

    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
        });
    });
  }

  onSignOutClick = () => {
    //
  }

  render() {
    console.log(this.auth);
    return (
      <div>
        {/* <GoogleCard /> */}
        <GoogleSignedOutCard onSignInClick={this.onSignOutClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut },
)(OAuth);
