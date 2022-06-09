import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const ADD_POST = 'ADD-POST';
const reloadPostChangeAction = 'RELOAD-POST';
const addMessageOnDialogs = 'ADD-MESSAGE';
const onMessageAction = 'RELOAD-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's work!", likesCount: 11},
                {id: 2, message: "It's work again!", likesCount: 14},
                {id: 3, message: "It's work again 111!", likesCount: 19},
                {id: 4, message: "It's work again 2222!", likesCount: 13},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sideBar: {
            friend: [
                {id: 1, name: 'Alexey'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sergey'},
            ],

        }
    },
    _rerenderPage() {
    },
    getState() {
        return this._state
    },
    reloadPage(observer) {
        this._rerenderPage = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderPage(this._state)
        }
}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const addMessage = () =>  ({type: addMessageOnDialogs})
export const onPostChangeAction = (text) => ({ type: reloadPostChangeAction, message: text})
export const onMessageChangeAction = (text) => ({ type: onMessageAction, message: text})


export default store

