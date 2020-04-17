import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
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
import Logo from '../../components/Header';
import { Types as RegisterTypes } from '../../store/ducks/Register'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

// eslint-disable-next-line
export default function Register({ history }) {
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
            swal('Opah!', 'Preencha todos os campos', 'warning');
            setLoading(false);
        } else {
            // eslint-disable-next-line
            if (password1 !== password2) {
                swal('Opah!', 'Senhas Incompatíveis', 'warning');
                setLoading(false);
            } else {
                await dispatch({
                    type: RegisterTypes.SET_REGISTER,
                    payload: {
                        email: email.toLowerCase(),
                        user: user.toLowerCase(),
                        password: password1.toLowerCase(),
                    },
                });
                swal('Parabéns!', 'Você se cadastrou com sucesso', 'success');
                setEmail('');
                setUser('');
                setPassword2('');
                setLoading(false);
                // eslint-disable-next-line
                history.push('/Login');
            }
        }
    }

    function backPage() {
        window.history.back();
    }

    return (
        <Container>
            <ContainerForm>
                <Logo />
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
                        disabled={isLoading}
                        onClick={!isLoading ? handleSubmit : null}
                        type="submit"
                    >
                        {isLoading ? 'Loading…' : 'Registrar'}
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
