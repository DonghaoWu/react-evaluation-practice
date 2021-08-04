import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

import './index.css';

ReactDOM.render(
  React.createElement(HelloMessage, {
    message:
      '< Html + React + Webpack + JSX + Babel-loader + CSS-loader + Plugin >',
  }),
  document.getElementById('root')
);
