import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import { useState } from 'react';
import { createContext } from 'react';
import { AuthContextProvider } from './Hooks/useAuth';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Main />
      </AuthContextProvider>
    </>
  );
}

export default App;
