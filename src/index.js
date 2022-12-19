import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-m6b20qneu3nty6oa.us.auth0.com
//FFpgddwtty8rp83KisY2eMHDgK5utS7v
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>'
    <Auth0Provider
    domain='dev-m6b20qneu3nty6oa.us.auth0.com'
    clientId='FFpgddwtty8rp83KisY2eMHDgK5utS7v'
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
