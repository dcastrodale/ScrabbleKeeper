import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './components/App';

const store = createStore

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>
	, document.getElementById('app'));