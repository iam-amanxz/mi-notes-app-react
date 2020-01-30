import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="nav-brand">Mi-Notes</h2>
        <div className="nav-links">
          <NavLink to="/create" className="add-button">
            <i className="fas fa-plus-circle"></i>
          </NavLink>
          <i className="fas fa-power-off" onClick={startLogout}></i>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
