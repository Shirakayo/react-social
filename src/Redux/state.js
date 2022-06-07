import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "It's work!", likesCount: 11},
            {id: 2, message: "It's work again!", likesCount: 14},
            {id: 3, message: "It's work again 111!", likesCount: 19},
            {id: 4, message: "It's work again 2222!", likesCount: 13},
        ],
        newPostText: 'Shirakayo is best!'
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
        ]
    },
    sideBar: {
        friend: [
            {id: 1, name: 'Alexey'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sergey'},
        ]
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}



export default state