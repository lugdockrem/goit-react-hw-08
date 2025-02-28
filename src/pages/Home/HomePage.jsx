import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook App</h1>
      <p className={styles.description}>
        Welcome to the Phonebook application! This app allows you to store and manage your contacts.
      </p>
      <p className={styles.description}>
        Please register or log in to start using the application.
      </p>
    </div>
  );
};

export default HomePage;