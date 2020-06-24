import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../styles';

// export const Cart = styled.div`
//     width: 100%;
//     height: 100vh;
//     padding: 100px 150px;
// `;
export const Container = styled.div`
    margin: 100px 150px;
    padding: 30px;
    background-color: ${colors.white};
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background-color: ${colors.primary};
            color: ${colors.white};
            border-radius: 4px;
            border-style: none;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.3s;

            &:hover {
                background: ${darken(0.05, colors.primary)};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }
    tbody tr td section td {
        display: flex;
        flex-direction: row;
    }
    tbody tr td section {
        max-height: 300px;
        overflow-y: auto;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 25px;
            strong {
                color: #333;
            }
            span {
                display: block;
                margin-top: 5px;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    /* tbody tr td {
        div {

        }
    } */

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }
    img {
        height: 100px;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;
    span {
        color: #999;
        font-weight: bold;
    }
    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;

export const Endress = styled.ul`
    li {
        top: 0;
        display: flex;
        flex-direction: row;

        span {
            color: ${colors.grayMedium};
            font-weight: bold;
        }
    }
`;
