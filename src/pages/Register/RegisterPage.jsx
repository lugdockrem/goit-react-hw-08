import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectAuthError } from '../../redux/auth/selectors';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      {error && <div className={styles.error}>{error}</div>}
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;