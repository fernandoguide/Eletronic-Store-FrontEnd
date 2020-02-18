import React, { useState } from 'react';
import { Container, ContainerForm, Form } from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import CarouselSlider from '../../components/Carousel';

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <CarouselSlider />
            <ContainerForm>
                <Form>
                    <InputWithIcon
                        value={user}
                        placeholder="Digite seu usuário"
                        onChange={text => setUser(text.target.value)}
                        nameIcon="FaUser"
                    />
                    <InputWithIcon
                        value={password}
                        type="password"
                        placeholder="Digite seu usuário"
                        onChange={text => setPassword(text.target.value)}
                        nameIcon="Lock"
                    />
                </Form>
            </ContainerForm>
        </Container>
    );
}
