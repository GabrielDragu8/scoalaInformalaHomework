import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

const HomePage = () => {
  return <div className='HomePage'>
    <Header text="Employee Directory"></Header>
    <SearchBar></SearchBar>
    <EmployeeList></EmployeeList>
  </div>;
};

export default HomePage;