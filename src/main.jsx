import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</Provider>
);