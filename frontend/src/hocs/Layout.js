import React from "react";
import Navbar from "../Components/NavBar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../Actions/auth";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  React.useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
