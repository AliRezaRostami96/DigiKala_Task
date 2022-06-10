import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import LayoutComponent from './components/Public/layout';
import Routing from './pages/routing';
import store from './store/store';
import RTL from './theme/rtl';
import theme from './theme/theme';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RTL>
          <ThemeProvider theme={theme}>
            <LayoutComponent>
              <Routing />
            </LayoutComponent>
          </ThemeProvider>
        </RTL>
      </Provider>
    </div>
  );
}

export default App;
