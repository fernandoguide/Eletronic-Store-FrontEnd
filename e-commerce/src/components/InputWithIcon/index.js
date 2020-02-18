import React from 'react';
import { InputWithoutBorder, Container, CustomIcon } from './styles';

const InputWithIcon = props => {
    // eslint-disable-next-line
    const { value, nameIcon, placeholder, onChange } = props;
    return (
        <Container>
            {/* <FontAwesome name="plane" color="cyan" size={50} /> */}

            <CustomIcon icon={nameIcon} size={27} />
            <InputWithoutBorder
                value={value}
                placeholder={placeholder}
                onChange={text => onChange(text)}
            />
        </Container>
    );
};

export default InputWithIcon;
