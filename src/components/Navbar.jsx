import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 8vh;
`;

const SiteTitle = styled.a`
  font-family: "Montserrat ExtraBold", sans-serif;
  font-size: 30px;
  padding-left: 20px;
  padding-top: 10px;

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: black;

    & span {
      color: #007BECFF;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 60px;
  margin: 0;
  padding-top: 20px;
`;

const CenteredNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* margin-left: auto; */
  flex: 1;                 /* margin-right: auto; */
  padding-right: 250px;
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
`;

const NavSvgLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 50px 0 0;
  text-decoration: none;

  &:hover {
    color: black; /* Change color on hover */
  }
`;

const UnderNavbar = styled.div`
  background-color: #007bec;
  height: 40px;
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

const Navbar = () => {
    return (
        <>
        <NavWrapper>
            <SiteTitle>
                <Link to="/">Alpine<span>Store</span></Link>
            </SiteTitle>
            <CenteredNav>
            <NavList>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shop">Ski</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shop">Snowboard</Link>
                </NavItem>
                <NavItem>
                    <Link to="/shop">Accessories</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about-us">About Us</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact">Contact</Link>
                </NavItem>
            </NavList>
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