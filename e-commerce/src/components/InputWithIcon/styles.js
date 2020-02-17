import styled from 'styled-components';
import { FontAwesome } from 'react-web-vector-icons';
import InputCustom from '../InputCustom';
import { colors } from '../../styles';

require('react-web-vector-icons/fonts');
export const InputWithoutBorder = styled(InputCustom)`
    border-style: none;
    margin-left: 15px;
    margin-right: 30px;
    padding-left: 15px;
`;

export const CustomIcon = styled(FontAwesome)`
    color: ${colors.primary};
`;

export const Container = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    border-width: 3px;
    border-style: solid;
    border-color: ${colors.primary};
    border-radius: 7px;
    margin-top: 20px;
    padding-right: 20;
    padding-left: 20;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
`;
