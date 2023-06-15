import React from "react";
import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./components";
/* Import and destructure main from src/component/index.js 
and anything else you may need here */
import { Provider } from "react-redux";

import configureStore from "./store";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //   <React.StrictMode>
  <Provider store={configureStore}>
    <Main />
  </Provider>
  //   </React.StrictMode>
);
