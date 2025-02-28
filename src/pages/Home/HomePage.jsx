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
      <div className={styles.imageContainer}>
        <img 
          src="https://i.gyazo.com/7b05e24c30de0de56272c5ea6c30772e.png" 
          alt="Phonebook illustration" 
          className={styles.image} 
        />
      </div>
    </div>
  );
};

export default HomePage;