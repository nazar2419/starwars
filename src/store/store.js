import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rooteReducer from './reducers';
import { setLocalStorage } from '@utils/localStorage';

const store = createStore(
  rooteReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(()=> {
  setLocalStorage('store', store.getState().favoriteReducer);
});

export default store;