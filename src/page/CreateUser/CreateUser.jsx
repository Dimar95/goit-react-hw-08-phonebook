import css from './CreateUser.module.css';
import { registerUser } from 'redux/operations/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userTokenSelector } from 'redux/selector/selector';
const LogOut = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(userTokenSelector);
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      registerUser({
        name: e.currentTarget.user.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    ).then(() => {
      e.target.user.value = '';
      e.target.email.value = '';
      e.target.password.value = '';
      <Navigate to="/" replace={true} />;
    });
  };

  return userToken !== '' ? (
    <Navigate to="/" replace={true} />
  ) : (
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
