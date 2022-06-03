import main from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={main.info}>
            My posts
            <div>
                New post
            </div>
            <div>
                <Post set={`It's work!`}/>
                <Post set={`It's work again!`}/>
                <Post setup={`This is post!`}/>
                <Post setup={`This is post again!`}/>
            </div>
        </div>
    )
}

export default MyPosts