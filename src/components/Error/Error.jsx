import React from "react";

import PropTypes from "prop-types";
import styles from "./Error.module.css";

const Error = ({ children }) => {
  return (
    <div className={styles.error}>
      <span>{children}</span>
    </div>
  );
};
Error.propTypes = {
  children: PropTypes.node.isRequired
};
export default Error;
