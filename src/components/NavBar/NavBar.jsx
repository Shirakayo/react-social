import n from "./NavBar.module.css";

const NavBar = () => {
    console.log(n)
  return (
    <nav className={n.nav}>
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={`${n.item} ${n.action}`}>Profile</a>
      </div>
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={n.item}>Messages</a>
      </div>
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={n.item}>News</a>
      </div>
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={n.item}>Music</a>
      </div>
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={n.item}>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar