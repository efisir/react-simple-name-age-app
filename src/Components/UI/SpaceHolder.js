import './SpaceHolder.css'
const SpaceHolder = (props)=> {
    
    if (props.spaceHeight){
        return(
            <div style={{height: `${props.spaceHeight}rem`}}></div> 
        )
    }else{
    return (
        <div className='margin-top'></div> 
    )}
} 

export default SpaceHolder