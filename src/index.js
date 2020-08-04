import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let cusState = {
  allusers: [{ id: "1", "name": "user 1", "email": "user1@example.com" }, { id: "2", "name": "user 2", "email": "user2@example.com" }, { id: "3", "name": "user 3", "email": "user3@example.com" }, { id: "4", "name": "user 4", "email": "user4@example.com" }],
  editUsers: []
}
const reducer = (state = cusState, action) => {
  switch (action.type) {
    case "ADDUSER":
      return { ...state, editUsers: state.allusers.push(action.preload) };
    case "DELETEUSER": return { ...state, allusers: state.allusers.filter(items => items !== action.preload) }
    case "UPDATEUSER":
      let updtusr = state.allusers.filter(item => item.id === action.preload.id && (item.id = action.preload.id, item.name = action.preload.name, item.email = action.preload.email))
      return { ...state, allusers: state.allusers, updtusr }
    default: return (state)
  }
}
export const addUser = (item) => { return { type: "ADDUSER", preload: item } }
export const deleteUser = (item) => { return { type: "DELETEUSER", preload: item } }
export const updateUser = (item) => { return { type: "UPDATEUSER", preload: item } }
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);