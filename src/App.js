import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, actions } from './Components/Config/apiKeys';
import './App.css';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netfilx Originals' />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={actions} title='Action' isSmall />
    </div>
  );
}

export default App;
