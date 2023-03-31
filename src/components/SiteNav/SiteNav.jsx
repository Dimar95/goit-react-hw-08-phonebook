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
import { userNameSelector } from 'redux/selector/selector';
import { useSelector } from 'react-redux';
const SiteNav = () => {
  const userName = useSelector(userNameSelector);

  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Head>Phonebook</Head>
            <LinkStyle to={'/'}>Home</LinkStyle>
            <LinkStyle to={'/login'}>Login</LinkStyle>
            <LinkStyle to={'/logout'}>Create user</LinkStyle>
          </Nav>
          {userName !== '' && (
            <LogOutContainer>
              <p>{`Welcome ${userName}`}</p>
              <Button type="button">Log Out</Button>
            </LogOutContainer>
          )}
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
export default SiteNav;
