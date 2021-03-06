import styled from 'styled-components';
// import background from '../../assets/images/background.svg';
import ButtomCustom from '../../components/ButtonCustom';
import { colors } from '../../styles';

export const Title = styled.h1`
    color: ${colors.grayLight};
`;
export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ContainerForm = styled.div`
    display: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
`;
export const Form = styled.div`
    width: 100%;
    ${Title} {
        text-align: center;
        margin-bottom: 30px;
    }
`;

export const ButtonForgot = styled(ButtomCustom)`
    background-color: ${colors.primary};
    &:hover {
        background-color: ${colors.primaryDark};
    }
    &:focus-within {
        background-color: ${colors.primaryDark};
    }
`;

export const Link = styled.a`
    padding: 10px 0px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    align-self: flex-start;
    transition: all 0.3s;
    color: ${colors.primaryDark};
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        color: ${colors.primary};
    }
`;

export const DivLink = styled.div`
    width: 100%;
    margin: 25px 0px;
`;

export const ButtonTabs = styled.button`
    border-style: none;
    background-color: ${colors.grayDark};
    padding: 15px 20px;
    color: ${colors.white};
    &:focus-within {
        color: ${colors.primary};
    }
`;

export const Text = styled.span`
    margin: 0 auto;
    color: ${colors.grayLight};
`;

export const CenterDiv = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
`;
