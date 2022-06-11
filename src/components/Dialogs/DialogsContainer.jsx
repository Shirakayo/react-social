import {addMessage, onMessageChangeAction} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessage = () => {
        props.store.dispatch(addMessage())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeAction(text));
    };

    return (
        <Dialogs newMessage={newMessage} onMessageChange={onMessageChange} dialogsPage={state}/>
    );
};

export default DialogsContainer;
