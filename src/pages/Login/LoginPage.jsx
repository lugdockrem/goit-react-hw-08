import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectAuthError } from '../../redux/auth/selectors';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {error && <div className={styles.error}>{error}</div>}
      <LoginForm />
    </div>
  );
};

export default LoginPage;