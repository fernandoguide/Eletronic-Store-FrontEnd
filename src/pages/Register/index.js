import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-spinners-css';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    ContainerForm,
    Form,
    ButtonLogin,
    ButtonBackPage,
    CenterDiv,
    DivLink,
} from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import Nav from '../../components/NavBar';
import { Types as RegisterTypes } from '../../store/ducks/Register';

// eslint-disable-next-line
export default function Register({ history }) {
    const dispatch = useDispatch();
    const registerData = useSelector(state => state.Register);

    const [user, setUser] = useState('João Vinicius');
    const [email, setEmail] = useState('joaov1@gmail.com');
    const [password1, setPassword1] = useState('123');
    const [password2, setPassword2] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await dispatch({
            type: RegisterTypes.SET_REGISTER,
            payload: {
                nome: user,
                email: email.toLowerCase(),
                senha: password1,
                senha2: password2,
            },
        });
    }

    useEffect(() => {
        if (registerData.valid === true) {
            // eslint-disable-next-line
            history.push('/login');
        }
    }, [registerData]);

    function backPage() {
        window.history.back();
    }

    return (
        <Container>
            <ContainerForm>
                <Nav />
                <Form>
                    <InputWithIcon
                        name="email"
                        value={email}
                        type="email"
                        autocomplete="off"
                        placeholder="Digite seu email"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="email"
                    />
                    <InputWithIcon
                        name="user"
                        value={user}
                        type="text"
                        autocomplete="off"
                        placeholder="Digite seu nome"
                        onChange={text => setUser(text.target.value)}
                        nameIcon="person"
                    />
                    <InputWithIcon
                        name="password"
                        value={password1}
                        type="password"
                        autocomplete="off"
                        placeholder="Sua senha secreta"
                        onChange={text => setPassword1(text.target.value)}
                        nameIcon="lock"
                    />
                    <InputWithIcon
                        name="password"
                        value={password2}
                        type="password"
                        autocomplete="off"
                        placeholder="Confirme sua senha secreta"
                        onChange={text => setPassword2(text.target.value)}
                        nameIcon="lock"
                    />
                    <DivLink />
                    <ButtonLogin
                        disabled={registerData.loaging}
                        onClick={handleSubmit}
                        type="submit"
                    >
                        {registerData.loaging ? (
                            <Ellipsis color="#be97e8" size={50} />
                        ) : (
                            'Registrar'
                        )}
                    </ButtonLogin>
                </Form>
                <CenterDiv>
                    <DivLink>
                        <ButtonBackPage onClick={backPage}>
                            Voltar
                        </ButtonBackPage>
                    </DivLink>
                </CenterDiv>
            </ContainerForm>
        </Container>
    );
}
