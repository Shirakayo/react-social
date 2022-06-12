import { addMessage, onMessageChangeAction } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newMessage: () => {dispatch(addMessage())},
    onMessageChange: (text) => {dispatch(onMessageChangeAction(text))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
