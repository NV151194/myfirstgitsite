import ReactDOM from 'react-dom'; //connecting and rendering  the react app and html file
import { createStore, applyMiddleware } from 'redux'; //used for creating the store
import { Provider } from 'react-redux'; // provider is only used for rendering the react app
import thunk from 'redux-thunk'; //used as dependecies of applymiddleware
import { reducers } from './reducers';
import { App } from './components/App';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
