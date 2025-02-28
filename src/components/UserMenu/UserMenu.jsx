import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <FaUser className={styles.icon} />
        <p className={styles.username}>Welcome, {user.name}</p>
      </div>
      <button 
        type="button" 
        className={styles.button}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;