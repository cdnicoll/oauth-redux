import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions';

class OAuth extends React.Component {
  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: '14697403525-oo0fe2e1em4422fcocgnptnt1is5c1n8.apps.googleusercontent.com',
          scope: 'email'
      }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //this.onAuthChange(this.auth.isSignedIn.get());
          //this.auth.isSignedIn.listen(this.onAuthChange);
      })
  })
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
