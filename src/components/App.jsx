import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './App.routes'; 
import Store from '../redux/store'; 
import { getCourseList } from '../redux/acctionCreator'; 

Store.dispatch(getCourseList());

const App = () => (
  <Provider store={Store}>
    <AppRoutes />
  </Provider> 
);

export default App;