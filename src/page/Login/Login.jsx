import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { loginUser } from 'redux/operations/operations';
import { errorUserRequestSelector } from 'redux/selector/selector';

const Login = () => {
  const dispatch = useDispatch();
  const userError = useSelector(errorUserRequestSelector);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('🚀 ~ e:', e.currentTarget.email.value);
    console.log('🚀 ~ e:', e.currentTarget.password.value);
    dispatch(
      loginUser({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    );
  };

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
      {userError && (
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
          theme="light"
        />
      )}
    </>
  );
};
export default Login;
