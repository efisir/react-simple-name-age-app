import './Person.css'
import Card from '../UI/Card'
const Person = (props) => {
    return (
        <Card>
            <div>
                {props.Name} Is {props.Age} years old.
            </div>
        </Card>
    )
} 

export default Person;