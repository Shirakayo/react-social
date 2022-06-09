import assets from "./Dialogs.module.css";
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";
import {useRef} from "react";
import {addMessage, onMessageChangeAction} from "../../Redux/state";

// import React from "@types/react";

const Dialogs = (props) => {
    let messages = props.state.message.map((message) => (
        <Message message={message.message} id={message.id}/>
    ));
    let dialogs = props.state.dialogs.map((dialog) => (
        <Dialog name={dialog.name} id={dialog.id}/>
    ));

    let elementLinks = useRef()

    let newMessage = () => {
        props.dispatch(addMessage())
    }

    let onMessageChange = () => {
        let text = elementLinks.current.value;
        props.dispatch(onMessageChangeAction(text));
    };

    return (
        <div className={assets.dialogs}>
            <div className={assets.dialogs_item}>{dialogs}</div>
            <div className={assets.messages}>{messages}</div>
            <div>
                <div><textarea ref={elementLinks} onChange={onMessageChange} value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
