import React from "react";
import PropTypes from "prop-types";
import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return <div className={classes.loader}>Loading...</div>;
};

Spinner.propTypes = {};

export default Spinner;
