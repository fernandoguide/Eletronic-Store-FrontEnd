// eslint-disable-next-line
import React, { useState, useEffect, useMemo } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import MaterialIcon from 'material-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'emotion';
// eslint-disable-next-line
import { Button } from 'reakit/Button';
import { Link } from 'react-router-dom';

// import {
//     usePopoverState,
//     Popover,
//     PopoverArrow,
//     PopoverDisclosure,
// } from 'reakit/Popover';
import { usePopoverState, Popover } from 'reakit/Popover';
import { colors } from '../../styles';
// eslint-disable-next-line
import history from '../../services/history';
import { Container, Cart, ButtonLogin } from './styles';
import { Types as ProfileTypes } from '../../store/ducks/Profile';
import { Types as CartTypes } from '../../store/ducks/Cart';
// eslint-disable-next-line
import avatar from '../../assets/images/defaultAvatar.png';
// eslint-disable-next-line
import ToolTip from '../Tooltip';
// eslint-disable-next-line
import ContentToolTipProfile from '../ContentTootipProfile';

const ButtonCart = () => {
    const dispatch = useDispatch();
    function shortName(nome) {
        const firstName = nome;
        const tmp = firstName.split(' ');
        return tmp[0];
    }
    const [name, setName] = useState('');
    const cartSize = useSelector(state => state.Cart.length);
    const ProfileData = useSelector(state => state.Profile);
    const popover = usePopoverState({ animated: 200 });
    const styles = css`
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 16px;
        border: 1px solid rgba(33, 33, 33, 0.25);
        border-radius: 4px;
        transition: 200ms ease-in-out, transform 200ms ease-in-out;
        opacity: 0;
        transform-origin: top center;
        background-color: ${colors.grayMedium};
        transform: translate3d(0, -20px, 0);
        [data-enter] & {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }

        a {
            text-decoration: none;
            padding: 5px;
            color: ${colors.grayLight};
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            span {
                padding: 10px;
            }
            i {
                padding: 5px;
            }
        }
    `;
    useEffect(() => {
        dispatch({
            type: ProfileTypes.GET_PROFILE,
        });
    }, []);
    // const du = localStorage.getItem('dataUser');
    // const dataUser = JSON.parse(du);

    // eslint-disable-next-line
    // useEffect(() => {
    //     function shortName() {
    //         if (ProfileData.nome !== null) {
    //             // const { nome } = dataUser;
    //             const firstName = dataUser.nome;
    //             const tmp = firstName.split(' ');
    //             setName(tmp[0]);
    //         } else {
    //             setName('Entrar');
    //         }
    //     }
    //     shortName();
    // }, [ProfileData]);

    function handleLogout() {
        localStorage.clear();
        dispatch({
            type: ProfileTypes.GET_PROFILE,
        });
        dispatch({
            type: CartTypes.CLEAR_CART,
        });
    }

    return (
        <Container>
            {ProfileData.valid ? (
                <ButtonLogin {...popover}>
                    {shortName(ProfileData.data.nome)}
                </ButtonLogin>
            ) : (
                <ButtonLogin {...popover}>Entrar</ButtonLogin>
            )}

            {ProfileData.valid ? (
                <Popover
                    {...popover}
                    aria-label="Welcome"
                    style={{ border: 0, background: 'none', padding: 0 }}
                >
                    <div className={styles}>
                        <Link to="/Profile">
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={popover.hide}
                            >
                                Perfil
                            </span>
                            <MaterialIcon
                                icon="person"
                                size={23}
                                color={colors.grayLight}
                            />
                        </Link>
                        <Link to="/">
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                            <MaterialIcon
                                icon="exit_to_app"
                                size={23}
                                color={colors.grayLight}
                            />
                        </Link>
                    </div>
                </Popover>
            ) : (
                <Popover
                    {...popover}
                    aria-label="Welcome"
                    style={{ border: 0, background: 'none', padding: 0 }}
                >
                    <div className={styles}>
                        <Link to="/Login">
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={popover.hide}
                            >
                                Login
                            </span>
                            <MaterialIcon
                                icon="login"
                                size={23}
                                color={colors.grayLight}
                            />
                        </Link>
                    </div>
                </Popover>
            )}

            <Cart to="/cart">
                {cartSize > 0 ? <span>{cartSize}</span> : <></>}
                <MdShoppingCart size={35} color="#FFF" />
            </Cart>
        </Container>
    );
};

export default ButtonCart;
