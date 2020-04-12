import React from 'react';
import ReactDOM from 'react-dom';
import UserSessionProvider from './context/userSessionContext'
import TemaProvider from './context/themeContext'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TemaProvider>
      <UserSessionProvider>
        <App />
      </UserSessionProvider>
    </TemaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
