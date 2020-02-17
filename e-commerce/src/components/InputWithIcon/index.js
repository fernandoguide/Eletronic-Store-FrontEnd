import React from 'react';
import ReactDOM from 'react-dom';
import { InputWithoutBorder, Container, CustomIcon } from './styles';
import Icon, {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
    Octicons,
    Zocial,
} from 'react-web-vector-icons';
require('react-web-vector-icons/fonts');

const InputWithIcon = props => {
    // eslint-disable-next-line
    const { value, nameIcon, placeholder, onChange } = props;
    return (
        <Container>
            <FontAwesome name="plane" color="cyan" size={50} />
            <CustomIcon name={nameIcon} size={27} />
            <InputWithoutBorder
                value={value}
                placeholder={placeholder}
                onChange={text => onChange(text)}
            />
        </Container>
    );
};

export default InputWithIcon;
