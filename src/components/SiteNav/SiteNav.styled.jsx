import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Head = styled.h1`
  font-size: 36px;
  margin: 0;
`;
export const Header = styled.header`
  background-color: #2e2caa;
  display: flex;
  margin: 0;
  padding: 24px;
  color: #fff;
  align-items: center;
`;
export const Nav = styled.nav`
  background-color: #2e2caa;
  display: flex;
  margin: 0;
  padding: 0;
  color: #fff;
  align-items: center;
  margin: 0;
`;

export const LinkStyle = styled(NavLink)`
  margin-left: 30px;
  padding: 20px;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 4px;
  &.active {
    /* color: #b92121; */
  }
`;
export const LogOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.button`
  margin-left: 24px;
  padding: 12px;
  font-size: 16px;
  width: 180px;
  border-radius: 30px;
  color: #2e2caa;
  background-color: #fff;
  border: transparent;

  cursor: pointer;
`;
export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
