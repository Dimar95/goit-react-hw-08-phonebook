import {
  Head,
  Header,
  Nav,
  LinkStyle,
  LogOutContainer,
  Button,
  Container,
} from './SiteNav.styled';
import { Outlet } from 'react-router-dom';
import { userEmailSelector } from 'redux/selector/selector';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations/operations';
import { userTokenSelector } from 'redux/selector/selector';
import { useEffect } from 'react';
import { loginCurrentUser } from 'redux/operations/operations';
const SiteNav = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(userEmailSelector);

  const userToken = useSelector(userTokenSelector);

  useEffect(() => {
    if (userToken === '') {
      return;
    }
    dispatch(loginCurrentUser(userToken));
  }, [dispatch, userToken]);
  const handleClick = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Head>Phonebook</Head>
            <LinkStyle to={'/'}>{userEmail ? 'Contacts' : 'Home'}</LinkStyle>
            {userEmail === '' && <LinkStyle to={'/login'}>Login</LinkStyle>}
            {userEmail === '' && (
              <LinkStyle to={'/logout'}>Create user</LinkStyle>
            )}
          </Nav>
          {userEmail !== '' && (
            <LogOutContainer>
              <p>{`Welcome ${userEmail}`}</p>
              <Button type="button" onClick={handleClick}>
                Log Out
              </Button>
            </LogOutContainer>
          )}
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
export default SiteNav;
