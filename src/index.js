import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const history = createBrowserHistory()
const store = configureStore(history)


ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
    document.getElementById('root')
)
