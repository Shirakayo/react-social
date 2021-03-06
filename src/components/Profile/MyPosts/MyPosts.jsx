import main from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useRef } from "react";




const MyPosts = (props) => {
  let postsElements = props.post.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  let newPostElement = useRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text)
  };

  return (
    <div className={main.info}>
      <div className={main.title}>My posts</div>
      <div className={main.newPost}>
        <textarea
          ref={newPostElement}
          className={main.area}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <div>
          <button onClick={onAddPost} className={main.button}>
            New post
          </button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
