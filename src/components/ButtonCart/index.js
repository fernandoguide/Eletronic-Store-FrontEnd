// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { css } from 'emotion';
import { Button } from 'reakit/Button';
import { Link } from 'react-router-dom';
import {
    usePopoverState,
    Popover,
    PopoverArrow,
    PopoverDisclosure,
} from 'reakit/Popover';
import { Container, Cart, ButtonLogin } from './styles';
// eslint-disable-next-line
import avatar from '../../assets/images/defaultAvatar.png';
// eslint-disable-next-line
import ToolTip from '../Tooltip';
// eslint-disable-next-line
import ContentToolTipProfile from '../ContentTootipProfile';

const ButtonCart = ({ history }) => {
    const cartSize = useSelector(state => state.Cart.length);
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
        transform: translate3d(0, -20px, 0);
        [data-enter] & {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }

        a {
            text-decoration: none;
            padding: 10px;
            color: '#7159c1';
        }
    `;
    const du = localStorage.getItem('dataUser');
    const dataUser = JSON.parse(du);

    return (
        <Container>
            <ButtonLogin {...popover}>
                {dataUser ? dataUser.nome : 'Entrar'}
            </ButtonLogin>
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
                    </Link>
                    <Link to="/Login">
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={popover.hide}
                        >
                            Login
                        </span>
                    </Link>
                </div>
            </Popover>
            <Cart to="/cart">
                {cartSize > 0 ? <span>{cartSize}</span> : <></>}
                <MdShoppingCart size={35} color="#FFF" />
            </Cart>
        </Container>
    );
};

export default ButtonCart;
