import main from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useRef } from "react";
import {addPostActionCreator, onPostChangeAction} from "../../../Redux/state";


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  let newPostElement = useRef();

  let newAlert = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeAction(text));
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
          <button onClick={newAlert} className={main.button}>
            New post
          </button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
