import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MantineProvider, Button } from '@mantine/core';
import './Sidebar'
import { Sidebar } from './Sidebar';


function App() {
  return (
    <>
    <Sidebar />
    <Button/ >
    </>
  );
}

export default App;
