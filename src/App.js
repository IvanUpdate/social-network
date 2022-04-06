import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Test} from "./components/Test/test";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
      <Test />
    </div>
  );
}
export default App;
