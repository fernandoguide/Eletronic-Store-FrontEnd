import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputCustom from '../../components/InputCustom';
import { colors } from '../../styles';

export const InputWithoutBorder = styled(InputCustom)``;

export const CustomIcon = styled(FontAwesomeIcon)`
    color: ${colors.primary};
`;

export const Container = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    border-width: 3px;
    border-color: ${colors.primary};
    border-radius: 200px;
    margin-top: 30px;
    padding-right: 20;
    padding-left: 20;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
`;
