import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../styles';

export const Main = styled.div`
    max-height: 100vh;
`;
export const Title = styled.h1`
    color: ${colors.grayLight};
    margin-left: 25px;
`;

export const Container = styled.div`
    height: 100%;
    margin-left: 300px;
    padding: 120px 30px;
`;

export const ProductList = styled.ul`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: ${colors.white};
        border-radius: 4px;
        padding: 20px;
        transition: all 0.2s;

        img {
            align-self: center;
            max-width: 230px;
        }

        > strong {
            font-size: 16px;
            line-height: 25px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 22px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: ${colors.primary};
            color: ${colors.white};
            border: 0;
            border-radius: 5px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, colors.primary)};
            }

            div {
                display: flex;
                align-items: center;
                padding: 15px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
        &:hover {
            transform: translateY(-10px);
            box-shadow: 0px 0px 25px 5px black;
        }
    }
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
