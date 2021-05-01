import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";

function App() {
  return (
 
      <Router>
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/viewResume">
          <Resume></Resume> 
          </Route>
          <Route exact   path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    
  );
}

export default App;
