// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, ProductList } from './styles';
import image from '../../assets/pubg.jpg'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line
export default function Home({ history }) {
    // const dispatch = useDispatch();
    //const loginData = useSelector(state => state.Login);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            toast.success('Seja bem-vindo!');
        } else {
            toast.warn('Efetue o login para realizar suas compras');
        }
    }, []);
    // loginData.valid
    //     ? toast.success('Seja bem-vindo!')
    //     : toast.warn('Efetue o login para realizar suas compras');

    return (
        // <ProductList>
        //     {products.map(product => (
        //         <li key={String(product.id)}>
        //             <img src={product.image} alt={product.title} />
        //             <strong>{product.title}</strong>
        //             <span>{product.priceFormatted}</span>

        //             <button type="button">
        //                 <span>ADICIONAR AO CARRINHO</span>
        //             </button>
        //         </li>
        //     ))}
        // </ProductList>
        <Container>
            <ProductList>
                <li>
                    <img src={image} alt="imagem" />
                    <strong>
                        Jogo muito chato e que eu não entendo como conseguem
                        gostar disso
                    </strong>
                    <span>R$50,00</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>

                <li>
                    <img src={image} alt="imagem" />
                    <strong>
                        Jogo muito chato e que eu não entendo como conseguem
                        gostar disso
                    </strong>
                    <span>R$50,00</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>

                <li>
                    <img src={image} alt="imagem" />
                    <strong>
                        Jogo muito chato e que eu não entendo como conseguem
                        gostar disso
                    </strong>
                    <span>R$50,00</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>

                <li>
                    <img src={image} alt="imagem" />
                    <strong>
                        Jogo muito chato e que eu não entendo como conseguem
                        gostar disso
                    </strong>
                    <span>R$50,00</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>

                <li>
                    <img src={image} alt="imagem" />
                    <strong>
                        Jogo muito chato e que eu não entendo como conseguem
                        gostar disso
                    </strong>
                    <span>R$50,00</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            </ProductList>
        </Container>
    );
}
