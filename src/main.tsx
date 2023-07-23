import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Portfolio } from './Portfolio';

import './lang/i18n';
import './helpers/konamicode';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
