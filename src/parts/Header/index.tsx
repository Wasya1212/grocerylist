import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
    Navbar,
    Form,
    Nav,
    FormControl,
    Button
} from "react-bootstrap";

export interface HeaderProps {

}

export interface HeaderState {

}

export const HeaderComponent = (props: any) => (
    <header className="top-header">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            {props.children}
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    </header>
);

export interface NavigationLink {
    path: string,
    title: string,
    blank?: boolean
}

export interface NavigationProps {
    links: NavigationLink[]
}

export const Navigation = (props: NavigationProps) => (
    <Nav className="mr-auto navbar">
        {
            props.links.map((link: NavigationLink, index: number) => (
                <Nav.Link key={`navbar-link-${index}`} href="#home">
                    <Link to={link.path}>{link.title}</Link>
                </Nav.Link>
            ))
        }
    </Nav>
);

const navbarLinks: NavigationLink[] = [
    { path: '/', title: 'home' },
    { path: '/list', title: 'grocery list' }
];

export class Header extends Component<HeaderProps, HeaderState>{
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <HeaderComponent>
                <Navigation links={navbarLinks}></Navigation>
            </HeaderComponent>
        );
    }
}

export default Header;