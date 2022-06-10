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
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost)
        state.newPostText = '';
    } else if (action.type === reloadPostChangeAction) {
        state.newPostText = action.message
    }
    return state;
}

export default profileReducer