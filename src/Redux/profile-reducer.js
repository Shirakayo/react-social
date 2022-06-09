const ADD_POST = 'ADD-POST';
const reloadPostChangeAction = 'RELOAD-POST';

const profileReducer = (state,action) => {
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