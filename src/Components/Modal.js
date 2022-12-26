import { Fragment,useState,useRef } from 'react';
import { Button, CloseButton,Overlay } from 'react-bootstrap';
import ReactDOM, { createPortal } from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = props =>{

    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}


const Modal = props =>{
    if(!props.open) return null;
    const portalElement=document.getElementById('overlays')
    



    return (
        <Fragment>
                {/* {ReactDOM.createPortal(<Backdrop/>,portalElement)} */}
                {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
                
        </Fragment>
        )
        
        
       
                
    
    

    
   
        
};

export default Modal;