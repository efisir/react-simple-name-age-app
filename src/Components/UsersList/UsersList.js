import './UsersList.css'
import Person from './Person'



const UsersList = (props) => {
    const personsItems = props.persons

    // console.log(personsItems)
    return (
        personsItems.map((p) =>
        <div className='user-list'>
            <Person 
                key = {Math.random()}
                Name={p.Name} 
                Age={p.Age}/>
        </div>
            )

    );
}


export default UsersList;