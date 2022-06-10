const addMessageOnDialogs = 'ADD-MESSAGE';
const onMessageAction = 'RELOAD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Evgeniy"},
        {id: 7, name: "Katusha"},
    ],
    message: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "How are you?"},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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