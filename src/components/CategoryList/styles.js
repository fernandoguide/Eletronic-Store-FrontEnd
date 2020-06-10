import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../../styles';

export const List = styled.ul`
    position: fixed;
    min-width: 300px;
    min-height: 100vh;
    height: 100%;
    background-color: ${colors.grayMedium};
    padding-top: 120px;
    list-style: none;
    box-shadow: 0px 0px 20px 1px black;

    > h1 {
        letter-spacing: 4px;
        color: ${colors.white};
        padding: 0 0 15px 25px;
        font-weight: lighter;
    }
`;
export const ItemList = styled.li`
    transition: background 0.4s ease 0s, color 0.3s ease 0s;
    width: 100%;

    > button {
        width: 100%;
        height: 50px;
        border-style: none;
        background-color: transparent;
        border-radius: 7px;
        border-width: 0px;
        font-weight: 500;
        font-size: 16px;
        color: ${colors.white};
        padding: 5px 15px;

        > div {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            justify-content: left;
            align-items: center;
            transition: all 0.2s;

            > i {
                padding: 0 45px 0 10px;
            }

            > span {
                letter-spacing: 0.5px;
            }
            &:hover {
                transform: translateX(10px);
            }
        }
    }
    &:hover {
        background-color: ${lighten(0.05, colors.grayMedium)};
    }
`;
