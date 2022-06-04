import n from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={n.nav}>
      <div>
        <a href={'/profile'} className={n.item}>Profile</a>
      </div>
      <div>
        <a href={'/dialogs'} className={`${n.item} ${n.action}`}>Messages</a>
      </div>
      <div>
        <a href={'/news'} className={n.item}>News</a>
      </div>
      <div>
        <a href={'/music'} className={n.item}>Music</a>
      </div>
      <div>
        <a href={'/settings'} className={n.item}>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar