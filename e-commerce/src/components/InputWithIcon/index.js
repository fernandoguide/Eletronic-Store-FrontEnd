import React from 'react';
import { InputWithoutBorder, Container, CustomIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputWithIcon = props => {
    const { value, nameIcon, placeholder, onChangeText } = props;
    return (
        <Container>
            <FontAwesomeIcon icon="check-square" />
            {/* <CustomIcon icon={nameIcon} size={27} /> */}
            <InputWithoutBorder
                value={value}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={text => onChangeText(text)}
            />
        </Container>
    );
};

export default InputWithIcon;
