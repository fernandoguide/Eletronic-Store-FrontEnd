import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-spinners-css';
import {
    Container,
    ContainerForm,
    Form,
    ButtonForgot,
    Link,
    Text,
    CenterDiv,
    DivLink,
    Title,
} from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import Nav from '../../components/AlternativeNavBar';
import history from '../../services/history';
import { Types as ForgotTypes } from '../../store/ducks/ForgotPassword'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

// eslint-disable-next-line
export default function ForgotPassword() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('usuario@gmail.com');
    const forgotData = useSelector(state => state.ForgotPassword);

    async function handleSubmit(event) {
        event.preventDefault();

        await dispatch({
            type: ForgotTypes.SET_FORGOTPASSWORD,
            payload: {
                email: email.toLowerCase(),
            },
        });
    }
    useEffect(() => {
        if (forgotData.valid === true) {
            history.push('/login');
        }
    }, [forgotData]);

    return (
        <Container>
            <ContainerForm>
                <Nav />
                <Form>
                    <Title>Redefinir Senha</Title>
                    <DivLink>
                        <Text>Email da conta</Text>
                    </DivLink>

                    <InputWithIcon
                        name="email"
                        value={email}
                        type="email"
                        placeholder="Digite seu email"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="email"
                    />

                    <ButtonForgot
                        disabled={forgotData.loading}
                        onClick={handleSubmit}
                        type="submit"
                    >
                        {forgotData.loading ? (
                            <Ellipsis color="#be97e8" size={50} />
                        ) : (
                            'Enviar'
                        )}
                    </ButtonForgot>
                </Form>
                <CenterDiv>
                    <DivLink>
                        <Link href="/Login">
                            <Text>Voltar</Text>
                        </Link>
                    </DivLink>
                </CenterDiv>
            </ContainerForm>
        </Container>
    );
}
