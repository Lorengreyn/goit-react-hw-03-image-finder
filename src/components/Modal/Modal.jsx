import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          {this.props.children}
          <button
            className={css.button}
            type="button"
            onClick={this.props.onClose}
          >
            X
          </button>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;