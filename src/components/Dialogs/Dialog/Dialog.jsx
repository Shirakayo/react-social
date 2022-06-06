import style from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img className={style.dialogs_image} src="https://play-lh.googleusercontent.com/uq327DX85XgA1uJSEKl5h3ws5l-MMPFwV26rH-V3grL3yDs9iRGEy2YRgeAgDYaj9ks" alt="am"/>
            <NavLink className={style.dialog_item} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog