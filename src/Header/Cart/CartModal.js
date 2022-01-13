import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import classes from './CartModal.module.css'
import CartContext from '../../store/CartContextProvider';

const BackDrop = (props) =>{
    const ctx = useContext(CartContext);
    
    const handleClickBackdrop = () =>{
        ctx.changeModalStatus();
    }
    return(
        <div className={classes.backdrop} onClick={handleClickBackdrop}></div>
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
