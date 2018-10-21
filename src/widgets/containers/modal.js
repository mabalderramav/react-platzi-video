import React, {Component} from 'react';
import {createPortal} from 'react-dom';

/**
 * This class handles ModalContainer component.
 */
export default class ModalContainer extends Component {
  render() {
    return createPortal(this.props.children, document.getElementById('modal-container'));
  }
}
