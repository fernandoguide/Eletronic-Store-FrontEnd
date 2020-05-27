// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Cart, ContentList } from './styles';
import avatar from '../../assets/images/defaultAvatar.png';
import ToolTip from '../Tooltip';
import ContentToolTipProfile from '../ContentTootipProfile';

const ButtonCart = () => {
    const cartSize = useSelector(state => state.Cart.length);
    // const [products, setProducts] = useState();
    // useEffect(() => {
    //     setProducts(cartData);
    // }, [cartData]);
    return (
        // <Container>
        //     <ToolTip component={<ContentToolTipProfile />}>
        //         <ContentList>
        //             <img src={avatar} alt="" />
        //             <span>João</span>
        //         </ContentList>
        //     </ToolTip>
        <Cart to="/cart">
            <div>
                <span>{cartSize}</span>
                <MdShoppingCart size={35} color="#FFF" />
            </div>
        </Cart>
        // </Container>
    );
};

export default ButtonCart;
