import styled from 'styled-components';
import { darken } from 'polished';
import ButtomCustom from '../../components/ButtonCustom';
import { colors } from '../../styles';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const AsideNav = styled.div`
    width: 400px;
    height: 100vh;
    background-color: ${colors.grayMedium};
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const SectionPerfil = styled.div`
    width: 90%;
    padding: 100px 70px 0 70px;
`;

export const NewAvatar = styled.div`
    width: 200px;
    height: 200px;
    z-index: 5;
    border-radius: 5px !important;
    display: flex;
    cursor: pointer;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ButtonProfile = styled(ButtomCustom)`
    margin-top: 50px;
    background-color: ${colors.primary};
    max-width: 280px;
    &:hover {
        background-color: ${darken(0.05, colors.primary)};
    }
    &:focus-within {
        background-color: ${darken(0.05, colors.primary)};
    }
`;
export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
`;
