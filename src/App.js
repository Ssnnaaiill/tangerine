import React, { Component } from 'react';
import TangerineTemplate from './components/TangerineTemplate';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

class App extends Component {

  // use light mode for initialy
  render() {
    return (
      <>
      <ThemeProvider theme={{ mode: 'dark' }}>
        <GlobalStyle/>
        <TangerineTemplate/>
      </ThemeProvider>
      </>
    );
  }
}

export default App;