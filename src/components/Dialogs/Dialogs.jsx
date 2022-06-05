import assets from "./Dialogs.module.css";

// import React from "@types/react";

const Dialogs = (props) => {
  return (
    <div className={assets.dialogs}>
      <div className={assets.dialogs_item}>{props.dialogs}</div>
      <div className={assets.messages}>{props.messages}</div>
    </div>
  );
};

export default Dialogs;
