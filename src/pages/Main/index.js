import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Main, Container, ProductList } from './styles';
import { colors } from '../../styles';
import Nav from '../../components/NavBar';
import CategoryList from '../../components/CategoryList';
import { Types as CartTypes } from '../../store/ducks/Cart';
// import { formatPrice } from '../../util/format';

export default function Home() {
    // eslint-disable-next-line
    const dispatch = useDispatch();

    const [products, setProducts] = useState();
    const productsData = useSelector(state => state.Product.data);

    const amount = useSelector(state =>
        state.Cart.reduce((sumAmount, item) => {
            sumAmount[item.id] = item.amount;
            return sumAmount;
        }, {})
    );

    useEffect(() => {
        setProducts(productsData.produtos);
    }, [productsData]);

    function handleAddCart(item) {
        dispatch({
            type: CartTypes.ADD_CART,
            item,
        });
    }
    return (
        <>
            <Nav />
            <Main>
                <CategoryList />
                <Container>
                    <ProductList>
                        {products &&
                            products.map(item => (
                                <li key={String(item.id)}>
                                    <img
                                        src={`https://s3.amazonaws.com/eletronic-store/produtos/p${item.id}.jpg`}
                                        alt={item.nome}
                                    />
                                    <strong>{item.nome}</strong>
                                    <span>
                                        {Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(item.preco)}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            handleAddCart(item);
                                        }}
                                    >
                                        <div>
                                            <MdAddShoppingCart
                                                size={16}
                                                color={colors.white}
                                            />
                                            {amount[item.id] || 0}
                                        </div>
                                        <span>ADICIONAR AO CARRINHO</span>
                                    </button>
                                </li>
                            ))}
                    </ProductList>
                </Container>
            </Main>
        </>
    );
}
