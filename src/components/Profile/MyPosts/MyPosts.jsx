import main from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} id={p.id} />
    ));
    return (
        <div className={main.info}>
            My posts
            <div className={main.newPost}>
                <textarea className={main.area}></textarea>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
