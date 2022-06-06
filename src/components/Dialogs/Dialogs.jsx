import assets from "./Dialogs.module.css";
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

// import React from "@types/react";

const Dialogs = (props) => {
    let messages = props.state.message.map((message) => (
        <Message message={message.message} id={message.id} />
    ));
    let dialogs = props.state.dialogs.map((dialog) => (
        <Dialog name={dialog.name} id={dialog.id} />
    ));
  return (
    <div className={assets.dialogs}>
      <div className={assets.dialogs_item}>{dialogs}</div>
      <div className={assets.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
