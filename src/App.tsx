import React from 'react';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import { store } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (

    <>
      <GlobalStyle/>  
      <Provider store={store}>
      <Login/>
      </Provider>
    </>
  );
}

export default App;
