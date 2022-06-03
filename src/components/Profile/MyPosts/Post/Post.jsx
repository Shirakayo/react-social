import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.item}>
            {props.setup}
            {props.set}
        </div>
    )
}

export default Post;