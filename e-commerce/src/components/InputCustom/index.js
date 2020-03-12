import React from 'react';
import { InputTemplate } from './styles';

const InputCustom = props => {
    return <InputTemplate autocomplete="off" {...props} />;
};
export default InputCustom;
