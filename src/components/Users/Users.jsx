import style from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import React from 'react';


class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    // constructor(props) {
    //     super(props);
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }


    render = () => {
        return (
            <div>
                <div className={style.main}>
                    {this.props.users.map((u) => (
                        <div key={u.id}>
                  <span>
                    <div>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.image}
                           alt={"avatar"}/>
                    </div>
                    <div>
                      {u.followed ? (
                          <button
                              className={style.btn}
                              onClick={() => {
                                  this.props.unfollow(u.id);
                              }}
                          >
                              Unfollow
                          </button>
                      ) : (
                          <button
                              className={style.btn}
                              onClick={() => {
                                  this.props.follow(u.id);
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
    }
}

export default Users