import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Main from "./layout/main";
import { routes } from "./routes/routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <Main>
          <Routes>
            {routes.map(({ path, element }, key) => (
              <Route {...{ path, element, key }} />
            ))}
          </Routes>
        </Main>
      </div>
    );
  }
}
