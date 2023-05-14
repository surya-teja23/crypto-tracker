import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { DataContext } from './Context/DataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <App />
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);