import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import styles from './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={styles} />
  </React.StrictMode>,
  document.getElementById('root')
);

