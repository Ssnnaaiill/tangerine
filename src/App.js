import React, { Component } from 'react';
import Loader from './components/Loader';
import FileInput from './components/FileInput';

class App extends Component {


  render() {
    return (
      <div className="container">
        <Loader/>
      </div>
    );
  }
}

export default App;