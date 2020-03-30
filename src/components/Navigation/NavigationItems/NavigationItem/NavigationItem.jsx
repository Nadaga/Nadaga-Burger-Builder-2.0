import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItem.module.css";
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={`${props.active ? "active" : null}`}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {};

export default NavigationItem;
