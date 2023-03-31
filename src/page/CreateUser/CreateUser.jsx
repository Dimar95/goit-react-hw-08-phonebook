import { registerUserApi } from 'redux/contactsApi/contactsApi';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">
        {'User Name'}

        <input type="text" name="user" />
      </label>
      <label htmlFor="email">
        {'Email'}

        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        {'Password'}

        <input type="password" name="password" />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};
export default LogOut;
