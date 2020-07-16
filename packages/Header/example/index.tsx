import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../src';
import { LightTheme } from 'uvgo-themes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme(LightTheme)}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>, document.getElementById('root'));
