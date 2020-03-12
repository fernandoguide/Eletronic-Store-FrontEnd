import styled from 'styled-components';
import { colors } from '../../styles';

export const ButtonTemplate = styled.button`
    width: 100%;
    height: 50px;
    border-style: none;
    background-color: transparent;
    border-radius: 7px;
    border-width: 0px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.4s ease 0s, color 0.3s ease 0s;
    color: ${colors.white};
    margin: 10px 0px;
    cursor: pointer;
`;
