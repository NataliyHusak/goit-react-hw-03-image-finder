import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    value: ""
  };

  handleOnChange = e => {
    this.setState({ value: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleOnSubmit} className={styles.Form}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            onChange={this.handleOnChange}
            value={value}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
