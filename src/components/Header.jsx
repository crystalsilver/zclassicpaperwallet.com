import React, { Component }     from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logoFull from "../logo_full.png";

export default class Header extends Component {

    render() {
        return (
            <Navbar id="header" className="zenHeader" fluid={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logoFull} alt="logo"/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href="https://github.com/johandjoz/zclassicpaperwallet.com" className="nav-item headerLeftOption">SOURCE</NavItem>
                    <NavItem href="http://www.zclassicexplorer.com/" className="nav-item headerLeftOption">EXPLORER</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
