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

const SiteNav = () => {
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
          <LogOutContainer>
            <p>Welcome</p>
            <Button type="button">Log Out</Button>
          </LogOutContainer>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
export default SiteNav;
