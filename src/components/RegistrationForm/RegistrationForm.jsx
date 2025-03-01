import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(register(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>

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
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;