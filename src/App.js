import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Header from './components/Header';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <UserList />
        <AddUser />
      </div>
    </Provider>
  );
}

export default App;