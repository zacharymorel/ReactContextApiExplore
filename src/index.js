import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstLayer from './Views/FirstLayer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FirstLayer />, document.getElementById('root'));
registerServiceWorker();
