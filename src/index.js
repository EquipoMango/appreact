import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './RichEditor.css';
import '../node_modules/codemirror/lib/codemirror.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('target'));
registerServiceWorker();
