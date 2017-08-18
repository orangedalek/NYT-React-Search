var React = require("react");
// var ReactDOM = require("react-dom");
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
// var ReactRouter = require("react-router-dom");
// var BrowserRouter = ReactRouter.BrowserRouter;
import App from "./components.App";


var Main = require("./components/Main");

// This code here allows us to render our main component (in this case Main)
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById("app"));