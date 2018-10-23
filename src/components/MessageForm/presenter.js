import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.css";

export default class presenter extends Component {
  componentDidUpdate(prevProps, prevState) {
    this.inputRef.focus();
  }

  render() {
    const { message, handleChange, handleSubmit } = this.props;

    return (
      <form className="msg-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Type your message here :)"
          value={message}
          onChange={handleChange}
          name="message"
          autoComplete="off"
          required
          ref={ref => (this.inputRef = ref)}
        />
        <button type="submit" className="msg-form__btn-submit">
          <Ionicon icon="md-send" />
        </button>
      </form>
    );
  }
}