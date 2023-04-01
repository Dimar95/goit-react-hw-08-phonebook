import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from 'redux/operations/operations';
import {
  errorUserRequestSelector,
  userTokenSelector,
} from 'redux/selector/selector';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const userError = useSelector(errorUserRequestSelector);
  const userToken = useSelector(userTokenSelector);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    ).then(() => {
      e.target.email.value = '';
      e.target.password.value = '';
      <Navigate to="/" replace={true} />;
    });
  };
  useMemo(() => {
    if (userError === null) {
      return;
    }

    toast.error(userError, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }, [userError]);

  return userToken !== '' ? (
    <Navigate to="/" replace={true} />
  ) : (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="email">
          {'Email'}
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label} htmlFor="password">
          {'Password'}
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Login
        </button>
      </form>{' '}
      {userError !== null && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      )}
    </div>
  );
};
export default Login;
