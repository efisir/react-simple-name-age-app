import './Btn.css'

const Btn  = (props) => {
    return (
        <div>
            <button type={props.type} className={props.className}>{props.children}</button>
        </div>
    )
}


export default Btn;