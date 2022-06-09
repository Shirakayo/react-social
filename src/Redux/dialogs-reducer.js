const addMessageOnDialogs = 'ADD-MESSAGE';
const onMessageAction = 'RELOAD-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === addMessageOnDialogs) {
        let newMessage = {
            id: 4,
            message: state.newMessageText
        }
        state.message.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === onMessageAction) {
        state.newMessageText = action.message
    }

    return state;
}

export default dialogsReducer