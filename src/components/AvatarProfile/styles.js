import styled from 'styled-components';

export const AvatarTemplate = styled.div`
    border-radius: 5px !important;
    display: flex;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
`;
