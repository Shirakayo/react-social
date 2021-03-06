import React from 'react'
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

import { getFollowDelete, getFollowPost} from "../../api/api";

let Users = (props) => {
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }



    return (
        <div>
            <div className={style.main}>
                {props.users.map((u) => (
                    <div key={u.id}>
              <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={userPhoto} className={style.image} alt={"avatar"}/>
                    </NavLink>
                </div>
                <div>
                  {u.followed
                      ? (<button className={style.btn} onClick={() => {
                          getFollowDelete(u.id)
                              .then((response) => {
                                  if (response.resultCode === 0) {
                                      props.unfollow(u.id);
                                  }
                              })
                      }}>Unfollow</button>)
                      : (<button className={style.btn} onClick={() =>
                          getFollowPost(u.id)
                              .then((response) => {
                                  if (response.resultCode === 0) {
                                      props.follow(u.id);
                                  }
                              })
                      }>Follow</button>)}
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
            <div className={style.pages}>
                {pages.map((p) => {
                    return (
                        <span
                            className={props.currentPage === p && style.active}
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                        >
                {p}
              </span>
                    );
                })}
            </div>
        </div>
    )
}

export default Users