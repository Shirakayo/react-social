import main from "./MyPosts.module.css";


const MyPosts = (props) => {
    debugger
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

          { props.posts }
      </div>
    </div>
  );
};

export default MyPosts;
