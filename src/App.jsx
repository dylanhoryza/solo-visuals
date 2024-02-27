import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// App that renders all content 
function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-container'>
       
        <Outlet />
      </div>
      
    </div>
  );
}

export default App
