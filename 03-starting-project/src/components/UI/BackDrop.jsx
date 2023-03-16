import './BackDrop.css'

const BackDrop=props=>{
    return <div className="backdrop" onClick={props.onConfirm} />
}
export default BackDrop