import React from 'react';
import OAuth from './OAuth';

class App extends React.Component {
  render() {
    const divStyle = {
      padding: '100px'
    };
    return (
      <div style={divStyle} className='ui container'>
        <OAuth />
      </div>
    );
  }
}

export default App;
