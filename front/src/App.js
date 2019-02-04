import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Layout from './components/Layout';
import Form from './components/Form';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
      {/*  Routing method */}
      <div className="content">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/home" component={Home} />
            <Route path='/form' component={Form} />
            <Route path='/layout' component={Layout} />
            <Route path='/search' component={SearchPage} />
        </Switch>
        </div>
        <Footer className="footer"/>
        </div>
    );
  }
}

export default App;
