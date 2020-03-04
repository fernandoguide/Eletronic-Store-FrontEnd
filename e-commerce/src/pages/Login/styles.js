import styled from 'styled-components';
import background from '../../assets/images/background.svg';
import ButtomCustom from '../../components/ButtonCustom';
import { colors } from '../../styles';

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #191920 url(${background}) no-repeat center top;
`;
export const ContainerForm = styled.div`
    display: flex-start;
    flex-direction: column;
    width: 40%;
    padding: 0 60px;
    justify-content: center;
    align-items: center;
`;
export const Form = styled.div`
    width: 100%;
`;

export const ButtonLogin = styled(ButtomCustom)`
    background-color: ${colors.primary};
    &:hover {
        background-color: ${colors.primaryDark};
    }
    &:focus-within {
        background-color: ${colors.primaryDark};
    }
`;

export const LinkForgot = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    align-self: flex-start;
    transition: opacity 0.2s ease 0s;
    color: ${colors.primary};
    cursor: pointer;
`;

export const DivTabs = styled.div`
    width: 100%;
    border-bottom: solid 2px ${colors.grayDark};
    margin-bottom: 25px;
`;

export const ButtonTabs = styled.button`
    border-style: none;
    background-color: ${colors.grayFullDark};
    padding: 15px 20px;
    color: ${colors.white};
    &:focus-within {
        color: ${colors.primary};
    }
`;
