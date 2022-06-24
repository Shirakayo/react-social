import Background from "./Background/Background";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <Background/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile