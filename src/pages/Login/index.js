import React, { useState, useEffect } from 'react';
// import swal from 'sweetalert';
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
import Logo from '../../components/Header';
import InputWithIcon from '../../components/InputWithIcon';
import { Types as LoginTypes } from '../../store/ducks/Login'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line
export default function Login({ history }) {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.Login);

    const [email, setEmail] = useState('eletronicstore2020@gmail.com');
    const [password, setPassword] = useState('UFW0011ZjF');
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (isLoading) {
    //         setLoading(true);
    //     }
    // }, [isLoading]);

    async function handleSubmit(event) {
        event.preventDefault();
        // setLoading(true);
        // if (email === '' || password === '') {
        //     swal('Opah!', 'Preencha todos os campos', 'warning');

        //     setLoading(false);
        // } else {

        await dispatch({
            type: LoginTypes.SET_LOGIN,
            payload: {
                email: email.toLowerCase(),
                senha: password,
            },
        });
    }
    useEffect(() => {
        if (loginData.valid === true) {
            window.history.back();
        }
    }, [loginData]);

    return (
        <Container>
            {/* <CarouselSlides /> */}

            <ContainerForm>
                <Logo />
                <Form>
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
                        {loginData.loading ? 'Loading…' : 'Entrar'}
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
