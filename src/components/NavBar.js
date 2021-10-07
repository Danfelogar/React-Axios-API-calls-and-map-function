import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar sticky='top' bg='primary' variant= 'dark'>
            <Container>
            <Navbar.Brand href='#Home'>
                Contact Form
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
