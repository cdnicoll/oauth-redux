import React from 'react';
import OAuth from './OAuth';
import { BrowserRouter, Route } from 'react-router-dom';
import LoggedIn from './LoggedIn';

class App extends React.Component {
  render() {
    const divStyle = {
      padding: '100px',
    };
    return (
      <div style={divStyle} className='ui container'>
        <BrowserRouter>
          <Route path='/' exact component={OAuth} />
          <Route path='/logged-in' exact component={LoggedIn} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
