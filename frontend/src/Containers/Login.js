import React from "react";
import { Link, redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../Actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    login(email, password);
    redirect("/");
  };

  if (isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign in into your account</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-group">
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group m-2">
          <input
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            minLength={6}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account <Link to="/signup">Sign Up</Link>
      </p>
      <p className="mt-3">
        Forgot your password <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
