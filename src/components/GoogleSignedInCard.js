import React from 'react';
import { Link } from 'react-router-dom';

class GoogleSignedOutCard extends React.Component {
  onSignOutClick = event => {
    event.preventDefault();
    this.props.onSignOutClick();
  };
  render() {
    const {name, email, profileImage } = this.props.profile
    return (
      <div className='ui middle aligned center aligned grid'>
        <div className='ui card'>
          <div className='image'>
            <img src={profileImage} alt={name}/>
          </div>
          <div className='content'>
            <a className='header'>{name}</a>
            <div className='meta'>
              <span className='email'>{email}</span>
            </div>
            <div className='description'>
              Awesome, you're now logged in!! Now that you're logged in, check out <Link to='/logged-in'>this</Link> page
            </div>
          </div>
          <div className='extra content'>
          <button
                onClick={this.onSignOutClick}
                className='ui red google button'
              >
                <i className='google icon' />
                Sign Out
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleSignedOutCard;
