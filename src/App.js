import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import Admin from './component/admin/Admin'
import Details from './component/Details'
import ScrollToTop from './component/ScrollToTop'
function App() {

  return (
    <div className="App">
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
        <Route path="/post/:userId">
          <Details/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
