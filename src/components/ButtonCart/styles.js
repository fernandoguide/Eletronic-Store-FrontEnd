import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import ButtomCustom from '../../components/ButtonCustom';
import { PopoverDisclosure } from 'reakit/Popover';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonLogin = styled(PopoverDisclosure)`
    margin-top: 10px;
    margin-right: 20px;
    width: 90px;
    height: 50px;
    border-radius: 7px;
    border-width: 0px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.4s ease 0s, color 0.3s ease 0s;
    color: ${colors.white};
    background-color: ${colors.primary};
    &:hover {
        background-color: ${colors.primaryDark};
    }
    &:focus-within {
        background-color: ${colors.primaryDark};
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    /* div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #fff;
        }

        span {
            font-size: 12px;
            color: #999;
        }
    } */

    span {
        font-size: 12px;
        position: absolute;
        top: 7px;
        right: 25px;
        width: 21px;
        padding: 3px 0;
        justify-content: center;
        text-align: center;
        border-radius: 6px;
        background: ${colors.primary};
        color: ${colors.white};
    }
`;
