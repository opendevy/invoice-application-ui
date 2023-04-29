import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as History from 'history';
import rootReducer from './reducers';

export const history = History.createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, middleware);

export default store;
