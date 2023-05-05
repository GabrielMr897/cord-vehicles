import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

// import { Container } from './styles';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/Register" element={<Register/>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  );
}

export default Router;