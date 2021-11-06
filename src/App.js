/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </>
    );
  }
}

export default App;
