import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import imgLogo from "../assets/images/shared/logo.svg";

export const HeaderEl = styled.header`
    padding: 24px 0;
`;

export const Logo = styled(Link)``;

export const LogoImg = styled.img.attrs({
  src: `${imgLogo}`,
  alt: 'logo'
})``;

export const MainNav = styled.nav``;

export const MainNavList = styled.ul`
    display: flex;
`;

export const MainNavListItem = styled.li`
    margin-left: 37px;
`;

export const MainNavLink = styled(NavLink)`
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 0.17em;
    font-size: var(--fs-nav-text);
    
    &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }
    
    &.active {
        border-bottom: 3px solid rgba(255, 255, 255, 1);
    }
`;