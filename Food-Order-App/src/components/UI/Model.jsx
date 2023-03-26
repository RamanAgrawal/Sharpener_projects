import classes from './Model.module.css'
import ReactDOM from 'react-dom'
import { useContext } from 'react'
import FoodContext from '../../store/FoodContext'
import { Fragment } from 'react'
const Backdrop=props=>{
    const ctx=useContext(FoodContext)
    return <div className={classes.backdrop} onClick={ctx.HideCartHandler}/>
}
const ModelOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement=document.getElementById('over-lay')

const Model=props=>{
    return <Fragment>
         
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
        
    </Fragment>
}
export default Model