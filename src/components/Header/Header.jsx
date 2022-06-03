import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"/>
        </header>
    )
}

export default Header