import css from './CreateUser.module.css';
import { registerUser } from 'redux/operations/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorUserRequestSelector } from 'redux/selector/selector';
const LogOut = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = state;
  const dispatch = useDispatch();
  const userError = useSelector(errorUserRequestSelector);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registerUser(state));
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
      setState({ name: '', email: '', password: '' });
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
        <label htmlFor="name" className={css.label}>
          {'User Name'}

          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className={css.label}>
          {'Email'}

          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className={css.label}>
          {'Password'}

          <input
            className={css.input}
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.button}>
          Create User
        </button>
      </form>
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
export default LogOut;
