import css from "./FriendListItem.module.css";

export const FriendListItem = (props) => {

  if (props.isOnline === true) {
    return (
        <div className={css.item}>
          <img className={css.avatar} src={props.avatar} alt="Avatar" width="48" />
          <p className={css.name}>{props.name}</p>
          <p className={css.isOnline}>Online</p>
        </div>
      );
  } else {
    return (
        <div className={css.item}>
          <img className={css.avatar} src={props.avatar} alt="Avatar" width="48" />
          <p className={css.name}>{props.name}</p>
          <p className={css.isOffline}>Offline</p>
        </div>
      );
  }

  
};
