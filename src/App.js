import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UsersList from './Components/UsersList/UsersList'
import ErrModal from  './Components/ErrorModal/ErrModal'
import SpaceHolder from './Components/UI/SpaceHolder'
import BackDropModal from './Components/UI/BackDropModal'

let persons = [
  {Name:'Avi Swartz', Age:18},
  {Name:'Haim Choen', Age:42}
]


function App() {

  const [personObjs, setPersonObjs] = useState(persons)
  const [errMsg, setErrMsg] = useState('')
  const [visible, setVisible] = useState(false)

  const newUserSubmitHandler  = (p)=>{
    console.log('in app, event = ', p)
    setPersonObjs((prevPersonsState)=> {
      return [p, ...prevPersonsState]
    })
  }
  
  const modalShownHandler = (msg)=>{
    setErrMsg(msg)
    setVisible(true)
  }

  const closeBtnClickedHandler = ()=>{
    setVisible(false)
  }

  const DimmedAreaClickedHandler = ()=>{
    closeBtnClickedHandler()
  }

  

  return (
    <div className="App">
      <SpaceHolder spaceHeight={4}/>
      <UserInput OnNewUsrSubmit={newUserSubmitHandler} onModalShown={modalShownHandler}/>
      <SpaceHolder spaceHeight={1}/>
      <UsersList persons={personObjs}/>
      <BackDropModal show={visible} OnClickedDimmed={DimmedAreaClickedHandler}/>
      <ErrModal  msg={errMsg} show={visible}  onCloseBtnClicked={closeBtnClickedHandler}/>
    </div>
  );
}

export default App;
