import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../components/home/Home';
import ServiceDialog from '../components/dialogs/service-dialog';
import { IDropdownOption, loadTheme } from 'office-ui-fabric-react';

const exchangeVersions: IDropdownOption[] = [
  {key: "Exchange2013", text: "Exchange_2013"}
]

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <ServiceDialog exchangeVersions={exchangeVersions} />
    </div>
  );
}

export default App;
