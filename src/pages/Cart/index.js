// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
// import { useHistory } from 'react-router-dom';
// import history from '../../services/history';
import { colors } from '../../styles';
import Nav from '../../components/NavBar';
import { Container, ProductTable, Total } from './styles';
import { Types as CartTypes } from '../../store/ducks/Cart';
import { formatPrice } from '../../util/format';

// eslint-disable-next-line
export default function ShoppingCart({ history }) {
    const dispatch = useDispatch();
    // const history = useHistory;
    // const [products, setProducts] = useState([]);
    const productsData = useSelector(state =>
        state.Cart.map(item => ({
            ...item,
            subtotal: formatPrice(item.preco * item.amount),
        }))
    );
    const total = useSelector(state =>
        formatPrice(
            state.Cart.reduce((totalSum, item) => {
                return totalSum + item.preco * item.amount;
            }, 0)
        )
    );
    const du = localStorage.getItem('dataUser');
    const dataUser = JSON.parse(du);
    function checkOut() {
        if (!dataUser) {
            toast.warn('Necessário estar logado para realizar uma compra');
        } else {
            // eslint-disable-next-line
            history.push('/Order');
        }
    }

    function increment(item) {
        dispatch({
            type: CartTypes.UPDATE_AMOUNT,
            id: item.id,
            amount: item.amount + 1,
        });
    }
    function decrement(item) {
        dispatch({
            type: CartTypes.UPDATE_AMOUNT,
            id: item.id,
            amount: item.amount - 1,
        });
    }
    return (
        <>
            <Nav />
            {/* <Cart> */}
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
                        {productsData.map(item => (
                            <tr key={String(item.id)}>
                                <td>
                                    <img
                                        src={require(`../../assets/todosProdutos/p${item.id}.jpg`)}
                                        // src={`https://s3.amazonaws.com/eletronic-store/produtos/p${item.id}.jpg`}
                                        alt={item.nome}
                                    />
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
                                        <button
                                            type="button"
                                            onClick={() => {
                                                decrement(item);
                                            }}
                                        >
                                            <MdRemoveCircleOutline
                                                size={20}
                                                color={colors.primary}
                                            />
                                        </button>
                                        <input
                                            type="number"
                                            readOnly
                                            value={item.amount}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                increment(item);
                                            }}
                                        >
                                            <MdAddCircleOutline
                                                size={20}
                                                color={colors.primary}
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{item.subtotal}</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            dispatch({
                                                type:
                                                    CartTypes.REMOVE_FROM_CART,
                                                id: item.id,
                                            })
                                        }
                                    >
                                        <MdDelete
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProductTable>
                <footer>
                    <button
                        type="button"
                        onClick={() => {
                            checkOut();
                        }}
                    >
                        Finalizar pedido
                    </button>
                    <Total>
                        <span>TOTAL</span>
                        <strong>{total}</strong>
                    </Total>
                </footer>
            </Container>
            {/* </Cart> */}
        </>
    );
}
