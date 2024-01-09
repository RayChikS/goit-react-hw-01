import { FriendListItem } from "./FriendListItem";
import css from "./FriendListItem.module.css";


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}><FriendListItem {...friend} /></li>
      ))}
    </ul>
  );
};
