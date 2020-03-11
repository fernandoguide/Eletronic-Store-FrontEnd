import React, { useState, useEffect } from 'react';
import {
    Container,
    ContainerForm,
    Form,
    ButtonLogin,
    Link,
    Text,
    CenterDiv,
} from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import { Types as RegisterTypes } from '../../store/ducks/Register'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        }
    }, [isLoading]);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        if (
            email === '' ||
            user === '' ||
            password1 === '' ||
            password2 === ''
        ) {
            setLoading(false);
        } else {
            await dispatch({
                type: RegisterTypes.SET_REGISTER,
                payload: {
                    email: email.toLowerCase(),
                    password: password1.toLowerCase(),
                },
            });
        }
    }

    return (
        <Container>
            <ContainerForm>
                <Form>
                    <InputWithIcon
                        value={email}
                        placeholder="Digite seu email"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="email"
                    />
                    <InputWithIcon
                        value={user}
                        placeholder="Digite seu nome"
                        onChange={text => setUser(text.target.value)}
                        nameIcon="person"
                    />
                    <InputWithIcon
                        value={password1}
                        type="password"
                        placeholder="Sua senha secreta"
                        onChange={text => setPassword1(text.target.value)}
                        nameIcon="lock"
                    />
                    <InputWithIcon
                        value={password2}
                        type="password"
                        placeholder="Confirme sua senha secreta"
                        onChange={text => setPassword2(text.target.value)}
                        nameIcon="lock"
                    />

                    <ButtonLogin
                        disabled={isLoading}
                        onClick={!isLoading ? handleSubmit : null}
                        type="submit"
                    >
                        {isLoading ? 'Loading…' : 'Registrar'}
                    </ButtonLogin>
                </Form>
                <CenterDiv>
                    <Link href="/Login">
                        <Text>Voltar</Text>
                    </Link>
                </CenterDiv>
            </ContainerForm>
        </Container>
    );
}
