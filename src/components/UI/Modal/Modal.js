import './Modal.css';
import Button from '@material-ui/core/Button';

const Modal = (props) => {
    if (!props.open){
        return null;
    }

    return (
        <div className="Modal">
            {props.children}
            <Button variant="contained" onClick={props.onClose} style={{color: "whitesmoke", backgroundColor: "#000c46"}}>Ok</Button>
        </div>
    )
}

export default Modal
