import style from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }


  return (
    <div>
        <button className={style.btn} onClick={getUsers}>Get Users</button>
        <div className={style.main}>
              {props.users.map((u) => (
                <div key={u.id}>
                  <span>
                    <div>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.image} alt={"avatar"} />
                    </div>
                    <div>
                      {u.followed ? (
                        <button
                            className={style.btn}
                          onClick={() => {
                            props.unfollow(u.id);
                          }}
                        >
                          Unfollow
                        </button>
                      ) : (
                        <button
                            className={style.btn}
                          onClick={() => {
                            props.follow(u.id);
                          }}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </span>
                  <span>
                    <span>
                      <div>{u.name}</div>
                      <div>{u.status}</div>
                    </span>
                    <span>
                      <div>{"u.location.country"}</div>
                      <div>{"u.location.city"}</div>
                    </span>
                  </span>
                </div>
              ))}
        </div>
    </div>
  );
};

export default Users