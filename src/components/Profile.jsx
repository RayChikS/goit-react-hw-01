import  css from "./Profile.module.css";

export const Profile = props => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img
          src={props.image}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{props.name}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{props.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{props.stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
