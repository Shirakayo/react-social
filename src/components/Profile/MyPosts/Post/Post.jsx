import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://data.whicdn.com/images/328858952/original.jpg" alt=""/>
            {props.message}
            <div>
                <button className={classes.button}>Like</button> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;