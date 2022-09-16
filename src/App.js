import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Balance from './components/Balance';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/balance' element={<Balance />} />
        <Route path='/login' element={<Login />} />
        <Route path='/'>{localStorage.getItem('token') ? (<Navigate to='/balance' /> ) : (<Navigate to='/login' /> )} </Route>
      </Routes>
    </div>
  );
}

export default App;
