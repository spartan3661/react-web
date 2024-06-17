import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootStyle = {
	backgroundColor: '#626262', // BACKGROUND
	minHeight: '100vh',
	margin: 0,
  };
root.render(
	
  <React.StrictMode>
	<div style={rootStyle}>
    	<App />
	</div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
