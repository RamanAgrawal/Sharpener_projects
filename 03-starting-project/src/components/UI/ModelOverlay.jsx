import Card from "./Card"
import './ModelOverlay.css'
import Button from "./Button"

const ModelOverlay=props=>{
  return  <Card classes={'modal'}>
  <header className='header'>
      <h2>{props.title}</h2>
  </header>
  <div className='content'>
      <p>{props.message}</p>
  </div>
  <footer className='actions'>
      <Button onClick={props.onConfirm}>okey</Button>
  </footer>
</Card>
}
export default ModelOverlay