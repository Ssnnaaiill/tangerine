import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, TangerineTemplate } from './components';
import storage from 'local-storage-fallback';

function getInitialTheme() {
  // use storage library instead of localStorage
  const savedTheme = storage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
}

function App() {

  // use light mode for initialy
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(
    () => {
      storage.setItem('theme', JSON.stringify(theme))
    },
    [theme]
  );

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <TangerineTemplate/>
      <br/><br/><br/>
      <section id="toggle-theme">
        <label class="switch" onChange = {
            (e) => {
              setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' })
            }
          }>
          <input type="checkbox" onChange = {
            () => {
              
            }
          }/>
          <span class="slider round"></span>
        </label>
      </section>
    </ThemeProvider>
    </>
  );
}

export default App;