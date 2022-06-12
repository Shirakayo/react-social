const ADD_POST = 'ADD-POST';
const reloadPostChangeAction = 'RELOAD-POST';

let initialState = {
    posts: [
        {id: 1, message: "It's work!", likesCount: 11},
        {id: 2, message: "It's work again!", likesCount: 14},
        {id: 3, message: "It's work again 111!", likesCount: 19},
        {id: 4, message: "It's work again 2222!", likesCount: 13},
    ],
        newPostText: ''

}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        }
        case reloadPostChangeAction: {
            return {
                ...state,
                newPostText: action.message
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: reloadPostChangeAction, message: text})

export default profileReducer