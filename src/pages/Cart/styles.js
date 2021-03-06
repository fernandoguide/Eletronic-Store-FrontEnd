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
    tbody td {
        max-width: 500px;
        padding: 12px;
        border-bottom: 1px solid #eee;
    }
    img {
        height: 100px;
    }
    strong {
        color: #333;
        display: block;
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
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
