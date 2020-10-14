import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Main />
      </UserContext.Provider>
    </>
  );
}

export default App;
