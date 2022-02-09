import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavBar = () => {
    
  return (
        <NavBarContainer>
          <NavItems>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
          </NavItems>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
position: fixed;
top: 0px;
left: 40%
`;

const NavItem = styled.li`
  display: inline;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const NavItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;