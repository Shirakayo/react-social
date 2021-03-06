import assets from "./Dialogs.module.css";
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";
import {useRef} from "react";


// import React from "@types/react";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let messages = state.message.map((message) => (
        <Message key={message.id} message={message.message} id={message.id}/>));
    let dialogs = state.dialogs.map((dialog) => (
        <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>));

    let elementLinks = useRef()

    let newMessage = () => {
        props.newMessage()
    }

    let onMessageChange = () => {
        let text = elementLinks.current.value;
        props.onMessageChange(text)
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
