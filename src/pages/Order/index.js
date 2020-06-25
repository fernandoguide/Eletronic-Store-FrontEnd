import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'emotion';
import { Checkbox } from 'reakit/Checkbox';
import Nav from '../../components/NavBar';
import { Container, ProductTable, Total, Endress } from './styles';
import { colors } from '../../styles';
import { Types as BuyTypes } from '../../store/ducks/Buy';
import { formatPrice } from '../../util/format';
import { Types as ProfileTypes } from '../../store/ducks/Profile';

// eslint-disable-next-line
export default function Order({ history }) {
    const dispatch = useDispatch();
    const [checkedBoleto, setCheckedBoleto] = useState(true);
    // const [checkedCartao, setCheckedCartao] = useState(false);
    // eslint-disable-next-line
    const [userAcount, setUserAcount] = useState();

    const toggleBoleto = () => setCheckedBoleto(!checkedBoleto);
    // eslint-disable-next-line
    // const toggleCartao = () => setCheckedCartao(!checkedCartao);

    const productsData = useSelector(state => state.Cart);

    const ProfileData = useSelector(state => state.Profile);

    useEffect(() => {
        dispatch({
            type: ProfileTypes.GET_PROFILE,
        });
        async function getDataUser() {
            const du = await localStorage.getItem('dataUser');
            const dataUser = JSON.parse(du);
            setUserAcount(dataUser);
        }
        getDataUser();
        // eslint-disable-next-line
    }, []);

    const labelStyle = css`
        display: flex;
        align-items: center;
    `;
    const tdMax = css`
        max-width: 300px;
    `;
    const tdPadding = css`
        padding: 0;
        margin: 0;
    `;
    const divFormaPagamento = css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 70px 30px;
        margin: 0;
        height: 300px;
        h3 {
            text-transform: uppercase;
            color: #999;
            text-align: left;
            padding: 15px 0;
        }
    `;
    const checkboxStyle = css`
        transition: all 0.4s;
        appearance: none;
        border: 2px solid ${colors.primary};
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        &:after {
            content: '✔';
            display: none;
            color: white;
            font-size: 100%;
        }
        &:checked {
            background-color: ${colors.primary};
            border: 2px solid ${colors.primary};
            &:after {
                display: block;
            }
        }
    `;

    const total = useSelector(state =>
        formatPrice(
            state.Cart.reduce((totalSum, item) => {
                return totalSum + item.preco * item.amount;
            }, 0)
        )
    );
    const du = localStorage.getItem('dataUser');
    const dataUser = JSON.parse(du);

    const pedido = {
        cliente: {
            id: dataUser.id,
        },
        enderecoDeEntrega: {
            id: dataUser.enderecos[0].id,
        },

        pagamento: {
            '@type': 'pagamentoComBoleto',
        },
        itens: productsData.map(item => ({
            quantidade: item.amount,
            produto: {
                id: item.id,
            },
        })),
    };

    async function handleBuy() {
        // async function handleBuy(event) {
        // event.preventDefault();
        history.push('/Bought');

        await dispatch({
            type: BuyTypes.SET_BUY,
            payload: {
                pedido,
            },
        });
    }
    return (
        <>
            <Nav />
            {/* <Cart> */}
            <Container>
                <ProductTable>
                    <thead>
                        <th>PRODUTO</th>
                        <th>FORMA DE PAGAMENTO</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={tdMax}>
                                <section>
                                    {productsData.map(item => (
                                        <td key={String(item.id)}>
                                            <img
                                                src={require(`../../assets/todosProdutos/p${item.id}.jpg`)}
                                                // src={`https://s3.amazonaws.com/eletronic-store/produtos/p${item.id}.jpg`}
                                                alt={item.nome}
                                            />
                                            <div>
                                                <strong>{item.nome}</strong>
                                                <span>
                                                    {Intl.NumberFormat(
                                                        'pt-BR',
                                                        {
                                                            style: 'currency',
                                                            currency: 'BRL',
                                                        }
                                                    ).format(item.preco)}{' '}
                                                    x{item.amount}
                                                </span>
                                            </div>
                                        </td>
                                    ))}
                                </section>
                            </td>
                            <td className={tdPadding}>
                                <div className={divFormaPagamento}>
                                    {/* <div> */}
                                    <label className={labelStyle}>
                                        <Checkbox
                                            checked={checkedBoleto}
                                            onChange={toggleBoleto}
                                            className={checkboxStyle}
                                        />
                                        Boleto
                                    </label>
                                    <div>
                                        <h3>Endereço</h3>
                                        <Endress>
                                            {ProfileData &&
                                            ProfileData.loading ? (
                                                <></>
                                            ) : (
                                                ProfileData.data.enderecos.map(
                                                    item => (
                                                        <li
                                                            key={String(
                                                                item.id
                                                            )}
                                                        >
                                                            <span>
                                                                {item.bairro},{' '}
                                                            </span>
                                                            <span>
                                                                {
                                                                    item.logradouro
                                                                }
                                                                ,{' '}
                                                            </span>
                                                            <span>
                                                                {item.numero}
                                                            </span>
                                                        </li>
                                                    )
                                                )
                                            )}
                                        </Endress>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </ProductTable>
                <footer>
                    <Total>
                        <span>TOTAL</span>
                        <strong>{total}</strong>
                    </Total>
                    <button type="button" onClick={() => handleBuy()}>
                        Comprar
                    </button>
                </footer>
            </Container>
            {/* </Cart> */}
        </>
    );
}
