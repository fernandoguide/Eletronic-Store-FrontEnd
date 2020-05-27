import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';

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
    > div {
        span {
            font-size: 10px;
            position: absolute;
            top: 7px;
            right: 25px;
            width: 21px;
            padding: 4px 0;
            justify-content: center;
            text-align: center;
            border-radius: 6px;
            background: ${colors.primary};
            color: ${colors.white};
        }
    }
`;
