import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/images/logoBranco.svg';

const Logo = () => {
    return (
        <Link to="/">
            <Container>
                <img src={logo} alt="EletronicStore" />
            </Container>
        </Link>
    );
};

export default Logo;
