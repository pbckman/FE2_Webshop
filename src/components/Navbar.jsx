import React, {useState} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 8vh;
  @media(max-width: 1000px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const SiteTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 30px;
  padding-left: 20px;
  padding-top: 20px;

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: black;

    & span {
      color: #007BECFF;
    }
    @media(max-width: 1000px) {
      padding: 0;
    }
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 1000px) {
    display: ${({ shownavlinks }) => (shownavlinks ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 8vh;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
    padding-bottom: 30px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 60px;
  margin: 0;
  padding-top: 20px;
  @media(max-width: 1000px) {
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

const CenteredNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* margin-left: auto; */
  flex: 1;                 /* margin-right: auto; */
  padding-right: 250px;
  @media(max-width: 1000px) {
    padding: 0;
    text-align: center;
  }
`;

const NavItem = styled.li`
  font-size: 15px;
  font-weight: 400;
  color: white;
  a{
    text-decoration: none;
  }
  a:visited { text-decoration: none; color:black; }
  a:hover { text-decoration: none; color: #007bec; }
  a:focus { text-decoration: none; color: #007bec; }
  a:hover, a:active { text-decoration: none; color:#007bec }
  @media(max-width: 1000px) {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 15px;
    padding: 10px;
  }
`;

const NavSvgLink = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 50px 0 0;
  text-decoration: none;

  &:hover {
    color: black; /* Change color on hover */
  }
  @media(max-width: 1000px) {
    padding-left: 90px;
  }
  
`;

const UnderNavbar = styled.div` 
  background-color: #007bec;
  height: 40px;
  @media(max-width: 1000px) {
    display: flex;
    margin-top: 20px;
  }
`;

const UnderNavBarText = styled.div`
  color: white;
  font-weight: 400;
  font-size: 12px;
  gap: 100px;
  display: flex;
  align-items: center;
  justify-content: center; /* margin-left: auto; */
  flex: 1;                 /* margin-right: auto; */
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: black;
  font-size: 28px;
  cursor: pointer;
  @media(max-width: 1000px){
    display: block;
  }
`;

const Navbar = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    }

    const hideNavLinks = () => {
        setShowNavLinks(false)
    }

    return (
        <>
        <NavWrapper>
            <SiteTitle>
                <NavLink to="/">Alpine<span>Store</span></NavLink>
            </SiteTitle>
            <StyledFontAwesomeIcon icon={faBars} onClick={toggleNavLinks} />
            <CenteredNav>
                <NavLinkWrapper shownavlinks={showNavLinks}>
                    <NavList>
                <NavItem>
                    <NavLink to="/" onClick={hideNavLinks}>Hem</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/skis" onClick={hideNavLinks}>Skidor</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/snowboards" onClick={hideNavLinks}>Snowboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/accessories" onClick={hideNavLinks}>Tillbehör</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about" onClick={hideNavLinks}>Om</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" onClick={hideNavLinks}>Kontakt</NavLink>
                </NavItem>
            </NavList>
                </NavLinkWrapper>
            </CenteredNav>
            <NavSvgLink to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </NavSvgLink>
        </NavWrapper>
        <UnderNavbar>
            <UnderNavBarText>
                <p>Fri frakt på ordrar över 1000kr</p>
                <p>Vi levererar samma dag*</p>
                <p>30 dagars öppet köp</p>
            </UnderNavBarText>
        </UnderNavbar>
        </>
    );
};

export default Navbar;