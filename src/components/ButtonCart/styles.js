import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PopoverDisclosure } from 'reakit/Popover';
import { lighten } from 'polished';
import { colors } from '../../styles';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonLogin = styled(PopoverDisclosure)`
    margin: 10px 0;
    margin-right: 25px;
    padding: 15px 20px;
    border-radius: 6px;
    border-width: 0px;
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
    color: ${colors.white};
    background-color: ${colors.grayMedium};
    &:hover {
        background-color: ${lighten(0.05, colors.grayMedium)};
    }
    /* &:focus-within {
        background-color: ${colors.primaryDark};
    } */
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;
    margin-right: 10px;
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
        right: 35px;
        width: 21px;
        padding: 3px 0;
        justify-content: center;
        text-align: center;
        border-radius: 6px;
        background: ${colors.primary};
        color: ${colors.white};
    }
`;
