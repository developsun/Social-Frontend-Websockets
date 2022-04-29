import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';

import Chat from './components/Chat/Chat';
import {Login} from './components/Login/Login';

function App(){

  return (
    <Router>
      <Route path="/chat" component = {Chat}/>
      <Route path="/login" component = {Login}/>
    </Router>

  );
}
export default App;

