import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const SiteTitle = styled.a`
  font-family: "Montserrat ExtraBold", sans-serif;
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
  @media(max-width: 1000px) {
    display: ${({ showNavLinks }) => (showNavLinks ? "flex" : "none")};
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
  font-size: 20px;
  font-weight: 900;
  color: white;
  a{
    text-decoration: none;
  }
  a:visited { text-decoration: none; color:black; }
  a:hover { text-decoration: none; color: #007bec; }
  a:focus { text-decoration: none; color: #007bec; }
  a:hover, a:active { text-decoration: none; color:#007bec }
  @media(max-width: 1000px) {
    font-family: "Montserrat ExtraBold", sans-serif;
    font-weight: lighter;
    font-size: 15px;
    padding: 10px;
  }
`;

const NavSvgLink = styled(Link)`
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

const UnderNavBarText = styled.p`
  color: white;
  font-weight: bold;
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
                <Link to="/">Alpine<span>Store</span></Link>
            </SiteTitle>
            <StyledFontAwesomeIcon icon={faBars} onClick={toggleNavLinks} />
            <CenteredNav>
                <NavLinkWrapper showNavLinks={showNavLinks}>
                    <NavList>
                <NavItem>
                    <Link to="/" onClick={hideNavLinks}>Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shop" onClick={hideNavLinks}>Ski</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shop" onClick={hideNavLinks}>Snowboard</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shop" onClick={hideNavLinks}>Accessories</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about-us" onClick={hideNavLinks}>About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact" onClick={hideNavLinks}>Contact</Link>
                </NavItem>
            </NavList>
                </NavLinkWrapper>
            </CenteredNav>
            <NavSvgLink to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                <p>Free shipping on orders over $499</p>
                <p>Same day delivery</p>
                <p>30-day return policy</p>
            </UnderNavBarText>
        </UnderNavbar>
        </>
    );
};

export default Navbar;