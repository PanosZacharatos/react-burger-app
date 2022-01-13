import React from 'react';
import ReactDOM from 'react-dom';
import classes from './CartModal.module.css'

const BackDrop = (props) =>{
    return(
        <div className={classes.backdrop}></div>
    );
    
};

const ModalOverlay = (props) =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};



function CartModal(props) {
    return (
        <React.Fragment>
          {ReactDOM.createPortal(
              <BackDrop /> ,
              document.getElementById("backdrop")
          )}
          {ReactDOM.createPortal(
              <ModalOverlay>{props.children}</ModalOverlay> ,
              document.getElementById("modal-overlay")
          )}  
        </React.Fragment>
    )
}

export default CartModal;
