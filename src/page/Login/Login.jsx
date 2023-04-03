import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from 'redux/operations/operations';
import {
  errorUserRequestSelector,
  // userTokenSelector,
} from 'redux/selector/selector';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const userError = useSelector(errorUserRequestSelector);

  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const handleSubmit = async e => {
    e.preventDefault();
    setState({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
    dispatch(loginUser(state));
    if (userError === null) {
    }
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  useMemo(() => {
    if (userError === null) {
      setState({ email: '', password: '' });
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

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="email">
          {'Email'}
          <input
            onChange={handleChange}
            className={css.input}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <label className={css.label} htmlFor="password">
          {'Password'}
          <input
            onChange={handleChange}
            className={css.input}
            type="password"
            name="password"
            value={password}
          />
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
