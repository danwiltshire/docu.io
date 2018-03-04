import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

// eslint-disable-next-line no-undef
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
