import React from "react";
import { Redirect } from "react-router-dom";

// Route Views
import Main from "./views/Main";


export default [
  {
    path: "/",
    exact: true,
    layout: Main,
    // component: () => <Redirect to="/blog-overview" />
    component: Main,
  },
];
