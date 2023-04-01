import { registerUserApi } from 'redux/contactsApi/contactsApi';
import css from './CreateUser.module.css';
const LogOut = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('🚀 ~ e:', e.currentTarget.user.value);
    console.log('🚀 ~ e:', e.currentTarget.email.value);
    console.log('🚀 ~ e:', e.currentTarget.password.value);
    registerUserApi({
      name: e.currentTarget.user.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="user" className={css.label}>
          {'User Name'}

          <input className={css.input} type="text" name="user" />
        </label>
        <label htmlFor="email" className={css.label}>
          {'Email'}

          <input className={css.input} type="email" name="email" />
        </label>
        <label htmlFor="password" className={css.label}>
          {'Password'}

          <input className={css.input} type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>
          Create User
        </button>
      </form>
    </div>
  );
};
export default LogOut;
