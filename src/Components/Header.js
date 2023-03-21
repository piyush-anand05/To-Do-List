import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  //props are JS object which is passed from parent component to child component
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

Header.defaultProps = {
  //when no title is passed
  title: "YourTitle Here",
  // searchBar: true
};

Header.propType = {
  //gives warning in console when wrong datatype is passed, helps in debugging
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};