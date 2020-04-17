import styled from 'styled-components';
import InputCustom from '../InputCustom';
import { colors } from '../../styles';

export const InputWithoutBorder = styled(InputCustom)`
    color: ${colors.white};
    font-size: 14px;
    padding-left: 50px;
`;

export const Container = styled.div`
    height: 55px;
    display: flex;
    flex-direction: row;
    border-width: 2px;
    border-style: solid;
    border-color: ${colors.grayMedium};
    background-color: ${colors.grayDark};
    border-radius: 7px;
    margin-top: 10px;
    /* padding: 15px 21px; */
    align-items: center;
    margin-bottom: 10px;
    transition: all 0.4s;
    > i {
        position: absolute;
        padding-left: 15px;
        justify-content: center;
    }

    &:hover {
        border-color: ${colors.primary};
    }

    &:focus-within {
        border-color: ${colors.primary};
        transition: all 0.7s;
    }
`;
