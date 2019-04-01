import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main";
// import routes from "./routes";

// import "bootstrap/dist/css/bootstrap.min.css";


export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        <Route path={'/'} component={Main} />
      </div>
  </Router>
);
