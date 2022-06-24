import h from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={h.header}>
            <img src="https://logo-download.com/wp-content/data/images/svg/Babylon.js-logo.svg" alt="github"/>
            <div className={h.loginBlock}>
                <NavLink to={'/login'}>{props.isAuth ? props.login : 'login'}</NavLink>
            </div>
        </header>

    )
}

export default Header