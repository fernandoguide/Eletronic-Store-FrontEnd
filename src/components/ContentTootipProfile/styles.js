import styled from 'styled-components';
// eslint-disable-next-line
import { colors } from '../../styles';

export const ListTask = styled.ul`
    width: 100%;
    font-size: 16px;
    transition: background 0.4s ease 0s, color 0.3s ease 0s;
    list-style: none;

    > link {
        li {
            text-decoration: none;
        }
    }
`;
