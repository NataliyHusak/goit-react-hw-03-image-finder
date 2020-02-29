import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick }) => (
    <button type="button" onClick={onClick} className={styles.Button}>
      <span>loade more</span>
    </button>
  );

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default Button;