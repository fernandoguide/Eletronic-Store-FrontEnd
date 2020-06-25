import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-spinners-css';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    ContainerForm,
    Form,
    ButtonLogin,
    Link,
    Text,
    CenterDiv,
    DivLink,
    Title,
} from './styles';
import Nav from '../../components/AlternativeNavBar';
import InputWithIcon from '../../components/InputWithIcon';
import { Types as LoginTypes } from '../../store/ducks/Login';
// import history from '../../services/history';
// eslint-disable-next-line
export default function Login({ history }) {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.Login);
    const ProfileData = useSelector(state => state.Profile);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [password, setPassword] = useState('UFW0011ZjF');

    async function handleSubmit(event) {
        event.preventDefault();

        await dispatch({
            type: LoginTypes.SET_LOGIN,
            payload: {
                email: email.toLowerCase().trim(),
                senha: password.trim(),
            },
        });
    }
    useEffect(() => {
        if (ProfileData.valid === true) {
            history.push('/');
        }
    }, [ProfileData]);

    return (
        <Container>
            {/* <CarouselSlides /> */}

            <ContainerForm>
                <Nav />
                <Form>
                    <Title>Login</Title>
                    <InputWithIcon
                        name="email"
                        value={email}
                        type="email"
                        autocomplete="off"
                        placeholder="Digite seu usuário"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="email"
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
                        disabled={loginData.loading}
                        onClick={handleSubmit}
                        // onClick={!isLoading ? handleSubmit : null}
                        type="submit"
                    >
                        {loginData.loading ? (
                            <Ellipsis color="#be97e8" size={50} />
                        ) : (
                                'Entrar'
                            )}
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
