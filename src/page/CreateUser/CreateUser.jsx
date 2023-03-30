const LogOut = () => {
  return (
    <form>
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
