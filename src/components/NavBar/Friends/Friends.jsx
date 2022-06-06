import style from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {
    const friend = props.state.friend.map((el) => <Friend name={el.name} id={el.id}/>)
    return (
        <div>
            <div className={style.friends_title}>Friends</div>
            <div className={style.friends_wrapper}>{friend}</div>
        </div>
    )
}

export default Friends