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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      const googleProfile = {
        id: profile.getId(),
        name: profile.getName(),
        profileImage: profile.getImageUrl(),
        email: profile.getEmail(),
      };
      this.props.signIn(googleProfile);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderGoogleCard() {
    if (this.props.isSignedIn === null) {
      // we have an empty state, redux is still trying to figure out whats going on
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <GoogleSignedInCard
            onSignOutClick={this.onSignOutClick}
            profile={this.props.userProfile}
          />
        </div>
      );
    } else {
      return <GoogleSignedOutCard onSignInClick={this.onSignInClick} />;
    }
  }

  render() {
    return <div>{this.renderGoogleCard()}</div>;
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
  { signIn, signOut },
)(OAuth);
