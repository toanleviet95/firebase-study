import React from 'react';
import { render } from 'react-dom';
import App from '@/components/App';
import registerServiceWorker from '@/register-sw';

render(<App />, document.getElementById('root'));
registerServiceWorker();

module.hot.accept();
