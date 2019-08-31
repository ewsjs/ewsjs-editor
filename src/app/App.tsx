import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../components/home/Home';
import ServiceDialog from '../components/dialogs/service-dialog';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <ServiceDialog />
    </div>
  );
}

export default App;
