
import ReactDOM from 'react-dom';

import ModelOverlay from './ModelOverlay';
import BackDrop from './BackDrop';
const ErrorModel = props => {
    return <div>

        {
            ReactDOM.createPortal(
                <BackDrop
                    onConfirm={props.onConfirm}
                />, document.getElementById('backdrop-root'))
        }

        {
            ReactDOM.createPortal(
                <ModelOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />, document.getElementById('overlay-root'))
        }


    </div>

}

export default ErrorModel