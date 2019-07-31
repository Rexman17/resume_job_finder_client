import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Splash from './components/Splash'
import ResInputForm from './components/ResInputForm'

// TODO: add conditional rendering of Splash or ResInputForm based on whether person is logged in.
function App() {
  return (
    <div>
    <Splash />

    <ResInputForm />
    </div>
  );
}

export default App;
