import React from 'react';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <>
          <HomePage></HomePage>
          <EmployeePage></EmployeePage>
        </>
      </div>
    </div>
  );
}

export default App;
