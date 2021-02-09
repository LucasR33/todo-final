import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './App.css';
import TodosApp from './components/TodosApp'


const store = createStore(rootReducer);
export default class App extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
        <TodosApp />
      </Provider>
    );
  }
}