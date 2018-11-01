import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "components/App";
import Root from "Root";

// Provider takes an instance of a Redux Store
ReactDOM.render(
  // App is a child of Root and Root will wrap it in redux Provider
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
