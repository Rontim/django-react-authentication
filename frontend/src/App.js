import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Containers/Home";
import Login from "../src/Containers/Login";
import Activate from "../src/Containers/Activate";
import ResetPassword from "../src/Containers/ResetPassword";
import ResetPasswordConfirm from "../src/Containers/ResetPasswordConfirm";
import Signup from "../src/Containers/Signup";

import { Provider } from "react-redux";
import store from "./store";
import Layout from "./hocs/Layout";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
