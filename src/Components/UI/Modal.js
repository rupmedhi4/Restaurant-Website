import React from "react";
import Classes from './Modal.module.css';
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div onClick={props.onClose} className={Classes.backdrop}></div>
}

const ModalOverlay = props => {
    const portalElement = document.getElementById('overlays')
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          props.children,
          portalElement
        )}
      </React.Fragment>
    );
}

const Modal = (props) => {
    return ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays')
    );
}

export default Modal;
