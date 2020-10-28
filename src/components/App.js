import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Contact from './Contact'
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer'
import Projects from './Projects'

import '../styles/App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
