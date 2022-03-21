import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Form from "./components/form";
import Planets from "./components/planets";
import People from "./components/Person";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form  />
        <Switch>
          <Route exact path="/planets/:id">
            <Planets/>
          </Route>
          <Route exact path="/people/:id">
            <People/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
