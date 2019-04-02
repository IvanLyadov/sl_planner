import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostEditor from "./PostEditor";

export default () => (
  <Router>
      <div>
        <Route path={'edit'} component={PostEditor} />
      </div>
  </Router>
);
