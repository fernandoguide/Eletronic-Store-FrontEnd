import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
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
import { Types as LoginTypes } from '../../store/ducks/Login'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        }
    }, [isLoading]);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        if (email === '' || password === '') {
            swal('Opah!', 'Preencha todos os campos', 'warning');

            setLoading(false);
        } else {
            await dispatch({
                type: LoginTypes.SET_LOGIN,
                payload: {
                    email: email.toLowerCase(),
                    password: password.toLowerCase(),
                },
            });
            setLoading(false);
        }
    }

    return (
        <Container>
            {/* <CarouselSlides /> */}

            <ContainerForm>
                <Form>
                    <InputWithIcon
                        value={email}
                        placeholder="Digite seu usuário"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="person"
                    />
                    <InputWithIcon
                        value={password}
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={text => setPassword(text.target.value)}
                        nameIcon="lock"
                    />
                    <Link href="#">Esqueci minha senha</Link>
                    <ButtonLogin
                        disabled={isLoading}
                        onClick={!isLoading ? handleSubmit : null}
                        type="submit"
                    >
                        {isLoading ? 'Loading…' : 'Entrar'}
                    </ButtonLogin>
                </Form>
                <CenterDiv>
                    <Text>
                        Não tem uma conta?
                        <Link href="/Register"> Registre-se</Link>
                    </Text>
                </CenterDiv>
            </ContainerForm>
        </Container>
    );
}
