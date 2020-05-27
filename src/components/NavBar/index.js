import React from 'react';
import { Nav } from './styles';
import Logo from '../Logo';
import ButtonCart from '../ButtonCart';

const NavBar = () => {
    return (
        <Nav>
            <Logo />
            <ButtonCart />
        </Nav>
    );
};

export default NavBar;
