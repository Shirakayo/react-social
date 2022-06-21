import Background from "./Background/Background";
import MyInfo from "./MyInfo/MyInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Background/>
            <MyInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile