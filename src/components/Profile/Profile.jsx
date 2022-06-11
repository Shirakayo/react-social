// import classes from "./Profile.module.css"
import Background from "./Background/Background";
import MyInfo from "./MyInfo/MyInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Background/>
            <MyInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile