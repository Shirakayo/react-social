// import classes from "./Profile.module.css"
import Background from "./Background/Background";
import MyInfo from "./MyInfo/MyInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <Background/>
            <MyInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile