// import classes from "./Profile.module.css"
import Background from "./Background/Background";
import MyInfo from "./MyInfo/MyInfo"
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <Background />
            <MyInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile