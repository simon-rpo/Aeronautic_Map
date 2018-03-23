import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, sync } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { LocaleProvider } from 'antd';
import esEs from 'antd/lib/locale-provider/es_ES';
import './styles/index.css';
import Layout from './pages/Layout';
import store from './state/store';
import registerServiceWorker from './registerServiceWorker';

// const history = syncHistoryWithStore(createBrowserHistory(), store);

const App = () => {
  return (
    <LocaleProvider locale={esEs}>
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    </LocaleProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
