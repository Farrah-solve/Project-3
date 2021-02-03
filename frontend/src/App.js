import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Budget from './components/Budget';
import Notes from './components/Notes';



function App() {
  return (
    <Router>
      <Navbar />

      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/budget'>
        <Budget />
      </Route>

      <Route path='/Notes'>
        <Notes />
      </Route>

    </Router>
  ) 
  
  
}

export default App;
