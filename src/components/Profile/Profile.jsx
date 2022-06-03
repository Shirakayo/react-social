// import classes from "./Profile.module.css"
import Background from "./Background/Background";
import MyInfo from "./MyInfo/MyInfo"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <Background />
            <MyInfo />
            <MyPosts />
        </div>
    )
}

export default Profile