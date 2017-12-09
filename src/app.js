import "regenerator-runtime/runtime"; // eslint-disable-line
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from './sagas/root_sagas';
import AppRoutes from './approuter/approuter';
import initalStore, { sagaMiddleware } from './store/configure_store';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = initalStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={ store }>
        <AppRoutes />
    </Provider>,
     document.getElementById('app'));