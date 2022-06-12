import style from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
      props.setUsers([
          {
              id: 1,
              photoUrl:
                  "https://i.pinimg.com/474x/97/3a/fe/973afe1eedc13510cab06492c151b581.jpg",
              followed: false,
              fullName: "Dmitriy",
              status: "I am a boss!",
              location: {city: "Moscow", country: "Russia"},
          },
          {
              id: 2,
              photoUrl:
                  "https://i.pinimg.com/474x/97/3a/fe/973afe1eedc13510cab06492c151b581.jpg",
              followed: true,
              fullName: "Sergey",
              status: "I am a noob!",
              location: {city: "Minsk", country: "Belarus"},
          },
          {
              id: 3,
              photoUrl:
                  "https://i.pinimg.com/474x/97/3a/fe/973afe1eedc13510cab06492c151b581.jpg",
              followed: false,
              fullName: "Sasha",
              status: "I am a child!",
              location: {city: "Kiev", country: "Ukraine"},
          },
      ]);
  }

  return (
    <div className={style.main}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={style.image} alt={"avatar"} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users