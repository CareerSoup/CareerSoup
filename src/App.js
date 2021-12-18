import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NewNavBar from './components/NewNavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <NewNavBar/>
    </div>
  );
}

export default App;
