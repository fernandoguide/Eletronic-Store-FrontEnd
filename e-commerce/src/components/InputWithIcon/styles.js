import styled from 'styled-components';
import InputCustom from '../InputCustom';
import { colors } from '../../styles';

export const InputWithoutBorder = styled(InputCustom)`
    border-style: none;
    color: rgb(255, 255, 255);
    margin-left: 10px;
    font-size: 14px;
`;

export const Container = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    border-width: 2px;
    border-style: solid;
    border-color: ${colors.grayDark};
    background-color: ${colors.grayFullDark};
    border-radius: 7px;
    margin-top: 10px;
    padding: 15px 21px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    transition: all 0.4s;
    &:hover {
        border-color: ${colors.primary};
    }
    &:focus-within {
        border-color: ${colors.primary};
        transition: all 0.7s;
    }
`;
