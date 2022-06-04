import main from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={main.info}>
            My posts
            <div>
                <textarea></textarea> <button>New post</button>
            </div>
            <div>
                <Post message={`It's work!`} likesCount = '23' />
                <Post message={`It's work again!`} likesCount = '0'/>
            </div>
        </div>
    )
}

export default MyPosts