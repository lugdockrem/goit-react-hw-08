import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';
import styles from './LoginPage.module.css';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(login(values));
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {error && <div className={styles.error}>{error}</div>}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.fieldWrapper}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <Field
                type="email"
                name="email"
                className={styles.input}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.fieldWrapper}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <Field
                type="password"
                name="password"
                className={styles.input}
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className={styles.errorMessage} />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;