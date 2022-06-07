import style from './Friend.module.css'
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    let path = '/friends/' + props.id;
    return (
        <div className={style.friends}>
            <img className={style.friend_image} src="https://play-lh.googleusercontent.com/uq327DX85XgA1uJSEKl5h3ws5l-MMPFwV26rH-V3grL3yDs9iRGEy2YRgeAgDYaj9ks" alt="am"/>
            <NavLink className={style.friend_links} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Friend