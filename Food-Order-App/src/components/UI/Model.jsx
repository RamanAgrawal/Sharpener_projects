import classes from './Model.module.css'
// import { ReactDOM } from 'react-dom'
import { Fragment } from 'react'
const Backdrop=props=>{
    return <div className={classes.backdrop}/>
}
const ModelOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement=document.getElementById('over-lay')

const Model=props=>{
    return <Fragment>
         
        {/* {ReactDOM.createPortal(<Backdrop/>,document.getElementById('root'))} */}
          <Backdrop />
         <ModelOverlay>{props.children}</ModelOverlay>
    </Fragment>
}
export default Model