import React from 'react';

class GoogleSignedOutCard extends React.Component {
  onSignInClick = event => {
    event.preventDefault();
    this.props.onSignInClick();
  };

  render() {
    return (
      <div className='ui middle aligned center aligned grid'>
        <div className='ui card'>
          <div className='content'>
            <div className='header'>Doesn't look like you're signed in!</div>
          </div>
          <div className='content'>
            <div className='ui small feed'>
              <div className='event'>
                <div className='content'>
                  <div className='summary'>
                    Try clicking the signin button to auth with google
                  </div>
                </div>
              </div>
            </div>
            <div className='extra content'>
              <button
                onClick={this.onSignInClick}
                className='ui red google button'
              >
                <i className='google icon' />
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleSignedOutCard;
