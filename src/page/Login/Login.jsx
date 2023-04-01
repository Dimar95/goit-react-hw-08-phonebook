import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from 'redux/operations/operations';
import { errorUserRequestSelector } from 'redux/selector/selector';

const Login = () => {
  const dispatch = useDispatch();
  const userError = useSelector(errorUserRequestSelector);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    );
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          {'Email'}
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          {'Password'}
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
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
    </>
  );
};
export default Login;
