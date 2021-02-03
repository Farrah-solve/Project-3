import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />

      <Route path='/'>
      {/* // Home */}
      </Route>

      <Route path='budget'>
      {/* // Budget */}
      </Route>

      <Route path='Notes'>
      {/* // Notes */}
      </Route>

    </Router>
  ) 
  
  
}

export default App;
