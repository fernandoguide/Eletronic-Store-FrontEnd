import styled from 'styled-components';
// import background from '../../assets/images/background.svg';
import { darken } from 'polished';
import { colors } from '../../styles';
import ButtomCustom from '../../components/ButtonCustom';

export const Title = styled.h1`
    color: ${colors.grayLight};
`;
export const Container = styled.div`
    margin: 0;
    padding: 80px 0 0 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    align-self: flex-start;
    transition: all 0.3s;
    color: ${colors.primary};
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        color: ${colors.primaryDark};
    }
`;
export const Text = styled.span`
    margin: 0 auto;
    color: ${colors.grayLight};
`;
export const ContainerForm = styled.div`
    display: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    ${Title} {
        text-align: center;
        margin-bottom: 30px;
    }
`;
export const Form = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    min-height: 40px;
    justify-content: center;
    align-items: center;
`;

export const ButtonLogin = styled(ButtomCustom)`
    max-width: 400px;
    margin: 10px auto;
    background-color: ${colors.primary};
    &:hover {
        background-color: ${darken(0.05, colors.primary)};
    }
    /* &:focus-within {
        background-color: ${colors.primaryDark};
    } */
`;

export const ButtonBackPage = styled.button`
    background-color: transparent;
    border-style: none;
    padding: 10px 0px;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    transition: all 0.3s;
    margin: 0 auto;
    color: ${colors.grayLight};
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        color: ${colors.white};
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

// export const Text = styled.span`
//     margin: 0 auto;
//     color: ${colors.grayLight};
// `;

export const CenterDiv = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
`;
