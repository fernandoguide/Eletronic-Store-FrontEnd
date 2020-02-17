import React, { useState } from 'react';
import { Container } from './styles';
import InputWithIcon from '../../components/InputWithIcon';

require('react-web-vector-icons/fonts');
export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <InputWithIcon
                value={user}
                placeholder="Digite seu usuário"
                onChange={text => setUser(text.target.value)}
                nameIcon="plane"
            />
            <InputWithIcon
                value={password}
                type="password"
                placeholder="Digite seu usuário"
                onChange={text => setPassword(text.target.value)}
                nameIcon={'FaLock'}
            />
        </Container>
    );
}
