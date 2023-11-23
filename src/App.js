import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Users from './user';
import Singin from './singin';
import About from './about';
import Header from './header';

function App() {

<Header/>
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singin' element={<Singin />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
