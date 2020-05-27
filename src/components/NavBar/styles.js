import styled from 'styled-components';
import { colors } from '../../styles';

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    position: fixed;
    z-index: 1000;
    top: 0px;
    right: 0px;
    left: 0px;
    width: 100%;
    height: 70px;
    box-shadow: 0px 0px 15px 1px black;
    background-color: ${colors.grayMedium};

    > Logo {
        align-items: left;
    }
`;
