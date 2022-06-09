import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import LayoutComponent from './components/Public/layout';
import Routing from './pages/routing';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LayoutComponent>
          <Routing></Routing>
        </LayoutComponent>
      </Provider>
    </div>
  );
}

export default App;
