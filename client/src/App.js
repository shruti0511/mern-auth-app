import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
           { isLoggedIn &&
            <Route path='/user' element={<Welcome />}></Route>
          }{" "}


        </Routes>
      </main>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
