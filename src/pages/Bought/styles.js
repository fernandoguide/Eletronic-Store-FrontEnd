import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../styles';
import ButtomCustom from '../../components/ButtonCustom';

export const Title = styled.h1`
    color: ${colors.grayMedium};
    text-transform: uppercase;
    font-weight: bold;
`;
export const Container = styled.div`
    margin: 100px 150px;
    padding: 30px;
    background-color: ${colors.white};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    text-align: center;
    div {
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        /* background-color: ${colors.white}; */
        padding: 40px 80px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        max-width: 700px;
        min-height: 400px;
    }
`;
export const ButtonBought = styled(ButtomCustom)`
    background-color: ${colors.primary};
    max-width: 400px;
    &:hover {
        background-color: ${darken(0.05, colors.primary)};
    }
    &:active {
        background-color: ${darken(0.05, colors.primary)};
    }
`;
