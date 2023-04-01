import css from './StartPage.module.css';
const { Link } = require('react-router-dom');

const StartPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.head}>Hello!</h1>
      <p className={css.text}>
        You are in the contact book web application. In order to use the
        functionality of the application, log in to your account or create a new
        account. Sincerely, Application Developer{' '}
        <a href="https://github.com/Dimar95">Dmytro Kornilov</a>
      </p>
      <div className={css.containerLink}>
        <Link to={'/login'} className={css.link}>
          Login
        </Link>
        <Link to={'/logout'} className={css.link}>
          Create user
        </Link>
      </div>
    </div>
  );
};
export default StartPage;
