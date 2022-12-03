import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
// import App from './components/lifeCycle/didMoun';
// import App from './components/external_data/external_Data';
// import App from './templates/Home';
import App from './components/propsComponent/post_container';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
