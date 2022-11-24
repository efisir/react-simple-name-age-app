import './ErrModal.css'
import Btn from '../UI/Btn'
import React from 'react'
import ReactDom from 'react-dom'


const ErrModalComp = (props)=> {
    const submitHandler = (event) => {
        event.preventDefault()
        props.onCloseBtnClicked()
    }

    if (props.show){
        return (
               
                <form  className='modal' onSubmit={submitHandler}>
                    <div className='modal-header'>Error!</div>
                    <div className='modal-message'>
                        <span>{props.msg}</span>
                    </div>
                    <div className='err-modal-btn'>
                        <Btn type='submit'>Close</Btn>
                    </div>
                </form>
    )}else{
        return null
    }
}
const ErrModal = (props) => {
    return(
        <React.Fragment>
            {ReactDom.createPortal(
                <ErrModalComp msg={props.msg} show={props.show}   
                onCloseBtnClicked={props.onCloseBtnClicked}/>,
                
                document.getElementById('modal-root')
                
        )}
        </React.Fragment>
    )
}

export default ErrModal;