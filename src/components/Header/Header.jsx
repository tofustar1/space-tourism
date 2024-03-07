import React from 'react';
import { BasicFlexWrapper, Container } from "../../styles/General";
import {
  HeaderEl,
  Logo,
  LogoImg,
  MainNav,
  MainNavLink,
  MainNavList,
  MainNavListItem,
} from "../../styles/Header";


const Header = () => {
  return (
      <HeaderEl>
        <Container>
          <BasicFlexWrapper>
            <Logo to={'/'}>
              <LogoImg/>
            </Logo>
            <MainNav>
              <MainNavList>
                <MainNavListItem>
                  <MainNavLink to={'/home'}>Home</MainNavLink>
                </MainNavListItem>
                <MainNavListItem>
                  <MainNavLink to={'/destination'}>Destination</MainNavLink>
                </MainNavListItem>
                <MainNavListItem>
                  <MainNavLink to={'/crew'}>Crew</MainNavLink>
                </MainNavListItem>
                <MainNavListItem>
                  <MainNavLink to={'/technology'}>Technology</MainNavLink>
                </MainNavListItem>
              </MainNavList>
            </MainNav>
          </BasicFlexWrapper>
        </Container>
      </HeaderEl>
  );
};

export default Header;