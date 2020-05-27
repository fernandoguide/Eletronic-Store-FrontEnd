import React from 'react';
import MaterialIcon from 'material-icons-react';
import { colors } from '../../styles';
import { InputWithoutBorder, Container } from './styles';

const InputWithIcon = props => {
    // eslint-disable-next-line
    const { value, nameIcon, placeholder, onChange } = props;
    return (
        <Container>
            <MaterialIcon icon={nameIcon} size={23} color={colors.grayMedium} />
            <InputWithoutBorder
                value={value}
                placeholder={placeholder}
                onChange={text => onChange(text)}
                {...props}
            />
        </Container>
    );
};

export default InputWithIcon;
