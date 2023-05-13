import React from "react";
import { Link } from "react-router-dom";

console.log("Home");

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Authentication Tutiorial</h1>
        <p className="lead">
          An authentication system using djoser django and JSON Web Token
        </p>
        <hr className="my-4" />
        <p>Click the Login button</p>
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
