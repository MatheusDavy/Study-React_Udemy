import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import Home from './components/CreateSecondHook/templates/Home/index'
import { ContextAPI } from './templates/ContextAPI';
import { CounterProvider } from './components/ContextAPI/context/CounterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextAPI />
  </React.StrictMode>
);
