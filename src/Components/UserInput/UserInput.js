
import React, {useState, useRef, useEffect} from 'react'
import './UserInput.css'
import Btn from '../UI/Btn'
import Card from '../UI/Card'
import userEvent from '@testing-library/user-event'


const UserInput = (props) => {

        const [name, setName] = useState('')
        //const nameInputRef = useRef()
        const ageInputRef = useRef()

        const nameChangedHandler = (event) => {
            setName(event.target.value)
        }

        const submitFormHandler = (event) => {

            event.preventDefault()
            if (inputIsValid()){
                const p = { key: Math.random(),
                            Name: name, 
                            Age:ageInputRef.current.value}
                props.OnNewUsrSubmit(p)
                
                setName('')
                ageInputRef.current.value = ''
            }
        }

        const errNameEmptyStr = 'please enter a name!'
        const errAgeEmptyStr = 'please enter a age!'
        const errAgeStr = 'age must be 1 or more!'
        let msg = ''
        let ageVal = 0

        const inputIsValid = () =>{
                ageVal = +ageInputRef.current.value
                msg = name.trim().length == 0 ? errNameEmptyStr : (ageVal == 0 ? 
                errAgeEmptyStr : (ageVal <= 0 ? errAgeStr: ''))
                
                if (msg.length > 0){
                    props.onModalShown(msg)
                    return false
                }
                return true
            
        }


    return (

            
            <Card className='user-box' style='margin: 10;'>
            <form  onSubmit={submitFormHandler}>
                <div className='user-name'>
                    <div>
                        <label className='lbl'>Name</label>
                    </div>
                    <div>
                        <input type='text' value={name} onChange={nameChangedHandler}/>
                    </div>
                </div>
                <div className='user-age'>
                    <div>
                        <label className='lbl'>Age</label> 
                    </div>
                    <div>
                        <input type='text' ref={ageInputRef}/>
                    </div>
                </div>
                <Btn type='submit' className='input-form'>Add</Btn>
            </form>
            </Card>
    );
}


export default UserInput; 