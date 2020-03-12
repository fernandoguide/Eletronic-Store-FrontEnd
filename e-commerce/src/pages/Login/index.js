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
    DivLink,
} from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import { Types as LoginTypes } from '../../store/ducks/Login'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

export default function Login({ history }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('eletronicstore2020@gmail.com');
    const [password, setPassword] = useState('admin');
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
                        name="email"
                        value={email}
                        type="email"
                        autocomplete="off"
                        placeholder="Digite seu usuário"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="person"
                    />
                    <InputWithIcon
                        name="password"
                        value={password}
                        type="password"
                        autocomplete="off"
                        placeholder="Digite sua senha"
                        onChange={text => setPassword(text.target.value)}
                        nameIcon="lock"
                    />
                    <DivLink>
                        <Link href="/ForgotPassword">Esqueci minha senha</Link>
                    </DivLink>

                    <ButtonLogin
                        disabled={isLoading}
                        onClick={!isLoading ? handleSubmit : null}
                        type="submit"
                    >
                        {isLoading ? 'Loading…' : 'Entrar'}
                    </ButtonLogin>
                </Form>
                <CenterDiv>
                    <DivLink>
                        <Text>
                            Não tem uma conta?
                            <Link href="/Register"> Registre-se</Link>
                        </Text>
                    </DivLink>
                </CenterDiv>
            </ContainerForm>
        </Container>
    );
}
