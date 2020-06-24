// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// import { useHistory } from 'react-router-dom';
// import history from '../../services/history';
import { colors } from '../../styles';
import Nav from '../../components/NavBar';
import { Container, Title, ButtonBought } from './styles';

// eslint-disable-next-line
export default function ShoppingCart({ history }) {
    // useEffect(() => {
    //     var Backlen = history.length;
    //     history.go(-Backlen);
    // }, []);

    function home() {
        history.push('/');
    }
    return (
        <>
            {/* <Nav /> */}

            <Container>
                <div>
                    <Title>Agradecemos por realizar uma compra conosco</Title>
                    <p>
                        Enviamos para seu email o recibo de sua compra. Continue
                        comprando em nossa loja
                    </p>
                    <ButtonBought
                        onClick={() => {
                            home();
                        }}
                    >
                        Continuar comprando
                    </ButtonBought>
                </div>
            </Container>
        </>
    );
}
