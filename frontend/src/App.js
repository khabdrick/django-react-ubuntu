import React from "react";
import "./App.css";
import { ContactPage } from "./components/ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./components/detailView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <ContactPage />
            </Route>
            <Route path="/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;