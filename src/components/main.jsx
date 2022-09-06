import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './auth';
import RegistrationForm from './registration';
import React from 'react';
import Table from './table';
import MainContext from '../context/mainContext';
import AuthContext from '../context/authContext';
import { FILTER } from '../api/api';

function Main() {
  const [mainContext, setMainContext] = useState({ links: [], filter: FILTER.ASCENDING_SHORT });
  const [auth, setAuth] = useState({ username: '', auth: false });

  return (
    <MainContext.Provider value={{ mainContext, setMainContext }}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </AuthContext.Provider>
    </MainContext.Provider>
  );
}

export default Main;
