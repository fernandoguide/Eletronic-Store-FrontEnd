import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { colors } from '../../styles';
import Nav from '../../components/NavBar';
import { Cart, Container, ProductTable, Total } from './styles';
import { Types as CartTypes } from '../../store/ducks/Cart';

import image from '../../assets/pubg.jpg';

export default function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const productsData = useSelector(state => state.Cart);

    useEffect(() => {
        setProducts(productsData);
    }, [productsData]);
    return (
        <>
            <Nav />
            <Cart>
                <Container>
                    <ProductTable>
                        <thead>
                            <th />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th />
                        </thead>
                        <tbody>
                            {products &&
                                products.map(item => (
                                    <tr key={String(item.id)}>
                                        <td>
                                            {/* <img src={image} alt="imagem" /> */}
                                        </td>
                                        <td>
                                            <strong>{item.nome}</strong>
                                            <span>
                                                {Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                }).format(item.preco)}
                                            </span>
                                        </td>
                                        <td>
                                            <div>
                                                <button type="button">
                                                    <MdRemoveCircleOutline
                                                        size={20}
                                                        color={colors.primary}
                                                    />
                                                </button>
                                                <input
                                                    type="number"
                                                    readOnly
                                                    value={2}
                                                />
                                                <button type="button">
                                                    <MdAddCircleOutline
                                                        size={20}
                                                        color={colors.primary}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>R$258,80</strong>
                                        </td>
                                        <td>
                                            <button type="button">
                                                <MdDelete
                                                    size={20}
                                                    color={colors.primary}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            {/* <tr>
                                <td>
                                    <img src={image} alt="imagem" />
                                </td>
                                <td>
                                    <strong>PUBG</strong>
                                    <span>R$129.90</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button">
                                            <MdRemoveCircleOutline
                                                size={20}
                                                color={colors.primary}
                                            />
                                        </button>
                                        <input
                                            type="number"
                                            readOnly
                                            value={2}
                                        />
                                        <button type="button">
                                            <MdAddCircleOutline
                                                size={20}
                                                color={colors.primary}
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>R$258,80</strong>
                                </td>
                                <td>
                                    <button type="button">
                                        <MdDelete
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </button>
                                </td>
                            </tr> */}
                        </tbody>
                    </ProductTable>
                    <footer>
                        <button type="button">Finalizar pedido</button>
                        <Total>
                            <span>TOTAL</span>
                            <strong>R$1920,28</strong>
                        </Total>
                    </footer>
                </Container>
            </Cart>
        </>
    );
}
