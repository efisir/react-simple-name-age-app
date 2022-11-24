import './BackDropModal.css'
import React from 'react'
import ReactDom from 'react-dom'
const BackDropModalcomp = (props) =>{

    const clickDimmedHandler = (event) => {
        console.log('clickDimmedHandler')
        props.onClick()
    }
    if (props.show){
        return <div className='dimmed' onClick={clickDimmedHandler}></div>
    }else{
        return null
    }    
}

const BackDropModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDropModalcomp show={props.show} 
                onClick={props.OnClickedDimmed}/>, 
            document.getElementById('overlay-root'))
            }
        </React.Fragment>
    )
}

export default BackDropModal