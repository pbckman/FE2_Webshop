import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  width: 100%;
  height: 20%;
  margin: 0;
  left:0;
  bottom:0;
  right:0;
  margin-top: 40px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-top: 15px;
  opacity: 0.2;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 60px;
`;

const LinkList = styled.ul`
  list-style: none;
  h3 {
    margin: 0;
    padding-bottom: 6px;
  }
`;

const LinkListItem = styled.li`
  opacity: 0.6;
  a{
    text-decoration: none;
  }
  a:visited { text-decoration: none; color:#FFF; }
  a:hover { text-decoration: none; color: #007bec; }
  a:focus { text-decoration: none; color: #007bec; }
  a:hover, a:active { text-decoration: none; color:#007bec }
`;

const LinkText = styled.p`
  margin: 0;
`;

function Footer(props) {
    return (
        <>
            <FooterWrapper>
                <LinkWrapper>
                    <LinkList>
                        <h3>Shoppa</h3>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/skis">Skidor</NavLink>
                            </LinkText>
                        </LinkListItem>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/snowboards">Snowboards</NavLink>
                            </LinkText>
                        </LinkListItem>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/accessories">Tillbehör</NavLink>
                            </LinkText>
                        </LinkListItem>
                    </LinkList>
                    <LinkList>
                        <h3>Villkor</h3>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/termsofpurchase">Leverans</NavLink>
                            </LinkText>
                        </LinkListItem>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/termsofpurchase">Köpvillkor</NavLink>
                            </LinkText>
                        </LinkListItem>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/termsofpurchase">Byten/Returer</NavLink>
                            </LinkText>
                        </LinkListItem>
                    </LinkList>
                    <LinkList>
                        <h3>Information</h3>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/about">Om butiken</NavLink>
                            </LinkText>
                        </LinkListItem>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/contact">Kontakt</NavLink>
                            </LinkText>
                        </LinkListItem>
                        <LinkListItem>
                            <LinkText>
                                <NavLink to="/skis">Hitta oss</NavLink>
                            </LinkText>
                        </LinkListItem>
                    </LinkList>
                </LinkWrapper>
                <Logo>AlpineStore 2024©</Logo>
            </FooterWrapper>
        </>
    );
}

export default Footer;