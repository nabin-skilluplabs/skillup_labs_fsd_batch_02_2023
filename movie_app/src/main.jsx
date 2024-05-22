import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <App />
    </CookiesProvider>
  </React.StrictMode>
)
