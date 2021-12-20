import React from 'react';
import logo from './logo.svg';
import './App.css';
// import User from './state/User';
import { ThemeContextProvider } from './context/ThemeContext';
import Box from './context/Box';
import { UserContextProvider } from './context/UserContext';
import { User } from './context/User';
import {Counter} from './class/Counter';




function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      <Counter message="The count value is"/>
    </div>
  );
}

export default App;
