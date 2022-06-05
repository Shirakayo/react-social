import style from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink className={style.dialog_item} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog