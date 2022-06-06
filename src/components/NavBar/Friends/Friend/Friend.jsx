import style from './Friend.module.css'


const Friend = (props) => {
    return (
        <div className={style.friends}>
            <img className={style.friend_image} src="https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-51.jpg" alt="am"/>
            <div>{props.name}</div>
        </div>
    )
}

export default Friend