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
    switch (action.type) {
        case addMessageOnDialogs: {
            return {
                ...state,
                message: [...state.message, {id: 4, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        case onMessageAction: {
            return {
                ...state,
                newMessageText: action.message
            }
        }
        default:
            return state
    }
}

export const onMessageChangeAction = (text) => ({ type: onMessageAction, message: text})
export const addMessage = () =>  ({type: addMessageOnDialogs})

export default dialogsReducer