import { Link } from 'react-router-dom';

import styles from '../styles/home.module.css';
import { useAuth } from '../hooks';

const FriendsList = () => {
  const auth = useAuth();
  const { friends = [] } = auth.user;

  return (
    <div className={styles.friendsList}>
      <div className={styles.header}>Friends</div>

      {friends && friends.length === 0 && (
        <div className={styles.noFriends}>NO friends found!</div>
      )}

      {friends &&
        friends.map((friend) => (
          <div key={`friend-${friend._id}`}>
            <Link className={styles.friendsItem} to={`/user/${friend._id}`}>
              <div className={styles.friendsImg}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2018_IMG_8253_Helsinki%2C_Finland_%2840249531641%29.jpg/1200px-2018_IMG_8253_Helsinki%2C_Finland_%2840249531641%29.jpg"
                  alt=""
                />
              </div>
              <div className={styles.friendsName}>{friend.to_user.email}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default FriendsList;
